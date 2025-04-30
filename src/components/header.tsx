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

const Header = () => {
  return (
    <header
      className="flex justify-between items-center px-6 py-4 z-50 sticky top-0 w-full 
      bg-transparent backdrop-blur-xl shadow-[0px_-2px_4px_rgba(0,0,0,0.1)]"
    >
      <div>
        <img src={Logo} alt="Datapilot Logo" className="w-52" />
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex gap-4 items-center">
        <Button className="dark:text-white px-5">Sign In</Button>
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
            <DropdownMenuItem asChild>
              <Button className="w-full justify-start px-2 text-sm dark:text-white">
                Sign In
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
