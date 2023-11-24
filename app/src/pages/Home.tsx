import { Component } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Stack } from "../components/Stack";
import { PageSettings } from "../types/pageSettings";

export class Home extends Component<PageSettings> {

    render() {

        return (
            <main>
                <Hero />
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
            </main>
        )
    }
}