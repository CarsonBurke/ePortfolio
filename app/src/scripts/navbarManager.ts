import App from "../App"


class NavbarManager {
    navigationState?: 'mobile' | 'computer'

    init() {
        window.addEventListener('load', () => {

            const navbarContainer = document.getElementsByClassName('navbarContainer')[0] as HTMLElement | undefined
            if (!navbarContainer) return

            this.toggleTransparent(navbarContainer)
            this.resize(navbarContainer)

            window.addEventListener("scroll", () => { navbarManager.toggleTransparent(navbarContainer) })
            navbarContainer.addEventListener('mouseover', () => { navbarManager.toggleTransparent(navbarContainer , false) })
            navbarContainer.addEventListener('mouseout', () => { navbarManager.toggleTransparent(navbarContainer, true) })
            navbarContainer.addEventListener('mousedown', () => { navbarManager.toggleTransparent(navbarContainer, false) })
            navbarContainer.addEventListener('mouseup', () => { navbarManager.toggleTransparent(navbarContainer, true) })

            window.addEventListener('resize', () => { navbarManager.resize(navbarContainer) })
        })
    }
    
    /**
     * Wether or not to apply the transparent state to the navbar
     */ 
    toggleTransparent(navbarContainer: HTMLElement, state: boolean = true) {

        // Truthy state
        if (state && window.scrollY === 0) {

            navbarContainer.classList.add('topNavbar')

            return
        }

        // Falsey state

        navbarContainer.classList.remove('topNavbar')
    }

    resize(navbarContainer: HTMLElement) {

        if (!navbarContainer.dataset.mobileThreshold) return

        if (window.innerWidth <= parseInt(navbarContainer.dataset.mobileThreshold)) {

            navbarContainer.classList.add('navbarContainerMobile')
            return
        }

        navbarContainer.classList.remove('navbarContainerMobile')
    }
}

export const navbarManager = new NavbarManager()