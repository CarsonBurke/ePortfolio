import { type } from "os"
import { Row } from "./Row"
import { Link, NavLink } from "react-router-dom"

export const title = 'Novara'

interface NavbarLink {
    type: 'text' | 'button' | 'coloredButton'
    text: string
    to: string
}

const navbarLinks: NavbarLink[] = [
    {
        type: 'text',
        text: 'home',
        to: '/',
    }
]

export class Navbar {

    private constructNavbarLinks() {

        const elements: React.JSX.Element[] = []

        for (const link of navbarLinks) {

            elements.push(
                <NavLink to={link.to}>{link.text}</NavLink>
            )
        }

        return elements
    }


    render() {

        return (
            <nav className="navbarContainer" id="navbarContainer">
                <Row>
                    <Row>

                    </Row>
                    <Row>
                        {this.constructNavbarLinks()}
                    </Row>
                </Row>
            </nav>
        )
    }
}

export function navbarInit() {

    const navbarContainer = document.getElementById('navbarContainer')

    window.addEventListener('resize', () => {})
}