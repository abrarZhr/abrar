import { motion } from "framer-motion";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Jahez Company",
    date: "Oct 2022 – Present",
    current: true,
    color: "#00CEB3",
    points: [
      "Built and maintained scalable React.js interfaces",
      "Ensured responsive design across all devices",
      "Collaborated with designers and backend engineers",
    ],
    projects: ["Pik Portal", "Blu Portal", "Saned Marketplace", "Pik eCommerce (pik.sa)", "شحنتي"],
  },
  {
    role: "Full Stack JS Developer",
    company: "Tuwaiq Academy",
    date: "Oct 2021 – Jan 2022",
    current: false,
    color: "#1BB6F9",
    points: [
      "Intensive training in React.js, Node.js, and modern JS tools",
      "Delivered individual and team full-stack projects",
    ],
    projects: [],
  },
  {
    role: "Intern – Engineering Apps",
    company: "Ministry of Health",
    date: "2020 · 280 hrs",
    current: false,
    color: "#FBB130",
    points: [
      "Supported internal application development and maintenance",
    ],
    projects: [],
  },
];

export default function Experience() {
  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 bg-white">
      <h2 className="handwritten text-3xl font-bold text-black mb-1">Experience</h2>
      <p className="text-gray-500 text-sm mb-12">Where I've worked</p>

      <div className="relative w-full max-w-2xl">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-px bg-gray-200" />

        <div className="flex flex-col gap-8 sm:gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex gap-5 sm:gap-8"
            >
              {/* Timeline dot */}
              <div className="shrink-0 z-10">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md"
                  style={{ backgroundColor: exp.color }}
                >
                  {i + 1}
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 min-w-0 bg-white border border-gray-100 rounded-2xl shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{exp.role}</h3>
                    <p className="text-sm font-medium" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium self-start shrink-0"
                    style={{ backgroundColor: `${exp.color}18`, color: exp.color }}
                  >
                    {exp.current && (
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 mb-px align-middle animate-pulse"
                        style={{ backgroundColor: exp.color }}
                      />
                    )}
                    {exp.date}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-1.5 mb-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: exp.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Project tags */}
                {exp.projects.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.projects.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-2 py-0.5 rounded-full border font-medium"
                        style={{ borderColor: exp.color, color: exp.color }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
