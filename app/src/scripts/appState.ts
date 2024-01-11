import { Component } from "react";
import { AppState } from "../App";

export function updateAppState(
  appState: AppState,
  setAppState: Component["setState"],
  newState: AppState
) {
  let hasStateChanged = false;

  for (const x in newState) {
    const key = x as keyof AppState;

    if (newState[key] === undefined || newState[key] === appState[key])
      continue;

    hasStateChanged = true;
  }

  if (!hasStateChanged) return;

  console.log("update app state");
  setAppState(newState);
}

export const defaultAppState: AppState = {
    enableNavbar: true,
    enableFooter: true,
}