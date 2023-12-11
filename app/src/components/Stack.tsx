import { CSSProperties, Component } from "react"
import { Property } from 'csstype'
import './stack.css'

interface StackArgs {
    children: React.JSX.Element | React.JSX.Element[]
    className?: string
    /**
     * The direction content is layed out. Defaults to horizontal
     */
    direction?: 'row' | 'column'
    gap?: string
    width?: string
    maxWidth?: string
    height?: string
    maxHeight?: string
    alignHorizontalContent?: Property.JustifyContent
    alignVerticalContent?: Property.JustifyContent
    alignHorizontalItems?: Property.JustifyItems
    alignVerticalItems?: Property.JustifyItems
    collapseAtWidth?: string
    wrap?: Property.FlexWrap
    debug?: string
    style?: CSSProperties
}

const flexDirectionInverse = {
    column: 'row',
    row: 'column'
}

export class Stack extends Component<StackArgs> {

    render() {

        const style: CSSProperties = {
            ...this.props.style,
            display: 'flex', 
            flexDirection: this.props.direction,
            gap: this.props.gap, 
            width: this.props.width,
            maxWidth: this.props.maxWidth,
            height: this.props.height,
            maxHeight: this.props.maxHeight,
            flexWrap: this.props.wrap,
        }

        if (this.props.direction === 'column') {

            style.justifyContent = this.props.alignHorizontalContent
            style.alignContent = this.props.alignVerticalContent
            style.justifyItems = this.props.alignVerticalItems
            style.alignItems = this.props.alignHorizontalItems
        }
        // default to row
        else {

            style.justifyContent = this.props.alignHorizontalContent
            style.alignContent = this.props.alignVerticalContent 
            style.justifyItems = this.props.alignHorizontalItems
            style.alignItems = this.props.alignVerticalItems
        }

        if (this.props.debug) {

            console.log(style)
        }

        return (
            <>
                <div className={`stack ${this.props.className} [@media(min-width:${this.props.collapseAtWidth})]:column`} style={style}>
                    {this.props.children}
                </div>
            </>
        )
    }
}