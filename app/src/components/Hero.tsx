import { Component, ReactNode } from "react";
import { Header } from "./text/Header";
import './hero.css'
import { Stack } from "./Stack";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export class Hero extends Component {

    render() {
        return (
            <section className="heroContainer secondaryText parallaxifyBG" style={{backgroundImage: 'url(images/background.jpg)'}}>
                <Stack className="heroParent" alignHorizontalContent="space-evenly" alignVerticalItems="center">
                    <img className="heroImage" src='images/logo.png' alt="logo" />
                    <Stack direction="column" gap="20px" alignHorizontalItems="center">
                        <Stack direction="column" gap="5px">
                            <Header className="unveil floatUp" type="title" textAlign="center"><header>Carson Burke</header></Header>
                            <p className="unveil floatUp">A student at Capilano University persueing a degree in computer science</p>
                        </Stack>
                        <Link className="button primaryHighlightBG unveil floatUp" to={'/works'}>
                            <span className="material-icons-outlined">
                                receipt_long
                            </span>
                            See My Work
                        </Link>
                    </Stack>
                </Stack>
            </section>
        )
    }
}