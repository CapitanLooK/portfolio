
import Link from "next/link"
import { Button } from "../ui/button"
import Navbar from "./Navbar"
import MobileNavbar from "./MobileNavbar"

function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-3xl font-semibold">
                        Alejandro <span className={"text-accent"}>.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                </div>
                <div className="xl:hidden">
                    <MobileNavbar />
                </div>
            </div>
        </header>
    )
}

export default Header