import { Outlet } from "react-router-dom"
import Navbar from "./ui/Navbar"
import Footer from "./ui/Footer"

export default function AppLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-col flex-grow justify-center items-center">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}