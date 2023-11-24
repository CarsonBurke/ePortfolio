import { Component, ReactNode } from "react";
import { Header } from "../components/text/Header";
import { Stack } from "../components/Stack";
import { PageSettings } from "../types/pageSettings";

interface WorkArgs {
    title: string
    description: string
}

export class Work extends Component<PageSettings & WorkArgs> {
    render() {
        return (
            <main>
                <Header type="h1"><h1>{this.props.title}</h1></Header>
                <Stack>
                    <Stack direction="column" className="secondaryBG">

                    </Stack>
                    <Stack direction="column">

                    </Stack>
                </Stack>
            </main>
        )
    }
}