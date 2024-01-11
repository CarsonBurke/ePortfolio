import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { PageSettings } from "../types/pageSettings";
import { routeChanged } from "../scripts/routeChanged";

export function PagesWrapper(props: PageSettings) {
  console.log("wrapper", props.appState);

  const location = useLocation();

  useEffect(() => {
    console.log("Location changed");
    routeChanged();
  }, [location]);

  return (
    <>
      {props.appState.enableNavbar && <Navbar />}
      <Outlet />
      {props.appState.enableFooter && <Footer />}

      <ScrollRestoration />
    </>
  );
}
