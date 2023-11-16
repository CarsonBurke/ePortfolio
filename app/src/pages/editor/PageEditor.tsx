import { Component, ReactNode, SyntheticEvent } from "react";
import { Config, config } from "../../scripts/config";
import { globalConfigFrameworks } from "../../scripts/globalConfigFrameworks";
import { DefaultConfigFramework } from "../../types/config";

const globalConfigFrameworkConstructors: Record<keyof DefaultConfigFramework, (configName: string) => React.JSX.Element | React.JSX.Element[]> = {
    text(configName) {

        return (
            <div>
                
            </div>
        )
    },
    number(configName) {

        return (
            <div>

            </div>
        )
    },
    options(configName) {

        return (
            <div>
                
            </div>
        )
    },
    toggles(configName) {

        return (
            <div>
                
            </div>
        )
    },
}

function globalConfigElements() {

    for (const configName in globalConfigFrameworks) {

        const configFramework = globalConfigFrameworks[configName as keyof Config]
        const elements: React.JSX.Element[] = []

        for (const key in configFramework) {

            const configMaker = key as keyof DefaultConfigFramework
            const newElements = globalConfigFrameworkConstructors[configMaker](configName)
        }
    }
}

export class PageEditor extends Component {

    private changeName(event: SyntheticEvent) {
        event.preventDefault()

        const element = document.getElementById('configName') as HTMLInputElement
        console.log(element.value)
        config.name = element.value
        console.log(config)
    }

    render() {
        return (
            <main>

                <form onSubmit={this.changeName}>
                    <input id='configName' type="text" defaultValue={config.name} />
                    <button>Submit</button>
                </form>

            </main>
        )
    }
}