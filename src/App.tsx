import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Homepage from "./pages/Homepage"

import AppLayout from "./AppLayout"
import Anime from "./pages/Anime"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/anime",
        element: <Anime />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}