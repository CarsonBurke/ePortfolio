import { Component, ReactNode } from "react";
import { PageSettings } from "../types/pageSettings";
import { Header } from "../components/text/Header";

export class About extends Component<PageSettings> {
    render() {
        return (
            <main className="topOffsetForNavbar">
                <section>
                    <Header type="h1" textAlign="center"><h1>About Me</h1></Header>
                </section>
            </main>
        )
    }
}