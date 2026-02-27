import type { ReactNode } from "react"
import Navbar from "../components/core/Navbar"
import BotBar from "@/components/core/BotBar"

interface NavBarLayoutProps {
	children: ReactNode
}
const NavbarLayout = ({ children }: NavBarLayoutProps) => {
	return (
		<div className="w-screen min-h-screen flex flex-col items-center">
			<Navbar />
			<div className="flex-1">
				{children}
			</div>
			<BotBar />
		</div>
	)
}
export default NavbarLayout
