import ProjectCard from "./ProjectCard";
import jahezApp from "../assets/jahez-app.png";

const pikTech = [
  { name: "React.js", color: "#1BB6F9" },
  { name: "TypeScript", color: "#00CEB3" },
  { name: "Tailwind CSS", color: "#FBB130" },
  { name: "REST APIs", color: "#FC787D" },
  { name: "Vite", color: "#00CEB3" },
  { name: "Responsive Design", color: "#1BB6F9" },
];

const JahezAppExtra = () => (
  <div className="flex flex-col gap-3">
    <h4 className="handwritten text-lg sm:text-xl font-bold text-gray-800">Also lives inside Jahez 📱</h4>
    <p className="text-sm text-gray-600 leading-relaxed">
      Pik isn't just a standalone site — it's embedded directly inside the{" "}
      <strong>Jahez app</strong> under a tab called{" "}
      <span className="font-bold text-[#00CEB3]">متاجر (Mathajer)</span>. Millions of Jahez
      users can browse and shop Pik without ever leaving the app. 🎯
    </p>
    <div className="flex justify-center py-2">
      <div className="relative">
        <img
          src={jahezApp}
          alt="Jahez app showing Mathajer tab"
          className="w-40 sm:w-48 rounded-3xl shadow-xl border-4 border-gray-200"
        />
        <div className="absolute top-[85px] -right-24 sm:-right-28 flex items-center gap-1">
          <div className="w-8 sm:w-10 h-px bg-[#00CEB3]" />
          <span className="text-xs font-bold text-[#00CEB3] bg-white border border-[#00CEB3] rounded-full px-2 py-0.5 whitespace-nowrap">
            متاجر tab
          </span>
        </div>
      </div>
    </div>
  </div>
);

export const PikSection = () => (
  <section className="flex flex-col items-center pt-10 pb-4 px-4 sm:px-6 bg-gray-50">
    <div className="w-full max-w-2xl">
      <ProjectCard
        emoji="🛒"
        title="Pik eCommerce Platform"
        subtitle="pik.sa · Built at Jahez"
        accentColor="#00CEB3"
        screenshot="/pik.png"
        screenshotAlt="Pik platform screenshot"
        description={
          <p>
            Imagine you're craving something — anything. Desserts, groceries, gadgets,
            flowers? 🌸 <strong>Pik</strong> is Jahez's e-commerce marketplace that delivers
            it all, fast. It's not just a store — it's a whole shopping experience built
            right inside one of Saudi Arabia's biggest delivery apps. Think of it as the
            cool younger sibling of Jahez 🚀, giving you everything from midnight snacks to
            everyday essentials in a few taps.
          </p>
        }
        tech={pikTech}
        link="https://pik.sa/en"
        linkLabel="Visit pik.sa"
        extra={<JahezAppExtra />}
      />
    </div>
  </section>
);
