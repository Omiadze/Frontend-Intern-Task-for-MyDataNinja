import Logo from "../assets/datapilot_logo-removebg-preview.png";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const header = () => {
  return (
    <div className="flex justify-between items-center pl-5 pr-5 z-50 dark:bg-black  overflow-hidden  sticky top-0 left-0 w-full   bg-white shadow-[0px_-2px_4px_rgba(0,0,0,0.1)] border-solid border-b border-b-gray-300 dark:border-b-solid dark:border-b-neutral-800">
      <div className="">
        <img src={Logo} alt="Datapilot Logo" className="w-52" />
      </div>
      <div className="flex gap-2">
        <Button>Sign In</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default header;
