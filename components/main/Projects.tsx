import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300 py-20">
        OUR PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-16 lg:px-20">
        <ProjectCard
          src="/AnahuacLife.png"
          title="Anáhuac Life"
          description="A social app for the university community, offering class and event details, cafeteria menu and orders, a staff directory, and more."
        />
        <ProjectCard
          src="/eyesOnTheOcean.png"
          title="Eyes On The Ocean"
          description=
              "A web platform with a 3D Earth model, using NASA data to educate middle school students about ocean SDGs in a fun, interactive way."
        />
        <ProjectCard
          src="/CuckooEats.png"
          title="Cuckoo Eats"
          description="An app in development for ordering and paying for food at Cuckoo, Resto, Coffee, and Cuckoo Box, streamlining the customer experience."
        />
        <ProjectCard
          src="/Juegos.png"
          title="Videogames"
          description="We create video games in Java, JavaScript, and C#, including original games, adaptations, and retro clones."
        />
        <ProjectCard
          src="/ARprojects.png"
          title="AR Projects"
          description="We are developing potential AR applications for entertainment, education, sales, and tourism using JavaScript libraries like AR.js, but they are not yet in production."
        />        
        <ProjectCard
          src="/proyectosWeb.png"
          title="Web Development"
          description="We build websites and systems for various sectors using React, including gyms, event venues, department stores, and restaurants."
        />
      </div>
    </div>
  );
};

export default Projects;