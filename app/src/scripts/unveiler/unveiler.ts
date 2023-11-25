import './unveiler.css'

type AnimationTypes = 'floatUp' | 'floatDown' | 'floatLeft' | 'floatRight'


class Unveiler {

    animations = {
        floatUp: {
            xOffset: 0,
            yOffset: 200,
        },
        floatDown: {
            xOffset: 0,
            yOffset: -200,
        },
        floatLeft: {
            xOffset: 200,
            yOffset: 0,
        },
        floatRight: {
            xOffset: -200,
            yOffset: 0,
        }
    }
    
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

        let animationType: AnimationTypes
        el.classList.forEach((key, value) => {
            if (!this.animations[key as AnimationTypes]) return

            animationType = key as AnimationTypes
        })
        const animation = this.animations[animationType]
    
        const elBoundingRect = el.getBoundingClientRect()
        let elMinTop = Math.min(
            elBoundingRect.top + showValue,
            // around the middle of the element
            elBoundingRect.bottom - el.offsetHeight / 2
        )
        if (animationType && el.classList.contains('unveilShow')) elMinTop -= animation.yOffset

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

        el.dataset.overflowTop = overflowTop.toString()
        el.dataset.elMinTop = elMinTop.toString()

/* 
        if (overflowTop > elBoundingRect.top &&
            el.classList.contains('unveilShow')) {
            console.log('on')

            el.classList.add("unveilShow")

            console.log(animationType)
            if (!animationType) {
                el.style.animationName = 'still'
                return
            }

            el.style.animationName = animationType
            return
        }
 */
        if (overflowTop > elMinTop) {
            console.log('on', elMinTop, overflowTop)

            el.classList.add("unveilShow")

            console.log(animationType)
            if (!animationType) {
                el.style.animationName = 'still'
                return
            }

            el.style.animationName = animationType
            return
        }
    
        el.classList.remove("unveilShow")
        el.style.animationName = "undefined"
        return
    }
}

export const unveiler = new Unveiler()

