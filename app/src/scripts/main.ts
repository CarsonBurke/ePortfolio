import { navbarManager } from "./navbarManager";
import { parallaxify } from "./parallaxify";
import { unveiler } from "./unveiler/unveiler";

export function main() {

    unveiler.init()
    parallaxify.init()
    navbarManager.init()
}