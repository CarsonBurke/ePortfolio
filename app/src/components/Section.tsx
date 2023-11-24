import { Component } from "react";
import { Stack } from "./Stack";

interface SectionArgs {
    container?: string
}

export class Section extends Stack {
    render() {

        

        return (
            <section>
                {this.props.children}
            </section>
        )
    }
}