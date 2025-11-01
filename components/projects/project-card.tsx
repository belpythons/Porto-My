import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative flex flex-col w-full h-full bg-background border border-border rounded-lg overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-[200px] flex-shrink-0">
        <Image
          className="object-cover"
          src={project.companyLogoImg}
          alt={`${project.companyName} logo`}
          fill
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        {/* Title */}
        <h5 className="text-xl font-bold tracking-tight text-foreground mb-3 line-clamp-2">
          {project.companyName}
        </h5>

        {/* Description */}
        <p className="text-sm font-normal text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap mb-4">
          <ChipContainer textArr={project.category} />
        </div>

        {/* Button */}
        <div className="mt-auto">
          <Link href={`/projects/${project.id}`}>
            <Button variant={"default"} className="w-full">
              Read more
              <Icons.chevronRight className="w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Type Icon */}
      <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
