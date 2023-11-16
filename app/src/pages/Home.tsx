import { Component } from "react";
import { Column } from "../components/Column";
import { Link } from "react-router-dom";

export class Home extends Component {

    render() {

        return (
            <main>
                <Column>
                    <header>
                        Header
                    </header>
                    <Link to='pageEditor'>Editor</Link>
                </Column>
            </main>
        )
    }
}