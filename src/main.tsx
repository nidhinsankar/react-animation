import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Scroll from "./components/Scroll.tsx";
import Timeline from "./components/Timeline..tsx";
import Sidebar from "./components/Sidebar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/scroll-animation",
    element: <Scroll />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
