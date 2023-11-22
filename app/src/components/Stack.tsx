import { CSSProperties, Component } from "react"

interface StackArgs {
    className?: string
    /**
     * The direction content is layed out. Defaults to horizontal
     */
    direction?: 'row' | 'column'
    children: React.JSX.Element | React.JSX.Element[]
    gap?: string
    height?: string
    centerVertical?: AlignSetting
    centerHorizontal?: AlignSetting
    collapseAtWidth?: string
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

            style.justifyContent = this.props.centerVertical
            style.alignItems = this.props.centerHorizontal 
        }
        // default to row
        else {

            style.justifyContent = this.props.centerHorizontal
            style.alignItems = this.props.centerVertical 
        }

        return (
            <>
                <div className={'stack' + this.props.className} style={style}>
                    {this.props.children}
                </div>
            </>
        )
    }
}