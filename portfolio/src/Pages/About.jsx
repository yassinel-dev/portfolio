import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className=" flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-white/5 border border-white/10 shadow-xl rounded-2xl max-w-4xl w-full p-8 md:p-12 text-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
          À propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-lg space-y-4 leading-7">
            <p>
              Je suis un{" "}
              <span className="text-sky-400 font-semibold">
                développeur front-end
              </span>{" "}
              passionné avec plus de 2 ans d'expérience dans la création
              d'interfaces web modernes, dynamiques et responsives.
            </p>
            <p>
              Autodidacte, j'ai appris le développement web à la maison, en me
              spécialisant dans
              <span className="text-yellow-400 font-semibold"> JavaScript</span>
              ,<span className="text-cyan-400 font-semibold"> React</span> et
              <span className="text-teal-400 font-semibold"> Tailwind CSS</span>
              .
            </p>
          </div>

          <div className="text-lg space-y-4 leading-7">
            <p>
              En 2025, j’ai élargi mes compétences en étudiant le{" "}
              <span className="font-semibold text-green-400">back-end</span> à
              l’école, ce qui me permet aujourd’hui de mieux comprendre les
              projets dans leur globalité.
            </p>
            <p>
              Mon objectif est de concevoir des expériences digitales élégantes,
              performantes et axées utilisateur.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
