import React from "react";

import { IoIosLink, IoLogoGithub } from "react-icons/io";
import { ProjectsArr } from "./Data/data";
const Projects = () => {
  return (
    <>
      <h2 className="heading font-bold text-6xl mt-16 w-full text-center text-white">
        Projects
      </h2>
      <section
        className="flex flex-wrap items-center justify-center my-14 gap-4"
        id="projects"
      >
        {ProjectsArr &&
          ProjectsArr.map((n) => (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-[350px] md:max-w-[350px] min-h-[350px] md:max-h-[400px] ease-in-out">
              <a href="#">
                <img
                  class="rounded-t-lg object-cover"
                  src={n.imageSrc}
                  alt=""
                />
              </a>
              <div class=" p-3 flex flex-row justify-between">
                <div className="flex flex-col max-h-2">
                  <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {n.name}
                  </h3>
                  <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    {n.techs}
                  </p>
                </div>
                <div className="logos-link mx-1">
                  <div>
                    <div className="flex flex-col items-center justify-center">
                      <a href={n.github}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer my-2" />
                      </a>
                      <a href={n.link}>
                        <IoIosLink className="text-textBase text-3xl cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default Projects;
