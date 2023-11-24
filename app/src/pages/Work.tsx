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
}

export function Work(props: WorkArgs & PageSettings) {

    const params = useParams<{id: string}>()
    
    return (
        <main className="topOffsetForNavbar">
            <section>
                <Header type="h1" textAlign="center"><h1>{props.title}</h1></Header>
                <Stack width="100%" gap="5%" alignHorizontalContent="center" collapseAtWidth="1000px">
                    <Stack direction="column" className="secondaryBG">
                        <ul>
                            <li>id: {params.id}</li>
                            <li>{props.category}</li>
                            <li>{props.description}</li>
                        </ul>
                    </Stack>
                    <Stack direction="column" maxWidth="70%">
                        <p>{props.summary}</p>
                    </Stack>
                </Stack>
            </section>
        </main>
    )
}