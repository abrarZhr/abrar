import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const projects = [
  {
    title: "Pik eCommerce Platform",
    description:
      "Full-featured e-commerce platform built for Jahez. Handles product listings, cart, checkout, and order management with a seamless user experience.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "REST API"],
    color: "#1BB6F9",
    link: "https://pik.sa",
  },
  {
    title: "Pik Portal",
    description:
      "Internal business portal for Jahez operations. Built scalable React interfaces with responsive design across all devices.",
    tags: ["React.js", "TypeScript", "Responsive Design"],
    color: "#00CEB3",
    link: null,
  },
  {
    title: "Blu Portal",
    description:
      "Internal management portal developed at Jahez. Focused on clean UI and cross-team collaboration with designers and backend engineers.",
    tags: ["React.js", "JavaScript", "CSS Modules"],
    color: "#FBB130",
    link: null,
  },
  {
    title: "Saned Marketplace",
    description:
      "Marketplace platform enabling vendors and buyers to connect. Contributed to core UI components and feature delivery in an agile team.",
    tags: ["React.js", "TypeScript", "API Integration"],
    color: "#FC787D",
    link: null,
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col items-center py-20 px-6 bg-gray-50">
      <h2 className="handwritten text-3xl font-bold mb-2 text-black">Projects</h2>
      <p className="text-gray-500 text-sm mb-10">Things I've built</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-3"
          >
            <div
              className="w-10 h-1.5 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-gray-900">{project.title}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-gray-400 hover:text-[#1BB6F9] transition-colors"
                >
                  <HiArrowTopRightOnSquare className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
