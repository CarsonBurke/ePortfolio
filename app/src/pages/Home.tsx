import { Component } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Stack } from "../components/Stack";
import { PageSettings } from "../types/pageSettings";
import { Header } from "../components/text/Header";
import { Card } from "../components/Card";

export class Home extends Component<PageSettings> {

    render() {

        return (
            <main>
                <Hero />
                <section>
                    <Stack direction="column" gap="20px">
                        <Header className="unveil floatUp" type="h2" textAlign="center"><h1>Check out</h1></Header>


                        <Stack wrap="wrap" gap="20px" alignHorizontalContent="center">
                            <Card title="Who I am" to="/about" imageSRC="images/carsonIcon.png" imageAlt="about me"></Card>

                            <Card title="My work" to="/works" imageSRC="images/work.jpg" imageAlt="my work"></Card>
                        </Stack>

                    </Stack>
                </section>
            </main>
        )
    }
}