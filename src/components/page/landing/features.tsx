import Analytics from "@/assets/analytics.avif";
import Integration from "@/assets/integration.jpg";
import Dashboard from "@/assets/dashboard.jpg";

const Features = () => {
  const features = {
    svgs: [Analytics, Integration, Dashboard],
    titles: ["Smart Analytics", "Seamless Integration", "Custom Dashboards"],
    descriptions: [
      "Instantly transform raw data into actionable insights with our AI-driven analytics tools.",
      "Connect DataPilot with your favorite apps and platforms in just a few clicks.",
      "Build personalized dashboards to track the metrics that matter most to your business.",
    ],
    bgColor: ["#F7CA00", "#0766FF", "#090B0F"],
  };

  return (
    <div className="flex flex-col justify-center items-center mt-24 mb-14">
      <h1 className="text-5xl pb-6">Why DATAPILOT?</h1>
      <div className="flex gap-10 pl-3 pr-3 justify-center">
        {features.svgs.map((SvgComponent, index) => (
          <div
            style={{ backgroundColor: features.bgColor[index] }}
            className=" w-1/4 rounded-2xl text-white p-7 relative  transition-all duration-300 ease-in-out shadow-md hover:shadow-2xl hover:scale-105 hover:cursor-pointer"
            key={index}
          >
            <div className="w-20 h-20 bg-white absolute -top-4 -right-4 rounded-2xl shadow-md flex items-center justify-center">
              <img
                src={SvgComponent}
                alt=""
                className="w-20 h-20 object-contain rounded-2xl"
              />
            </div>
            <h1 className="pt-9 pb-4 font-extrabold">
              {features.titles[index]}
            </h1>
            <p>{features.descriptions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
