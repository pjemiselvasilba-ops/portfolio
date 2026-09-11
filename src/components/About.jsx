import { motion } from "framer-motion";
import { FiLayers, FiCpu, FiBookOpen, FiUsers } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    icon: FiLayers,
    title: "Full Stack Development",
    text: "Comfortable across the MERN stack — from React interfaces to Node/Express APIs and MongoDB data models.",
  },
  {
    icon: FiCpu,
    title: "Problem Solving",
    text: "Breaks down features like authentication and role-based access into clear, working implementations.",
  },
  {
    icon: FiBookOpen,
    title: "Continuous Learning",
    text: "Currently deepening skills in TypeScript, advanced Tailwind CSS, and TanStack Router.",
  },
  {
    icon: FiUsers,
    title: "Team Collaboration",
    text: "Worked within a team during a full-stack internship to ship a multi-portal application end to end.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading index="01" title="About" />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div className="rounded-[28px] border border-line bg-bg-panel p-8 shadow-[0_20px_45px_rgba(15,23,32,0.04)]">
            <div className="space-y-5 text-ink-dim leading-relaxed text-[15px]">
              <p>
                I'm currently pursuing a Master of Computer Applications (MCA) at
                Francis Xavier Engineering College, Tirunelveli, under Anna
                University's R2024 curriculum, after completing a B.Sc. in
                Information Technology at Pope's College, Manonmaniam Sundaranar
                University, with a CGPA of 8.55/10 and a Gold Medal as rank
                holder.
              </p>
              <p>
                My focus is the MERN stack — MongoDB, Express.js, React.js, and
                Node.js. During a full-stack development internship at{" "}
                <span className="text-ink font-semibold">Digisailor</span>, I worked on{" "}
                <span className="text-ink font-semibold">
                  authentication, CRUD operations, and REST APIs
                </span>{" "}
                while building the Smart Food Sharing and Donation Platform, a
                multi-portal application for donors, NGOs, and admins.
              </p>
              <p>
                I like turning features into working products — covering frontend,
                backend, and database logic — and I'm continuing to improve with
                each project I build.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-line bg-bg-panel p-5 shadow-[0_12px_30px_rgba(15,23,32,0.03)] hover:-translate-y-1 transition-transform"
              >
                <card.icon className="text-gold text-xl mb-3" />
                <h3 className="text-ink font-semibold text-[15px] mb-1.5">
                  {card.title}
                </h3>
                <p className="text-ink-faint text-sm leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
