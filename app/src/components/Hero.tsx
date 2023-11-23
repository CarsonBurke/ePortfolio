import { Component, ReactNode } from "react";
import { Header } from "./text/Header";
import './hero.css'
import { Stack } from "./Stack";

export class Hero extends Component {

    render() {
        return (
            <section style={{backgroundImage: '../../public/images/background.jpg'}}>
                <Stack height="100vh" centerHorizontalContent="center" centerVerticalItems="center" debug="hero">
                    <Stack direction="column" gap="10px">
                        <Header type="h1" textAlign="center"><h1>Carson Burke</h1></Header>
                        <p>A student at Capilano University persueing a degree in computer science</p>
                    </Stack>
                    <img className="heroImage" src='images/logo.png' alt="logo" />
                </Stack>
            </section>
        )
    }
}