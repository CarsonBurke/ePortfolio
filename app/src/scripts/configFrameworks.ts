import { DefaultConfigFramework } from "../types/config"
import { GlobalConfig } from "./config"

type ConfigFrameworks = Record<keyof GlobalConfig, DefaultConfigFramework>

export const configFrameworks: ConfigFrameworks = {
    name: {
        text: 'name',
    },
    version: {
        number: 0
    },
}