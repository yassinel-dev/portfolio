import prfl from "../assets/prfl.jpg";
import { IoDownloadOutline } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import github from "../assets/giithub.png";
import js from "../assets/javaascript.png";
import figma from "../assets/figmma.png";
import css from "../assets/csss.svg";
import reaact from "../assets/reaact.png";
import tailwind from "../assets/taailwiind.png";
import nosignal from "../assets/nosignal.jpg";
import * as motion from "motion/react-client";
import { NavLink } from "react-router-dom";
import moviepic from "../assets/moviepic.png";
import { Github, Linkedin, Phone } from "lucide-react";
import screeshot from "../assets/screen-shot.png";

export default function Home() {
  return (
    <div className=" max-w-screen-lg mx-auto px-4 mt-8 ml-3 mr-3  flex flex-col md:mt-20 md:mr-16 md:ml-16  lg:gap-10 lg:mt-20 lg:m-auto lg:w-full">
      <div className="max-w-screen-lg container lg:flex lg:justify-between lg:items-center lg:gap-4 lg:mb-30">
        <div className="container flex flex-col w-full ">
          <div className=" flex justify-start items-center gap-1.5 ">
            <div className=" relative flex items-center justify-center w-10 h-10  overflow-hidden rounded-lg">
              <img
                src={prfl}
                className=" absolute w-full top-0 bottom-0 left-0 right-0"
              />
            </div>
            <div className=" bg-emerald-600 w-2 h-2 rounded-full"></div>
            <h3 className=" text-shadow-gray-700 text-sm font-light">
              Disponible pour de nouvelles opportunités
            </h3>
          </div>
          <h1 className="  text-6xl font-medium  mt-4 bg-gradient-to-r from-[#FFFFFF] via-[#9AA19D] to-[#696868] text-transparent bg-clip-text mr-3">
            Créer des sites web modernes et évolutifs pour l'avenir
          </h1>
          <div className=" flex justify-start items-center gap-2 mt-4">
            <button className=" flex justify-center items-center gap-2 bg-blue-500 text-sm font-medium p-2 rounded-lg cursor-pointer hover:bg-[#393e46] transition duration-300">
              Télécharger CV
              <IoDownloadOutline />
            </button>
            <button className=" flex justify-center items-center gap-2 bg-[#393e46] text-sm font-medium p-2 rounded-lg cursor-pointer hover:bg-blue-500 transition duration-300">
              Faire défiler
              <FaArrowDown />
            </button>
          </div>
        </div>
        <div className=" hidden lg:flex lg:justify-center lg:items-center lg:w-2/3 lg:h-100 lg:rounded-lg lg:overflow-hidden">
          <img src={prfl} className=" hidden lg:block" />
        </div>
      </div>
      <div className=" mt-8 w-full max-w-screen-lg flex flex-col justify-start items-start gap-4 p-6 bg-gray-900 rounded-lg">
        <p>
          Je suis développeur front-end spécialisé en JavaScript, React et
          Tailwind CSS. Passionné par la création d'interfaces modernes,
          performantes et responsive, je m'engage à développer des expériences
          web innovantes et optimisées pour tous les utilisateurs.
        </p>
        <div className=" flex justify-start items-center gap-4 mt-4">
          <div>
            <h2 className=" text-3xl font-medium flex  items-center gap-1">
              10<span className=" text-sm text-blue-500">+</span>
            </h2>
            <p className=" text-sm">Projet terminé</p>
          </div>

          <div>
            <h2 className=" text-3xl font-medium flex  items-center gap-1">
              2<span className=" text-sm text-blue-500">+</span>
            </h2>
            <p className=" text-sm">Années d'expérience</p>
          </div>
        </div>
      </div>
      <div className=" mt-10 w-full lg:mt-15 ">
        <h2 className=" text-2xl font-medium bg-gradient-to-r from-[#FFFFFF] via-[#9AA19D] to-[#696868] text-transparent bg-clip-text mb-2 ">
          Outils essentiels que j'utilise
        </h2>
        <p className=" text-sm font-light mb-4">
          Voici les outils indispensables que j'utilise au quotidien pour
          concevoir des sites web modernes, performants et adaptés aux besoins
          des utilisateurs.
        </p>
        <div className=" flex flex-col justify-start  gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5 ">
          <div className=" flex gap-2 items-center hover:bg-[#393e46] border-1 border-[#393e46]   p-2 rounded-lg transition duration-300  ">
            <div className=" flex justify-center items-center w-10 h-10  rounded-lg overflow-hidden">
              <img src={figma} className=" w-full h-full" />
            </div>
            <div>
              <h2 className=" text-sm font-medium">Figma</h2>
              <p className=" text-xs">design tool</p>
            </div>
          </div>
          <div className=" flex gap-2 items-center hover:bg-[#393e46] border-1 border-[#393e46]  p-2 rounded-lg transition duration-300    ">
            <div className=" flex justify-center items-center w-10 h-10  rounded-lg overflow-hidden">
              <img src={css} />
            </div>
            <div>
              <h2 className=" text-sm font-medium">css</h2>
              <p className=" text-xs">user interface</p>
            </div>
          </div>
          <div className=" flex gap-2 items-center hover:bg-[#393e46] border-1 border-[#393e46]   p-2 rounded-lg transition duration-300  ">
            <div className=" flex justify-center items-center w-10 h-10  rounded-lg overflow-hidden">
              <img src={reaact} />
            </div>
            <div>
              <h2 className=" text-sm font-medium">react</h2>
              <p className=" text-xs">framework</p>
            </div>
          </div>

          <div className=" flex gap-2 items-center hover:bg-[#393e46] border-1 border-[#393e46]  p-2 rounded-lg transition duration-300 ">
            <div className=" flex justify-center items-center w-10 h-10  rounded-lg overflow-hidden">
              <img src={js} />
            </div>
            <div>
              <h2 className=" text-sm font-medium">JavaScript</h2>
              <p className=" text-xs">interaction</p>
            </div>
          </div>

          <div className=" flex gap-2 items-center hover:bg-[#393e46] border-1 border-[#393e46]  p-2 rounded-lg transition duration-300  ">
            <div className=" flex justify-center items-center w-10 h-10  rounded-lg overflow-hidden">
              <img src={github} />
            </div>
            <div>
              <h2 className=" text-sm font-medium">github</h2>
              <p className=" text-xs">Collaboration</p>
            </div>
          </div>
          <div className=" flex gap-2 items-center hover:bg-[#393e46] border-1 border-[#393e46]  p-2 rounded-lg transition duration-300 mb-2  ">
            <div className=" flex justify-center items-center w-10 h-10  rounded-lg overflow-hidden">
              <img src={tailwind} />
            </div>
            <div>
              <h2 className=" text-sm font-medium">TailwindCss</h2>
              <p className=" text-xs">User interface</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className=" text-2xl font-medium mb-2  bg-gradient-to-r from-[#FFFFFF] via-[#9AA19D] to-[#696868] text-transparent bg-clip-text mt-10">
        My portfolio highlights
      </h2>
      <div className="  flex flex-col justify-start items-start gap-4 md:grid md:grid-cols-2 md:gap-5 md:mt-4 lg:grid-cols-3 lg:gap-5 ">
        <div className=" flex flex-col gap-4 p-4 bg-gray-900 rounded-lg cursor-pointer">
          <div className=" flex justify-center items-center w-full h-70 rounded-lg overflow-hidden">
            <img src={moviepic} />
          </div>
          <div className=" flex justify-between items-center gap-4 ">
            <div>
              <h3 className=" text-2xl font-medium">movie app</h3>
              <div className=" flex justify-start items-center gap-2 mt-2">
                <h3 className=" text-sm font-medium bg-gray-800 p-2 rounded-lg">
                  REACT
                </h3>
                <h3 className=" text-sm font-medium bg-gray-800 p-2 rounded-lg">
                  TAILWINDCSS
                </h3>
                <h3 className=" text-sm font-medium bg-gray-800 p-2 rounded-lg">
                  VITE
                </h3>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
            >
              <a
                href="https://movie-app-x9u1.vercel.app/"
                className=" flex justify-center items-center gap-2 bg-blue-400 text-gray-900 text-2xl font-medium p-3 rounded-lg cursor-pointer hover:bg-[#393e46] transition duration-300 mt-4"
              >
                <MdArrowOutward />
              </a>
            </motion.button>
          </div>
        </div>
        <div className=" flex flex-col gap-4 p-4 bg-gray-900 rounded-lg cursor-pointer">
          <div className=" flex justify-center items-center w-full h-70 rounded-lg overflow-hidden">
            <img src={screeshot} />
          </div>
          <div className=" flex justify-between items-center gap-4">
            <div>
              <h3 className=" text-2xl font-medium">music app</h3>
              <div className=" flex justify-start items-center gap-2 mt-2">
                <h3 className=" text-sm font-medium bg-gray-800 p-2 rounded-lg">
                  react
                </h3>
                <h3 className=" text-sm font-medium bg-gray-800 p-2 rounded-lg">
                  css
                </h3>
                <h3 className=" text-sm font-medium bg-gray-800 p-2 rounded-lg">
                  Devlopment
                </h3>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
            >
              <NavLink
                to="/work"
                className=" flex justify-center items-center gap-2 bg-blue-400 text-gray-900 text-2xl font-medium p-3 rounded-lg cursor-pointer hover:bg-[#393e46] transition duration-300 mt-4"
              >
                <MdArrowOutward />
              </NavLink>
            </motion.button>
          </div>
        </div>
        <div className=" flex flex-col gap-4 p-4 bg-gray-900 rounded-lg cursor-pointer m-auto">
          <NavLink to="/work" className=" w-full">
            see more{" "}
          </NavLink>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-6 mb-6">
        <h3 className="text-2xl font-semibold text-white">Me contacter</h3>

        <div className="flex gap-6 flex-wrap justify-center">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5  hover:bg-white/10 transition-all text-white shadow-md"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5  hover:bg-white/10 transition-all text-white shadow-md"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href="tel:+212612345678"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5  hover:bg-white/10 transition-all text-white shadow-md"
          >
            <Phone className="w-5 h-5" />
            +212 6 12 34 56 78
          </a>
        </div>
      </div>
    </div>
  );
}
