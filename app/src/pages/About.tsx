import { Component, ReactNode } from "react";
import { PageSettings } from "../types/pageSettings";
import { Header } from "../components/text/Header";
import { Stack } from "../components/Stack";
import { aboutText } from "../scripts/config";

export class About extends Component<PageSettings> {
    render() {
        return (
            <main className="topOffsetForNavbar">
                <section>
                    <Stack direction="column" alignHorizontalContent="center" alignHorizontalItems="center" gap="20px">
                        <Stack className="secondaryBG" gap="20px" alignHorizontalContent="center" width="fit-content" alignVerticalItems="center" style={{borderRadius: 'var(--defaultBorderRadius)', padding: '20px'}}>
                            <img className="unveil floatUp" src="images/carsonIcon.png" style={{width: '150px'}} alt="carson icon"/>
                            <Header className="unveil floatUp" type="h1" textAlign="center"><h1>About Me</h1></Header>
                        </Stack>
                        <Stack alignHorizontalContent="center" width="100%"> 
                            <textarea className="secondaryBG unveil floatUp" readOnly={true} style={{ width: '80%', padding: '10px', borderRadius: 'var(--defaultBorderRadius)', height: '80vh' }} contentEditable>
                                {aboutText}
                            </textarea>
                        </Stack>
                    </Stack>
                </section>
            </main>
        )
    }
}