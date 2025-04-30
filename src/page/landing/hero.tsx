import { Button } from "@/components/ui/button";
import baner from "@/assets/baner.jpg";
import Star from "../svgs/star";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={baner}
        alt="DataPilot banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black/60  z-10">
        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-20 text-white gap-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Unlock the Power of Your Data with DataPilot
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            DataPilot helps you easily collect, analyze, and visualize your
            business data — all in one intuitive platform. Make smarter
            decisions, faster.
          </p>
          <Button className="group text-white text-xl px-6 py-2 hover:cursor-pointer p-8 flex items-center gap-2">
            Get Started
            <span className="transition-transform duration-500 group-hover:rotate-180">
              <Star />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
