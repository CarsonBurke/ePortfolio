export const title = 'Carson Burke'
export const navbarHeight = '55px'

export type ThemeTypes = 'light' | 'dark'

export interface Theme {
    text: {
        primary: string
        secondary: string
    }
    background: {
        primary: string
        secondary: string
    }
}

export const themes: {[key in ThemeTypes]: Theme} = {
    dark: {
        text: {
            primary: 'white',
            secondary: 'black',
        },
        background: {
            primary: 'black',
            secondary: 'white',
        },
    },
    light: {
        text: {
            primary: 'black',
            secondary: 'white',
        },
        background: {
            primary: 'white',
            secondary: 'black',
        },
    },
}
export const currentTheme = 'light'