import { Component, ReactNode } from "react";
import { Header } from "../components/text/Header";
import { Stack } from "../components/Stack";
import { PageSettings } from "../types/pageSettings";
import { useParams } from "react-router-dom";

interface WorkArgs {
    title: string
    category: string
    description: string
    summary: string
    id: string
}

export class Work extends Component<PageSettings & WorkArgs> {

    render() {

        const id = this.props.id

        return (
            <main className="topOffsetForNavbar">
                <section>
                    <Header type="h1" textAlign="center"><h1>{this.props.title}</h1></Header>
                    <Stack width="100%" gap="5%" alignHorizontalContent="center" collapseAtWidth="1000px">
                        <Stack direction="column" className="secondaryBG">
                            <ul>
                                <li>{this.props.category}</li>
                                <li>{this.props.description}</li>
                            </ul>
                        </Stack>
                        <Stack direction="column" maxWidth="70%">
                            <p>{this.props.summary}</p>
                        </Stack>
                    </Stack>
                </section>
            </main>
        )
    }
}
/* 
export const DynamicWork = (props: PageSettings & WorkArgs) => {
    <Work {...props} params={useParams<{id: string}>()} />
} */

export function DynamicWork(props: WorkArgs & PageSettings) {

    const id = useParams<{id: string}>()

    return (
        <>
            <Work {...props}  />
        </>
    )
}