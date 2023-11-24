import { type } from "os"
import { Link, NavLink } from "react-router-dom"
import { Stack } from "./Stack"
import { Component } from "react"
import './navbar.css'
import { title } from "../scripts/config"
import { Header } from "./text/Header"

interface NavbarLink {
    type: 'text' | 'button' | 'coloredButton'
    text: string
    to: string
}

const navbarLinks: NavbarLink[] = [
    {
        type: 'text',
        text: 'Home',
        to: '/',
    },
    {
        type: 'text',
        text: 'About Me',
        to: '/About',
    },
    {
        type: 'text',
        text: 'My Work',
        to: '/Works',
    },
]

export class Navbar extends Component {

    private constructNavbarLinks() {

        const elements: React.JSX.Element[] = []

        for (const link of navbarLinks) {

            elements.push(
                <NavLink className={'navbarLink'} to={link.to}>{link.text}</NavLink>
            )
        }

        return elements
    }


    render() {

        return (
            <nav className="navbarContainer" id="navbarContainer">
                <Stack className="navbarParent primaryBG" centerHorizontalContent="space-between">
                    <Stack centerVerticalItems="center" gap="10px">
                        <img className="navbarIcon" src="images/carsonIcon.png" alt="hi"/>
                        <Header type="h3"><h1>{title}</h1></Header>
                    </Stack>
                    <Stack centerVerticalItems="center">
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