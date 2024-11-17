import { Outlet } from "react-router-dom"
import Navbar from "./ui/Navbar"

export default function AppLayout() {
    return (
        <div className="flex flex-col w-full h-full dark:bg-gray-900">
            <Navbar />
            <div className="flex flex-row justify-center items-center">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    )
}