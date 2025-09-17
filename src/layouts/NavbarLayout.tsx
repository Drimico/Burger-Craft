import type { ReactNode } from "react";
import Navbar from "../components/core/Navbar";

interface NavBarLayoutProps {
  children: ReactNode;
}
function NavbarLayout({ children }: NavBarLayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col items-start">
      <Navbar />
      {children}
    </div>
  );
}
export default NavbarLayout;
