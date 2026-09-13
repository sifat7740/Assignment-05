import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

const TechnologyGrid = ({
  technologies,
  stack,
  onAdd
}: TechnologyGridProps) => {
  return (
    <div
      id="technologies"
      className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {technologies.map((technology) => {
        const isAdded = stack.some(
          (item) => item.id === technology.id
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isAdded={isAdded}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
};

export default TechnologyGrid;