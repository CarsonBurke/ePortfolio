import { Component, ReactNode } from "react";
import { Header } from "../components/text/Header";
import { PageSettings } from "../types/pageSettings";

export class MyWork extends Component<PageSettings> {
    render() {
        return (
            <main className="topOffsetForNavbar">
                <section>
                    <Header type="h1" textAlign="center"><h1>My Work</h1></Header>
                </section>
                <section>
                    
                </section>
            </main>
        )
    }
}