import { Component } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Stack } from "../components/Stack";
import { PageSettings } from "../types/pageSettings";
import { Header } from "../components/text/Header";

export class Home extends Component<PageSettings> {

    render() {

        return (
            <main>
                <Hero />
                <section>
                    <Header className="unveil floatUp" type="h2" textAlign="center"><h1>Check out</h1></Header>
                    <Stack direction="column">

                        <header> 
                            Header
                        </header>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>
                        <Link to='about'>Editor</Link>

                    </Stack>
                </section>
            </main>
        )
    }
}