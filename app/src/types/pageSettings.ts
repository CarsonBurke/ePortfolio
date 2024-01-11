import { Component } from "react";
import { AppState } from "../App";

export interface PageSettings {
    appState: AppState
    setAppState: Component["setState"]
}