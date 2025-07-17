import type { ReactNode } from "react";
import Navbar from "../Components/core/Navbar"

interface NavBarLayoutProps {
    children: ReactNode;
    showNavbar: boolean;
}
function NavbarLayout ({children, showNavbar}:NavBarLayoutProps) {

    return(
        <div className="w-screen h-screen flex flex-col items-start">
            {showNavbar && <Navbar />}
            {children}
        </div>
    )
}
export default NavbarLayout