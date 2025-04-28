import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home.jsx"; 
import Contact from "../pages/Contact.jsx";
import Rootlayout from "./layout/Rootlayout.jsx";
import Abouting from "../pages/Abouting.jsx";
import RecentWorks from "../pages/RecentWorks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/Home", 
        element: <Home />,
      },
      {
        path: "/Abouting",
        Component: Abouting,
      },
      {
        path: "/RecentWorks",
        element: <RecentWorks/>,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
