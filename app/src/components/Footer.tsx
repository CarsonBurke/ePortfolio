import { Component } from "react";
import './footer.css'
import { Header } from "./text/Header";
import { Stack } from "./Stack";
import { title } from "../scripts/config";
import { Button } from "./Button";
import { Link } from "@tanstack/react-router";

export class Footer extends Component {
    render() {
        return (
            <footer className="footerContainer secondaryBG">
                <section className="container">
                    <Stack alignHorizontalContent="space-around" alignVerticalItems="center" wrap="wrap" gap="20px">
                        <Stack className="unveil floatUp" alignVerticalItems="center" gap="10px" wrap="wrap" alignHorizontalContent="center">
                            <img className="footerIcon" src={"images/carsonIcon.png"} alt="carson icon"/>
                            <Header type="h2" textAlign="center"><h1>{title}</h1></Header>
                        </Stack>
                        <Stack gap="15px" alignVerticalItems="center" wrap="wrap" alignHorizontalContent="center">
                            <Header className="unveil floatUp" type="h6"><Link className="footerLink defaultTransition" to='/' >Home</Link></Header>
                            <Header className="unveil floatUp" type="h6"><Link className="footerLink defaultTransition" to='/works' >About</Link></Header>
                            <Header className="unveil floatUp" type="h6"><Link className="footerLink defaultTransition" to='/works' >My Work</Link></Header>
                            <button className='button primaryHighlightBG whiteText unveil floatUp' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Top</button>
                        </Stack>
                    </Stack>
                </section>
            </footer>
        )
    }
}