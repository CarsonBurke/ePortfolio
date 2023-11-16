export interface GlobalConfig {
    name: string
    version: number
}

export interface Config extends GlobalConfig {

}

export const config: Config = {
    name: 'neo',
    version: 0,
}