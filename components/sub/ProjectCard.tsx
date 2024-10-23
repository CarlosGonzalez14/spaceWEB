import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: any;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#c81658] px-5 py-2 max-w-lg shadow-xl shadow-[#c81658]/50">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-10/12 object-contain mx-auto my-4"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;