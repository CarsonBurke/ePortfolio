import { Component, ReactNode } from "react";
import { Header } from "../components/text/Header";
import { PageSettings } from "../types/pageSettings";
import { Stack } from "../components/Stack";
import { works } from "../scripts/works";
import { Card } from "../components/Card";

export class MyWork extends Component<PageSettings> {
    render() {
        return (
            <main className="topOffsetForNavbar">
                <section>
                    <Header type="h1" textAlign="center"><h1>My Work</h1></Header>
                </section>
                <section>
                    <Stack gap='20px' alignHorizontalContent='center' wrap="wrap">
                        {generateWorkCards()}
                    </Stack>
                </section>
            </main>
        )
    }
}

function generateWorkCards() {

    const elements: JSX.Element[] = []

    for (const id in works) {

        const work = works[id]

        elements.push(
            <Card title={work.name} to={'/works/' + id} imageSRC="images/english.jpg" imageAlt="about me"></Card>
        )
    }

    return elements
}