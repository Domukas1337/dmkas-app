import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";

import AppLayout from "./AppLayout";
import Anime from "./pages/Anime";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

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
        element: <Anime />,
      },
      {
        path: "/anime/details",
        element: <Details />,
      },
      {
        path: "/anime/random",
        element: <Details random={true} />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "bg-white",
            color: "text-black",
          },
        }}
      />
    </>
  );
}
