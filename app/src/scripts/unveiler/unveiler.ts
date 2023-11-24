import './unveiler.css'

class Unveiler {

    animations = new Set(['floatUp', 'floatDown', 'floatLeft', 'floatRight'])
    
    init() {

        window.addEventListener('load', () => this.animateElements())
        window.addEventListener('scroll', () => this.animateElements())
        window.addEventListener('resize', () => this.animateElements())
    }

    animateElements() {

        const elementsToAnimate = document.getElementsByClassName("unveil")

        for (const el of elementsToAnimate as any as HTMLElement[]) {
    
            this.animateElement(el)
        }
    }

    animateElement(el: HTMLElement) {

        const showValue = el.dataset.showValue ? parseFloat(el.dataset.showValue) : 20
        // 
    
        let animationDuration = el.dataset.time ? parseFloat(el.dataset.time) : 0.5
        if (el.dataset.timeAdd) {
            
            animationDuration += parseFloat(el.dataset.timeAdd)
        }
        
        // Convert to a string, seconds
        el.style.animationDuration = animationDuration + "s"
    
        const elBoundingRect = el.getBoundingClientRect()
        const elMinTop = Math.min(
            elBoundingRect.top + showValue,
            // around the middle of the element
            elBoundingRect.bottom - el.offsetHeight / 2
        )

        const overflowTop = Math.min(
            // bottom of the window, up by the show value
            document.body.scrollHeight, 
            // bottom of the viewport, up by the show value
            window.innerHeight)
/* 
        if (overflowTop > elBoundingRect.top &&
            el.classList.contains('unveilShow')) {
                console.log('off')

            let hasAnimation: boolean = false

            el.classList.forEach((key, value) => {
                if (!this.animations.has(key)) return

                hasAnimation = true
            })

            el.style.animationName = 'undefined'
            return
        }
 */
        if (overflowTop > elBoundingRect.top &&
            el.classList.contains('unveilShow')) {
            console.log('on')

            el.classList.add("unveilShow")

            let animation: string

            el.classList.forEach((key, value) => {
                if (!this.animations.has(key)) return

                animation = key
            })
            console.log(animation)
            if (!animation) {
                el.style.animationName = 'still'
                return
            }

            el.style.animationName = animation
            return
        }

        if (overflowTop > elMinTop) {
            console.log('on', elMinTop, overflowTop)

            el.classList.add("unveilShow")

            let animation: string

            el.classList.forEach((key, value) => {
                if (!this.animations.has(key)) return

                animation = key
            })
            console.log(animation)
            if (!animation) {
                el.style.animationName = 'still'
                return
            }

            el.style.animationName = animation
            return
        }
    
        el.classList.remove("unveilShow")
        el.style.animationName = "undefined"
        return
    }
}

export const unveiler = new Unveiler()

