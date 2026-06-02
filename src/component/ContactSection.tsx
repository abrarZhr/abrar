import { CiMapPin } from "react-icons/ci";
import { FcPhone } from "react-icons/fc";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const contactItems = [
  {
    icon: <FcPhone className="w-5 h-5 shrink-0" />,
    label: "Phone",
    value: "+966 53 802 3387",
    href: "tel:+966538023387",
  },
  {
    icon: <MdOutlineAlternateEmail className="w-5 h-5 text-[#1BB6F9] shrink-0" />,
    label: "Email",
    value: "abrar_3378@hotmail.com",
    href: "mailto:abrar_3378@hotmail.com",
  },
  {
    icon: <CiMapPin className="w-5 h-5 text-[#FC787D] shrink-0" />,
    label: "Location",
    value: "Riyadh, Saudi Arabia",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 bg-white">
      <h2 className="handwritten text-3xl font-bold mb-1 text-black">Contact</h2>
      <p className="text-gray-500 text-sm mb-10">Get in touch</p>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-white"
          >
            {item.icon}
            <div className="flex flex-col min-w-0">
              <span className="text-xs text-gray-400">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-800 hover:text-[#1BB6F9] transition-colors truncate"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-sm font-medium text-gray-800">{item.value}</span>
              )}
            </div>
          </div>
        ))}

        <a
          href="https://www.linkedin.com/in/abrarsaeed/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mt-2 py-3 rounded-2xl bg-[#1BB6F9] text-white font-semibold text-sm hover:bg-[#0ea5e9] transition-colors"
        >
          LinkedIn Profile
          <HiArrowTopRightOnSquare className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
