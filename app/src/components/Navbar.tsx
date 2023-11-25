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
/* <Header key={i} type="h6" className={'navbarLink'}><NavLink key={i} to={link.to}>{link.text}</NavLink></Header> */
export class Navbar extends Component {

    private constructNavbarLinks() {

        const elements: React.JSX.Element[] = []

        for (let i = 0; i < navbarLinks.length; i++) {

            const link = navbarLinks[i]

            elements.push(
                
                <NavLink className='' key={i} to={link.to}><Header key={i} type="h6" className='navbarLink unveil floatDown'>{link.text}</Header></NavLink>
            )
        }

        return elements
    }


    render() {

        return (
            <nav className="navbarContainer" id="navbarContainer">
                <Stack className="navbarParent tertiaryBG" alignHorizontalContent="space-between">
                    <Link to={'/'}>
                        <Stack className="unveil floatDown" alignVerticalItems="center" gap="10px" height="100%">
                        
                            <img className="navbarIcon" src="images/carsonIcon.png" alt="carson icon"/>
                            {/* <Header type="h3"><h1>{title}</h1></Header> */}
                        </Stack>
                    </Link>
                    <Stack alignVerticalItems="center">
                        {this.constructNavbarLinks()}
                    </Stack>
                </Stack>
            </nav>
        )
    }
}