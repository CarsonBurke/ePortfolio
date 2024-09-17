import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />

      <main className="main column gapLarge">
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </main>

      <Footer />
    </>
  ),
  errorComponent: ({ error }) => (
    <>
      <Navbar />

      <main className="main column gapLarge">

        <section className="sectionPadded column centerRow centerColumn">
        <h1 className="textLarge largeHeader">A critical error has occured: {JSON.stringify(error) || "unknown"}</h1>
        <h3>this is a custom error message</h3>
      </section>
      </main>

      <Footer />
    </>
  ),
});
