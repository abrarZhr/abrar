import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiArrowTopRightOnSquare } from "react-icons/hi2";

export interface ProjectCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  accentColor: string;
  description: React.ReactNode;
  screenshot?: string;
  screenshotAlt?: string;
  tech: { name: string; color: string }[];
  link?: string | null;
  linkLabel?: string;
  extra?: React.ReactNode;
}

export default function ProjectCard({
  emoji,
  title,
  subtitle,
  accentColor,
  description,
  screenshot,
  screenshotAlt,
  tech,
  link,
  linkLabel = "Visit site",
  extra,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 bg-white rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-sm border transition-colors cursor-pointer"
        style={{ borderColor: open ? accentColor : "#f3f4f6" }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0"
            style={{ backgroundColor: `${accentColor}18` }}
          >
            {emoji}
          </div>
          <div className="text-left min-w-0">
            <p className="font-semibold text-gray-900 handwritten text-base sm:text-lg truncate">{title}</p>
            <p className="text-xs text-gray-400 truncate">{subtitle}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
          style={{ color: open ? accentColor : "#9ca3af" }}
        >
          <HiChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-2 p-4 sm:p-6 flex flex-col gap-6">

              {/* Description */}
              <div className="flex flex-col gap-2">
                <h3
                  className="handwritten text-xl sm:text-2xl font-bold"
                  style={{ color: accentColor }}
                >
                  So… what is {title}? 🤔
                </h3>
                <div className="text-gray-600 text-sm leading-relaxed">{description}</div>
              </div>

              {/* Screenshot */}
              {screenshot && (
                <img
                  src={screenshot}
                  alt={screenshotAlt ?? title}
                  className="w-full rounded-xl shadow-md border border-gray-100"
                />
              )}

              {/* Extra slot */}
              {extra}

              {/* Tech */}
              <div className="flex flex-col gap-2">
                <h4 className="handwritten text-lg sm:text-xl font-bold text-gray-800">Tech used ⚙️</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t.name}
                      className="px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium border"
                      style={{ borderColor: t.color, color: t.color }}
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl  text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#00CEB3' }}
                >
                  {linkLabel}
                  <HiArrowTopRightOnSquare className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
