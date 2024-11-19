import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Homepage from "./pages/Homepage"

import AppLayout from "./AppLayout"
import Anime from "./pages/Anime"
import Details from "./pages/Details"

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
      },
      {
        path: "/anime/details",
        element: <Details />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}