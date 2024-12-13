import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Homepage from "./pages/Homepage"

import AppLayout from "./AppLayout"
import Anime from "./pages/Anime"
import Details from "./pages/Details"
import RandomAnime from "./pages/RandomAnime"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <div className="text-red-500">Something went wrong.</div>,
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
      },
      {
        path: "/anime/random",
        element: <RandomAnime />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}