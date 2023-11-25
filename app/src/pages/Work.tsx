import { Component, ReactNode } from "react";
import { Header } from "../components/text/Header";
import { Stack } from "../components/Stack";
import { PageSettings } from "../types/pageSettings";
import { useParams } from "react-router-dom";
import { works } from "../scripts/works";
import { Error } from "./Error";

export function Work(props: PageSettings) {

    const params = useParams<{id: string}>()

    const work = works[params.id]
    if (work === undefined) return /* <Error {...props} errorCode={404} /> */ undefined

    return (
        <main className="topOffsetForNavbar">
            <section>
                <Header type="h1" textAlign="center"><h1>{work.name}</h1></Header>
                <Stack width="100%" gap="5%" alignHorizontalContent="center" collapseAtWidth="1000px">
                    <Stack direction="column" className="secondaryBG">
                        <section>
                            <Stack direction="column" gap="10px">
                                <p>id: {params.id}</p>
                                <p>category: {work.category}</p>
                                <p>{work.description}</p>
                            </Stack>
                        </section>
                    </Stack>
                    <Stack direction="column">
                        <p>{work.summary}</p>
                    </Stack>
                </Stack>
            </section>
        </main>
    )
}