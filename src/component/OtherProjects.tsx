import ProjectCard from "./ProjectCard";
import shahnatيImg from "../assets/shahnatي.png";
import jahezApp from "../assets/jahez-app.png";

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

export default function Projects() {
  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 bg-gray-50 gap-3">
      <h2 className="handwritten text-3xl font-bold text-black mb-1">Projects</h2>
      <p className="text-gray-500 text-sm mb-2">Things I built at Jahez</p>

      <div className="w-full max-w-2xl flex flex-col gap-3">

        {/* Pik eCommerce */}
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
          tech={[
            { name: "Next.js", color: "#1BB6F9" },
            { name: "TypeScript", color: "#00CEB3" },
            { name: "Tailwind CSS", color: "#FBB130" },
            { name: "REST APIs", color: "#FC787D" },
            { name: "Responsive Design", color: "#1BB6F9" },
          ]}
          link="https://pik.sa/en"
          linkLabel="Visit pik.sa"
          extra={<JahezAppExtra />}
        />

        {/* شحنتي */}
        <ProjectCard
          emoji="📦"
          title="شحنتي (Shahnatي)"
          subtitle="Shipment service · Jahez & Twaklna apps"
          accentColor="#FC787D"
          screenshot={shahnatيImg}
          screenshotAlt="شحنتي service launch announcement"
          description={
            <p>
              Ever needed to send a package but didn't want the hassle? 😅{" "}
              <strong>شحنتي</strong> is Jahez's on-demand shipment service — fast, flexible,
              and reliable. 🚀 It lives <strong>inside the Jahez app</strong> and{" "}
              <strong>inside the Twaklna app</strong>, so millions of users already have
              access without downloading anything new. You pick your delivery spot, Jahez
              handles the rest. 🎯
            </p>
          }
          tech={[
            { name: "React.js", color: "#1BB6F9" },
            { name: "TypeScript", color: "#00CEB3" },
            { name: "Tailwind CSS", color: "#FBB130" },
            { name: "REST APIs", color: "#FC787D" },
            { name: "Responsive Design", color: "#1BB6F9" },
          ]}
        />

        {/* شحنتي Landing Page */}
        <ProjectCard
          emoji="🌐"
          title="شحنتي — Landing Page"
          subtitle="myshipment.jahez.net · Marketing site"
          accentColor="#6366f1"
          description={
            <p>
              A great product still needs a great first impression. 🎨{" "}
              <strong>myshipment.jahez.net</strong> is an independent marketing landing page
              built to explain the شحنتي service and convert visitors into customers. The
              content is fully managed through a <strong>Wagtail CMS</strong> backend — so
              the marketing team can update copy, images, and sections without touching any
              code. 🧠
            </p>
          }
          tech={[
            { name: "React.js", color: "#1BB6F9" },
            { name: "TypeScript", color: "#00CEB3" },
            { name: "Tailwind CSS", color: "#FBB130" },
            { name: "Wagtail CMS", color: "#43b1b0" },
            { name: "REST APIs", color: "#FC787D" },
          ]}
          link="https://myshipment.jahez.net/"
          linkLabel="Visit myshipment.jahez.net"
        />

        {/* Saned Marketplace */}
        <ProjectCard
          emoji="🏪"
          title="Saned Marketplace"
          subtitle="B2B marketplace · Jahez Group"
          accentColor="#1BB6F9"
          description={
            <p>
              Think of <strong>Saned</strong> as the B2B backbone of the Jahez ecosystem. 🏗️
              It's a marketplace that connects vendors and businesses — letting them list
              products, manage inventory, and reach customers. I built and maintained core
              UI components, making sure the experience is smooth for both vendors and buyers.
            </p>
          }
          tech={[
            { name: "React.js", color: "#1BB6F9" },
            { name: "TypeScript", color: "#00CEB3" },
            { name: "REST APIs", color: "#FC787D" },
            { name: "Responsive Design", color: "#1BB6F9" },
            { name: "Component Libraries", color: "#FBB130" },
          ]}
        />

        {/* Pik Portal */}
        <ProjectCard
          emoji="🖥️"
          title="Pik Portal"
          subtitle="Internal ops portal · Jahez"
          accentColor="#00CEB3"
          description={
            <p>
              Behind every smooth customer experience there's a powerful internal tool making
              it happen. 💪 <strong>Pik Portal</strong> is the operations dashboard used by
              the Jahez team to manage the Pik platform — products, orders, vendors, and more.
            </p>
          }
          tech={[
            { name: "React.js", color: "#1BB6F9" },
            { name: "TypeScript", color: "#00CEB3" },
            { name: "Tailwind CSS", color: "#FBB130" },
            { name: "REST APIs", color: "#FC787D" },
            { name: "Responsive Design", color: "#1BB6F9" },
          ]}
        />

        {/* Blu Portal */}
        <ProjectCard
          emoji="🔵"
          title="Blu Portal"
          subtitle="Internal management portal · Jahez"
          accentColor="#FBB130"
          description={
            <p>
              <strong>Blu Portal</strong> is an internal management tool I built at Jahez.
              🛠️ Clean UI, clear workflows, and cross-team collaboration baked in from the
              start — translating Figma designs into pixel-perfect React components.
            </p>
          }
          tech={[
            { name: "React.js", color: "#1BB6F9" },
            { name: "JavaScript", color: "#FBB130" },
            { name: "CSS Modules", color: "#00CEB3" },
            { name: "REST APIs", color: "#FC787D" },
            { name: "Figma → Code", color: "#FBB130" },
          ]}
        />

      </div>
    </section>
  );
}
