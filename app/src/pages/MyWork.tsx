import { Component, ReactNode } from "react";
import { Header } from "../components/text/Header";
import { PageSettings } from "../types/pageSettings";

export class MyWork extends Component<PageSettings> {
    render() {
        return (
            <main>

                <Header type="h1"><h1>My Work</h1></Header>

                <div>

                </div>
            </main>
        )
    }
}