import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Todo from "../form/Todo";
import Task from "../form/Task";
import Navbar from "../components/Navbar";
import App from "../App";
import Timmer from "../components/timmer";
import Home from "../components/Home";
import { Quote } from "lucide-react";
import Quotes from "../components/Quotes";
import Planner from "../components/Planner";



function Approutes() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navbar />,
        children: [
          {
            path:"",
            element: <Home />,
          },
          {
            path: "task",
            element: <Task />,
          },
          {
            path: "cart",
            element: <Todo />,
          },
          {
            path: "weather",
            element: <App />,
          },
          {
            path: "promodo",
            element: <Timmer />,
          },
          {
            path: "quotes",
            element: <Quotes />,
          },
          {
            path: "planner",
            element: <Planner />,
          },
        ],
      },
    ],
    {
      basename: "/productivity_app",
    }
  );

  return <RouterProvider router={router} />;
}

export default Approutes;
