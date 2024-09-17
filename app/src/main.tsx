import "./styles/main.css";
import "./styles/colors.css";
import "./styles/sizing.css";
import "./styles/interactible.css";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import { Route } from "./routes/__root";
import { Home } from "./pages/Home";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultComponent: Home,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

