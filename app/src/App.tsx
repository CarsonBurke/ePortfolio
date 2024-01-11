import React, { Component, useEffect, useState } from "react";
import { Home } from "./pages/Home";
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/sizing.css";
import "./styles/interactible.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error } from "./pages/Error";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import { Testing } from "./pages/Testing";
import { MyWork } from "./pages/MyWork";
import { Work } from "./pages/Work";
import { PagesWrapper } from "./components/PagesWrapper";
import { defaultAppState } from "./scripts/appState";
import { main } from "./scripts/main";
import { appLoad } from "./scripts/init";

main();
window.addEventListener("load", (event) => appLoad(event));

export interface AppState {
  enableNavbar: boolean;
  enableFooter: boolean;
}

export interface AppArgs {}

export default function App() {
  const [appState, setAppState] = useState(Object.assign({}, defaultAppState));

  const customRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <PagesWrapper appState={appState} setAppState={setAppState} />,
        children: [
          {
            path: "/",
            element: <Home appState={appState} setAppState={setAppState} />,
            loader: Loader,
            errorElement: (
              <Error
                errorCode={404}
                appState={appState}
                setAppState={setAppState}
              />
            ),
          },
          {
            element: <Navbar />,
            loader: Loader,
            errorElement: (
              <Error
                errorCode={404}
                appState={appState}
                setAppState={setAppState}
              />
            ),
          },
          {
            path: "/",
            element: <Footer />,
            loader: Loader,
            errorElement: (
              <Error
                errorCode={404}
                appState={appState}
                setAppState={setAppState}
              />
            ),
          },
          {
            path: "about",
            element: <About appState={appState} setAppState={setAppState} />,
            loader: Loader,
            errorElement: (
              <Error
                errorCode={404}
                appState={appState}
                setAppState={setAppState}
              />
            ),
          },
          {
            path: "/works",
            element: <MyWork appState={appState} setAppState={setAppState} />,
            loader: Loader,
            errorElement: (
              <Error
                errorCode={404}
                appState={appState}
                setAppState={setAppState}
              />
            ),
          },
          {
            path: "/works/:id",
            element: <Work appState={appState} setAppState={setAppState} />,
            loader: Loader,
            errorElement: (
              <Error
                errorCode={404}
                appState={appState}
                setAppState={setAppState}
              />
            ),
          },
          {
            path: "/testing",
            element: <Testing appState={appState} setAppState={setAppState} />,
            loader: Loader,
            errorElement: (
              <Error
                errorCode={404}
                appState={appState}
                setAppState={setAppState}
              />
            ),
          },
          {
            path: "*",
            element: (
              <Error
                appState={appState}
                setAppState={setAppState}
                errorCode={404}
              />
            ),
            loader: Loader,
            errorElement: (
              <Error
                errorCode={404}
                appState={appState}
                setAppState={setAppState}
              />
            ),
          },
        ],
      },
    ],
    {}
  );

  return (
    <div className="app lightTheme" id="app">
      <RouterProvider router={customRouter} />

      {/* <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={<Home appState={appState} setAppState={setAppState} />}
              loader={Loader}
            />
            <Route
              path="/about"
              element={<About appState={appState} setAppState={setAppState} />}
              loader={Loader}
            />
            <Route
              path="/works"
              element={<MyWork appState={appState} setAppState={setAppState} />}
              loader={Loader}
            />
            <Route
              path="/works/:id"
              element={<Work appState={appState} setAppState={setAppState} />}
              loader={Loader}
              errorElement={
                <Error errorCode={404} appState={appState} setAppState={setAppState} />
              }
            />
            <Route
              path="/testing"
              element={<Testing appState={appState} setAppState={setAppState} />}
              loader={Loader}
            />
            <Route
              path="*"
              element={<Error appState={appState} setAppState={setAppState} errorCode={404} />}
              loader={Loader}
            />
          </Routes>
        </BrowserRouter> */}
    </div>
  );
}

/**
 * Routes wrapper
 * 
 */