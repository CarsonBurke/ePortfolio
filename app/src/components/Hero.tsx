import { Component } from "react";
import { Header } from "./text/Header";
import './hero.css'
import { Stack } from "./Stack"
import { Link } from "react-router-dom"

export class Hero extends Component {

    render() {
        return (
            <section className="heroContainer secondaryText parallaxifyBG" style={{backgroundImage: 'url(' + require('../images/mountains.jpg') + ')'/* 'url(images/mountains.jpg)' */}}>
                <Stack className="heroParent" alignHorizontalContent="space-evenly" alignVerticalItems="center">
                    <img className="heroImage unveil floatUp" src={require('../images/carsonIcon.png')} alt="logo" />
                    <Stack className="heroTextContent" direction="column" gap="20px" alignHorizontalItems="center">
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