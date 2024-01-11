import { SyntheticEvent } from "react";
import { unveiler } from "./unveiler/unveiler";
import { navbarManager } from "./navbarManager";

export function appLoad(event: Event) {
  unveiler.animateElements();
  navbarManager.onLoad()
}
