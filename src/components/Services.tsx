import { Code, Palette, LineChart, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Creating responsive and dynamic websites that prioritize speed, functionality, and aesthetic appeal.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Crafting stunning and impactful designs that capture attention and convey your message effectively.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Analyzing complex datasets and extracting meaningful insights to support your business goals.",
  },
  {
    icon: Smartphone,
    title: "Android Development",
    description:
      "Building mobile applications that are customized, user-friendly, and tailored to meet your unique requirements.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center bg-black py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
