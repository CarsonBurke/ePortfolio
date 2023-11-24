import React, { Component } from "react";
import './button.css'
import { Header } from "./text/Header";

interface ButtonArgs {
    children: React.JSX.Element | React.JSX.Element[] | string
    f(el: HTMLElement): any
}

export class Button extends Component<ButtonArgs> {
    button?: HTMLElement | null

    componentDidMount(): void {
        
        if (this.button) {

            this.props.f(this.button)
        }
    }

    render() {

        return (
            <button className="button" ref={ref => this.button = ref}>
                <Header type='h6'>{this.props.children}</Header>
            </button>
        )
    }
}