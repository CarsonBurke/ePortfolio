import { Component } from "react";
import './footer.css'
import { Header } from "./text/Header";

export class Footer extends Component {
    render() {
        return (
            <footer>
                <Header type="h2"><h1>Footer</h1></Header>
            </footer>
        )
    }
}