const skills = [
  { name: "React.js", color: "#1BB6F9" },
  { name: "TypeScript", color: "#00CEB3" },
  { name: "JavaScript", color: "#FBB130" },
  { name: "Angular", color: "#FC787D" },
  { name: "Tailwind CSS", color: "#00CEB3" },
  { name: "HTML / CSS", color: "#1BB6F9" },
  { name: "Node.js", color: "#00CEB3" },
  { name: "Git & GitHub", color: "#FBB130" },
  { name: "REST APIs", color: "#FC787D" },
  { name: "Responsive Design", color: "#1BB6F9" },
  { name: "Vite", color: "#FBB130" },
  { name: "Agile / Scrum", color: "#00CEB3" },
];

export default function Skills() {
  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 bg-gray-50">
      <h2 className="handwritten text-3xl font-bold mb-1 text-black">Skills</h2>
      <p className="text-gray-500 text-sm mb-8">Technologies I work with</p>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded-full border font-medium"
            style={{ borderColor: skill.color, color: skill.color }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
