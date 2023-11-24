import { Component, ReactNode } from "react";
import { PageSettings } from "../types/pageSettings";
import { Header } from "../components/text/Header";
import { Stack } from "../components/Stack";
import { Section } from "../components/Section";
import { Link } from "react-router-dom";

type ErrorCodes = 404

interface ErrorResponse {
    name: string
    message: string
}

const errorsByCode: {[key in ErrorCodes]: ErrorResponse } = {
    404: {
        name: 'Page not found',
        message: 'The page you were looking for does not exist. Sorry for the inconvenience',
    }
}

interface ErrorArgs {
    errorCode: ErrorCodes
}

export class Error extends Component<PageSettings & ErrorArgs> {

    render() {

        const errorResponse = errorsByCode[this.props.errorCode]

        return (
            <main className="topOffsetForNavbar">
                <Section alignVerticalItems="center">
                    <Stack direction='column' alignHorizontalContent="center">
                        <Header type="h1" textAlign="center"><h1>Error: {errorResponse.name}</h1></Header>
                        <p>{errorResponse.message}</p>
                        <Stack alignHorizontalContent="center" gap="20px">
                            <button className="button primaryHighlightBG whiteText" onClick={() => window.history.go(-1)}>
                                <span className="material-icons-outlined">
                                    arrow_back
                                </span>
                                Back
                                </button>
                            <Link to='/'>
                                <button className="button primaryHighlightBG whiteText">
                                    <span className="material-icons-outlined">
                                        home
                                    </span>
                                    Home
                                </button>
                                </Link>
                        </Stack>
                    </Stack>
                </Section>
            </main>
        )
    }
}