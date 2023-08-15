import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeSection } from "./components/home section/home-section.tsx";
import { DetailSection } from "./components/detail section/detail-section.tsx";

export const router = createBrowserRouter([
  {
    path: "/FrontendMentorChallenge--REST-Countries-API/",
    element: <App />,
    children: [
      {
        path: "/FrontendMentorChallenge--REST-Countries-API/",
        element: <HomeSection />,
      },
      {
        path: "/FrontendMentorChallenge--REST-Countries-API/:country",
        element: <DetailSection />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
