import { serviceData } from "../constant/data";

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center flex flex-col gap-5">
        <div className="text-left md:text-center flex flex-col"> 
          <h1 className="small-heading">
            Our Services
          </h1>
          <h2 className="big-heading text-dark whitespace-nowrap">
            Leading You Home
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((item,  index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={item.logo}
                alt={item.alt}
                className="h-60 md:90 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-dark text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                 
                <div className="mt-6">
                  <a
                    className="group inline-flex items-center text-blue-700 font-medium hover:text-blue-600 transition-all duration-300"
                  >
                    Learn More
                    <span
                      className="ml-1 inline-block transform transition-transform duration-300 ease-out delay-75 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};