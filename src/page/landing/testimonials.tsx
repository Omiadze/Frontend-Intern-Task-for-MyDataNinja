import jamesImg from "@/assets/james.jpg";
import sarahImg from "@/assets/sarah.jpg";

const Testimonials = () => {
  const testimonials = {
    img: [sarahImg, jamesImg],
    text: [
      "DataPilot completely changed how we understand our customers. The insights are clear, and the setup was incredibly easy!",
      "We've saved hundreds of hours by automating our reporting with DataPilot. A must-have tool for growing companies!",
    ],
    name: ["— Sarah K., Marketing Manager", "— James L., COO"],
  };

  return (
    <div className="flex flex-col justify-center items-center mt-48 ">
      <h1 className="text-5xl">User Success Stories</h1>
      <div className="flex flex-col mt-10 justify-center gap-3 items-center md:flex-row ">
        {testimonials.img.map((image, i) => (
          <div key={i} className="relative w-72 h-72 mx-auto">
            {/* Rounded image */}
            <img
              src={image}
              alt={testimonials.name[i]}
              className="w-full h-full object-cover rounded-full"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/40 text-white rounded-full flex flex-col justify-center items-center text-center p-6 hover:bg-black/80 transition-all duration-300 hover:cursor-pointer">
              <p className="text-md font-extrabold italic mb-4">
                "{testimonials.text[i]}"
              </p>
              <p className="text-xs font-semibold">{testimonials.name[i]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
