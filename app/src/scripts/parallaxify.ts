export function parallax() {
    
    function getPosition(item: any) {

        return item.getBoundingClientRect().top / window.innerHeight * 100
    }

    const itemsToParallax = document.getElementsByClassName("parallaxify")

    for (let item of itemsToParallax as any) {

        if (!item.dataset.speedMultiplier) {

            item.dataset.speedMultiplier = "0.7"
        }

        item.style.transform = "translate3d(0, " + getPosition(item) * item.dataset.speedMultiplier + "px, 0)"
    }

    const imagesToParallax = document.getElementsByClassName("parallaxifyBg")
    
    for (let item of imagesToParallax as any) {

        if (!item.dataset.speedMultiplier) {

            item.dataset.speedMultiplier = "3"
        }

        item.style.backgroundAttachment = "fixed"
        item.style.backgroundPositionY = getPosition(item) * item.dataset.speedMultiplier + "px"
    }
}