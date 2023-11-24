class Parallaxify {
    init() {

        window.addEventListener('load', () => this.run())
        window.addEventListener('scroll', () => this.run())
        window.addEventListener('resize', () => this.run())
    }

    run() {

        const elementsToParallax = document.getElementsByClassName("parallaxify")

        for (let element of elementsToParallax as any) {
    
            if (!element.dataset.speedMultiplier) {
    
                element.dataset.speedMultiplier = "0.7"
            }
            
            element.style.transform = "translate3d(0, " + this.getPosition(element) * element.dataset.speedMultiplier + "px, 0)"
            console.log(element.style.transform)
        }
    
        const imagesToParallax = document.getElementsByClassName("parallaxifyBG")
        
        for (let element of imagesToParallax as any) {
    
            if (!element.dataset.speedMultiplier) {
    
                element.dataset.speedMultiplier = "3"
            }
    
            element.style.backgroundAttachment = "fixed"
            element.style.backgroundPositionY = this.getPosition(element) * element.dataset.speedMultiplier + "px"
        }
    }

    private getPosition(element: HTMLElement) {

        return element.getBoundingClientRect().top / window.innerHeight * 100
    }
}

export const parallaxify = new Parallaxify()