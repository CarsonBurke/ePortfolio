import { Component, ReactNode } from "react";
import { Header } from "./text/Header";
import './hero.css'
import { Stack } from "./Stack";

export class Hero extends Component {

    render() {
        return (
            <section className="heroContainer secondaryText parallaxifyBG" style={{backgroundImage: 'url(images/background.jpg)'}}>
                <Stack height="100vh" centerHorizontalContent="center" centerVerticalItems="center">
                    <img className="heroImage" src='images/logo.png' alt="logo" />
                    <Stack direction="column" gap="10px">
                        <Header type="h1" textAlign="center"><h1>Carson Burke</h1></Header>
                        <p>A student at Capilano University persueing a degree in computer science</p>
                    </Stack>
                </Stack>
            </section>
        )
    }
}