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

export const aboutText = `  Hello World! I’m a first-year student at Capilano University, studying science with a focus on computer science. Despite the science degree, I’m intrigued by social sciences such as sociology and economics, especially in regards to applying these fields and the insights they provide to public policy. As I progress through my academic career, I intend to expand my knowledge of how artificial intelligence works and the powerful applications it has, with my intentions being to work in the field and use the technology to improve lives.  Ultimately, my goal is to combine my learnings of how societies function with artificial intelligence to avoid the current shortfalls in the current AI landscape, where spectacle and profit are so often prioritized over useful and ethical tools.`