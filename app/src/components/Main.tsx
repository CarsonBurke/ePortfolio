import { Component, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface MainArgs {
    children: React.JSX.Element | React.JSX.Element[] | string
    navbar: boolean
    footer: boolean
    className?: string
}

export class Main extends Component<MainArgs> {

    render(): ReactNode {
        
        return (
            <>
                {this.props.navbar && <Navbar />}
                <main className={this.props.className}>
                    {this.props.children}
                </main>
                {this.props.footer && <Footer />}
            </>
        )
    }
}