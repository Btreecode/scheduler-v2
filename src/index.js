import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import { ROUTES } from "./data/routes";

// --------------------------

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: ROUTES
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
