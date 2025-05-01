import nosignal from "../assets/nosignal.jpg";
import moviepic from "../assets/moviepic.png";
import * as motion from "motion/react-client";
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import screeshot from "../assets/screen-shot.png";
export default function Work() {
  return (
    <div className=" p-10">
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
                to="/work"
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
                  vite
                </h3>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
            >
              <a
                href="https://music-player-yassine.vercel.app/"
                to="/work"
                className=" flex justify-center items-center gap-2 bg-blue-400 text-gray-900 text-2xl font-medium p-3 rounded-lg cursor-pointer hover:bg-[#393e46] transition duration-300 mt-4"
              >
                <MdArrowOutward />
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
