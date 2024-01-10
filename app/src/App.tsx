import React, { Component, useEffect, useState } from "react";
import { Home } from "./pages/Home";
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/sizing.css";
import "./styles/interactible.css";
import {
  BrowserRouter,
  Route,
  RouterProps,
  RouterProvider,
  Routes,
  ScrollRestoration,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { initLoad } from "./scripts/init";
import { Error } from "./pages/Error";
import { main } from "./scripts/main";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import { Testing } from "./pages/Testing";
import { MyWork } from "./pages/MyWork";
import { Work } from "./pages/Work";
import { Router } from "react-router-dom";

main();

interface AppState {
  enableNavbar: boolean;
  enableFooter: boolean;
}

interface AppArgs {}

export default class App extends Component<AppArgs> {
  state: Readonly<AppState>;
  customRouter: any;

  constructor(args: AppArgs) {
    super(args);

    this.state = {
      enableNavbar: true,
      enableFooter: true,
    };
    this.setState = this.setState.bind(this);

    this.customRouter = createBrowserRouter(
      [
        {
          path: "/",
          element: <Home setAppState={this.setState} />,
          loader: Loader,
          errorElement: <Error errorCode={404} setAppState={this.setState} />,
        },
        {
          path: "/",
          element: <ScrollRestoration />,
          loader: Loader,
          errorElement: <Error errorCode={404} setAppState={this.setState} />,
        },
        {
          element: <Navbar />,
          loader: Loader,
          errorElement: <Error errorCode={404} setAppState={this.setState} />,
        },
        {
          path: "/",
          element: <Footer />,
          loader: Loader,
          errorElement: <Error errorCode={404} setAppState={this.setState} />,
        },
        {
          path: "about",
          element: <About setAppState={this.setState} />,
          loader: Loader,
          errorElement: <Error errorCode={404} setAppState={this.setState} />,
        },
        {
          path: "/works",
          element: <MyWork setAppState={this.setState} />,
          loader: Loader,
          errorElement: <Error errorCode={404} setAppState={this.setState} />,
        },
        {
          path: "/works/:id",
          element: <Work setAppState={this.setState} />,
          loader: Loader,
          errorElement: <Error errorCode={404} setAppState={this.setState} />,
        },
        {
          path: "/testing",
          element: <Testing setAppState={this.setState} />,
          loader: Loader,
          errorElement: <Error errorCode={404} setAppState={this.setState} />,
        },
        {
          path: "*",
          element: <Error setAppState={this.setState} errorCode={404} />,
          loader: Loader,
          errorElement: <Error errorCode={404} setAppState={this.setState} />,
        },
      ],
      {}
    );
  }

  componentDidMount(): void {
    initLoad();
  }

  render() {
    return (
      <div className="app lightTheme" id="app">
        <RouterProvider router={this.customRouter} />

        {/* <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={<Home setAppState={this.setState} />}
              loader={Loader}
            />
            <Route
              path="/about"
              element={<About setAppState={this.setState} />}
              loader={Loader}
            />
            <Route
              path="/works"
              element={<MyWork setAppState={this.setState} />}
              loader={Loader}
            />
            <Route
              path="/works/:id"
              element={<Work setAppState={this.setState} />}
              loader={Loader}
              errorElement={
                <Error errorCode={404} setAppState={this.setState} />
              }
            />
            <Route
              path="/testing"
              element={<Testing setAppState={this.setState} />}
              loader={Loader}
            />
            <Route
              path="*"
              element={<Error setAppState={this.setState} errorCode={404} />}
              loader={Loader}
            />
          </Routes>
        </BrowserRouter> */}
      </div>
    );
  }
}

/**
 * Routes wrapper
 * 
 */