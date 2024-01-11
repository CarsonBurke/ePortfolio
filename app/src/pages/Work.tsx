import { Component, ReactNode } from "react";
import { Header } from "../components/text/Header";
import { Stack } from "../components/Stack";
import { PageSettings } from "../types/pageSettings";
import { useParams } from "react-router-dom";
import { works } from "../scripts/works";
import { Error } from "./Error";
import { updateAppState } from "../scripts/appState";

export function Work(props: PageSettings) {
    updateAppState(props.appState, props.setAppState, {
      enableNavbar: true,
      enableFooter: true,
    });

    const params = useParams<{id: string}>()

    const work = works[params.id]
    if (work === undefined) return /* <Error {...props} errorCode={404} /> */ undefined

    return (
      <main className="topOffsetForNavbar">
        <section>
          <Stack direction="column" gap="20px">
            <Header type="h1" textAlign="center">
              <h1>{work.name}</h1>
            </Header>
            <Stack
              width="100%"
              gap="5%"
              alignHorizontalContent="center"
              collapseAtWidth="1000px"
            >
              <Stack
                direction="column"
                className="secondaryBG"
                gap="8px"
                style={{
                  padding: "10px",
                  borderRadius: "var(--defaultBorderRadius)",
                }}
              >
                <p>id: {params.id}</p>
                <p>category: {work.category}</p>
                {/* <p>{work.description}</p> */}
              </Stack>
              <Stack direction="column" gap="20px">
                <p>{work.summary}</p>
              </Stack>
            </Stack>
            <Stack alignHorizontalContent="center">
              <textarea
                className="secondaryBG"
                readOnly={true}
                style={{
                  width: "80%",
                  padding: "10px",
                  borderRadius: "var(--defaultBorderRadius)",
                  height: "80vh",
                }}
                contentEditable={false}
                defaultValue={work.textContent}
              ></textarea>
            </Stack>
          </Stack>
        </section>
      </main>
    );
}