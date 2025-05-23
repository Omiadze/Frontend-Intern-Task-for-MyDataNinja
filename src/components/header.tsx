import Logo from "@/assets/logo.png";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center px-6 py-4 z-50 sticky top-0 w-full 
      bg-transparent backdrop-blur-xl shadow-[0px_-2px_4px_rgba(0,0,0,0.1)]"
    >
      <div>
        <Link className="hover:cursor-pointer" to="/">
          <img src={Logo} alt="Datapilot Logo" className="w-52" />
        </Link>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex gap-4 items-center">
        <Link className="" to="/login">
          <Button className="dark:text-white px-5 hover:cursor-pointer">
            Sign In
          </Button>
        </Link>
        <ModeToggle />
      </div>

      {/* Mobile dropdown menu */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="focus:outline-none">
              <Menu size={28} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem
              asChild
              className="flex justify-center items-center"
            >
              <Link className="" to="/login">
                <Button className="dark:text-white px-5 hover:cursor-pointer">
                  Sign In
                </Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
