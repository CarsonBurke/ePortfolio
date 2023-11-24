import { CSSProperties, Component } from "react"
import { Property } from 'csstype'
import './stack.css'

interface StackArgs {
    className?: string
    /**
     * The direction content is layed out. Defaults to horizontal
     */
    direction?: 'row' | 'column'
    children: React.JSX.Element | React.JSX.Element[]
    gap?: string
    height?: string
    centerHorizontalContent?: Property.JustifyContent
    centerVerticalContent?: Property.JustifyContent
    centerHorizontalItems?: Property.JustifyItems
    centerVerticalItems?: Property.JustifyItems
    collapseAtWidth?: string
    debug?: string
}

const flexDirectionInverse = {
    column: 'row',
    row: 'column'
}

export class Stack extends Component<StackArgs> {

    render() {

        const style: CSSProperties = {
            display: 'flex', 
            flexDirection: this.props.direction,
            gap: this.props.gap, 
            height: this.props.height
        }

        if (this.props.direction === 'column') {

            style.justifyContent = this.props.centerHorizontalContent
            style.alignContent = this.props.centerVerticalContent
            style.justifyItems = this.props.centerVerticalItems
            style.alignItems = this.props.centerHorizontalItems
        }
        // default to row
        else {

            style.justifyContent = this.props.centerHorizontalContent
            style.alignContent = this.props.centerVerticalContent 
            style.justifyItems = this.props.centerHorizontalItems
            style.alignItems = this.props.centerVerticalItems
        }

        if (this.props.debug) {

            console.log(style)
        }

        return (
            <>
                <div className={`stack ${this.props.className} [@media(min-width:${this.props.collapseAtWidth})]:stackCollapseToColumn`} style={style}>
                    {this.props.children}
                </div>
            </>
        )
    }
}