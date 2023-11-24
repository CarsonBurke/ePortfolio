import { CSSProperties, Component, ReactNode } from "react";
import { currentTheme, themes } from "../../scripts/config";

const headerTypes = {
    h1: {
        size: '42px',
        weight: '700',
    },
    h2: {
      size: '37px',
      weight: '600',
    },
    h3: {
        size: '32px',
        weight: '500',
    },
    h4: {
        size: '28px',
        weight: '500',
    },
    h5: {
        size: '24px',
        weight: '500',
    },
    h6: {
        size: '20px',
        weight: '500',
    },
    h7: {
        size: '17px',
        weight: '500',
    },
    h8: {
        size: '15px',
        weight: '500',
    },
}

interface HeaderArgs {
    children: React.JSX.Element | React.JSX.Element[]
    type: keyof typeof headerTypes
    textAlign?: 'left' | 'center' | 'right'
    theme?: 'primary' | 'secondary'
}

export class Header extends Component<HeaderArgs> {

    render() {

        const headerType = headerTypes[this.props.type]
        const styles: CSSProperties = {
            fontSize: headerType.size, 
            fontWeight: headerType.weight
        }
        styles.textAlign = this.props.textAlign
        if (this.props.theme) styles.color = themes[currentTheme].text[this.props.theme]

        return (
            <div style={styles}>
                {this.props.children}
            </div> 
        )
    }
}