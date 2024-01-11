import { navbarManager } from "./navbarManager";
import { unveiler } from "./unveiler/unveiler";

export function routeChanged() {

    unveiler.animateElements()
}