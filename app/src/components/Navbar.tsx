import { type } from "os"
import { Link, NavLink } from "react-router-dom"
import { Stack } from "./Stack"
import { Component } from "react"

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

export class Navbar extends Component {

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
                <Stack className="navbarParent">
                    <Stack>

                    </Stack>
                    <Stack>
                        {this.constructNavbarLinks()}
                    </Stack>
                </Stack>
            </nav>
        )
    }
}

export function navbarInit() {

    const navbarContainer = document.getElementById('navbarContainer')

    window.addEventListener('resize', () => {})
}