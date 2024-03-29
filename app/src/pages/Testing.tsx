import { Component } from "react";
import { PageSettings } from "../types/pageSettings";
import { Header } from "../components/text/Header";
import { updateAppState } from "../scripts/appState";

export class Testing extends Component<PageSettings> {

    constructor(args: any) {
        super(args)

        this.props.setAppState({ enableNavbar: true, enableFooter: false })
    }

    render() {
        updateAppState(this.props.appState, this.props.setAppState, {
          enableNavbar: true,
          enableFooter: true,
        });

        return (
            <main className="topOffsetForNavbar">
                <section>
                    <Header type="h1"><h1>Testing</h1></Header>
                </section>
            </main>
        )
    }
}