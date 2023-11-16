import { Component } from "react"

interface RowArgs {
    children: React.JSX.Element | React.JSX.Element[]
}

export class Row extends Component<RowArgs> {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}