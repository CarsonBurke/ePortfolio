import { Component } from "react"

interface ColumnArgs {
    children: React.JSX.Element | React.JSX.Element[]
}

export class Column extends Component<ColumnArgs> {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}