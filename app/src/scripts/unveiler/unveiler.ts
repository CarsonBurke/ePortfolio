class Unveiler {

    animations = new Set(['floatUp', 'floatDown', 'floatLeft', 'floatRight'])
    
    init() {

        window.addEventListener('load', this.animateElements)
        window.addEventListener('scroll', this.animateElements)
    }

    animateElements() {

        const elementsToAnimate = document.getElementsByClassName("animate")

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
            // around hte middle of the element
            elBoundingRect.bottom - el.scrollHeight / 2
        )

        const overflowTop = Math.min(
            // bottom of the window, up by the show value
            document.body.scrollHeight, 
            // bottom of the viewport, up by the show value
            window.innerHeight)

        if (overflowTop > elBoundingRect.top &&
            el.classList.contains('animateShow')) {

            let hasAnimation: boolean = false

            el.classList.forEach((key, value) => {
                if (!this.animations.has(key)) return

                hasAnimation = true
            })

            if (hasAnimation) return

            el.classList.add('still')
            return
        }

        if (overflowTop > elMinTop) {

            el.classList.add("animateShow")

            let hasAnimation: boolean = false

            el.classList.forEach((key, value) => {
                if (!this.animations.has(key)) return

                hasAnimation = true
            })

            if (hasAnimation) return

            el.classList.add('still')
            return
        }
    
        el.classList.remove("animateShow")

        el.style.animationName = "undefined"
        return
    }
}

export const unveiler = new Unveiler()

