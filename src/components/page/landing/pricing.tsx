const Pricing = () => {
  const pricing = {
    plan: ["Starter", "Pro", "Enterprise"],
    price: ["$0 / month", "$29 / month", "Contact us"],
    desc: [
      "Get started with basic analytics and dashboards. Ideal for individuals and small teams.",
      "Unlock advanced features, integrations, and priority support. Perfect for growing businesses.",
      "Custom solutions and services tailored for large organizations.",
    ],
  };

  return (
    <div className="bg-black text-white py-16 px-6 mt-42">
      <h2 className="text-3xl font-bold text-center mb-2">
        Select Your Plan: Simple Pricing for Everyone
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Explore our straightforward pricing plans and get started with DataPilot
        today.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {pricing.plan.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 w-full md:w-1/3 bg-[#1c1c1c] ${
              plan === "Pro" ? "border-2 border-yellow-400 h" : ""
            }`}
          >
            <div className="flex justify-between">
              <h3 className="text-yellow-400 font-semibold mb-2">{plan}</h3>
              {plan === "Pro" ? (
                <span className="text-end">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0666 2.03499C12.1171 -0.678329 15.8829 -0.678329 16.9334 2.03499L17.2059 2.73876C17.8101 4.29944 19.4895 5.12412 21.0628 4.63277L21.7723 4.4112C24.5077 3.55696 26.8556 6.55924 25.4303 9.08845L25.0605 9.74449C24.2407 11.1992 24.6554 13.0523 26.0131 14.0003L26.6254 14.4277C28.9858 16.0758 28.1478 19.8196 25.3199 20.2602L24.5864 20.3745C22.9598 20.6279 21.7976 22.1139 21.9173 23.7874L21.9712 24.542C22.1793 27.4514 18.7864 29.1175 16.6854 27.1377L16.1404 26.6241C14.932 25.4853 13.068 25.4853 11.8595 26.6241L11.3146 27.1377C9.21363 29.1175 5.82067 27.4514 6.02874 24.542L6.08271 23.7874C6.2024 22.1139 5.0402 20.6279 3.41362 20.3745L2.68011 20.2602C-0.147817 19.8196 -0.985802 16.0758 1.37462 14.4277L1.98686 14.0003C3.34455 13.0523 3.75935 11.1992 2.93945 9.74449L2.56973 9.08845C1.14433 6.55924 3.49232 3.55696 6.22767 4.4112L6.93714 4.63277C8.51047 5.12412 10.1899 4.29944 10.7941 2.73876L11.0666 2.03499Z"
                      fill="white"
                    />
                  </svg>
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="text-4xl font-bold mb-2">
              {pricing.price[index]}
            </div>
            <div className="flex">
              <span className="text-yellow-400 mr-2">✔</span>
              <p className="text-sm text-gray-300 mb-6">
                {pricing.desc[index]}
              </p>
            </div>
            <button
              className={`${
                plan === "Pro" ? "bg-green-600" : "bg-gray-700"
              } text-white w-full py-3 mt-auto rounded-md font-semibold`}
            >
              {plan === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

// const Pricing = () => {
//   const pricing = {
//     plan: ["Starter", "Pro", "Enterprise"],
//     price: ["$0 / month", "$29 / month", "Contact us"],
//     desc: [
//       "Get started with basic analytics and dashboards. Ideal for individuals and small teams.",
//       "Unlock advanced features, integrations, and priority support. Perfect for growing businesses.",
//       "Custom solutions and services tailored for large organizations.",
//     ],
//   };
//   return <div>Pricing</div>;
// };

// export default Pricing;
