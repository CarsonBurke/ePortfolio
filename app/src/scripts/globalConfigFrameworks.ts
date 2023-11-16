import { DefaultConfigFramework } from "../types/config"
import { GlobalConfig } from "./config"

type GlobalConfigFrameworks = Record<keyof GlobalConfig, DefaultConfigFramework>

export const globalConfigFrameworks: GlobalConfigFrameworks = {
    name: {

    },
    version: {
        
    },
}