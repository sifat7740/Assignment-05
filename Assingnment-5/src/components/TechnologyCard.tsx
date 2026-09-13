import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd
}: TechnologyCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span
className={`rounded-full px-3 py-1 text-xs font-medium ${
  technology.badge === "Popular"
    ? "bg-blue-100 text-blue-600"
    : technology.badge === "Essential"
    ? "bg-amber-100 text-amber-600"
    : technology.badge === "New"
    ? "bg-purple-50 text-purple-600"
    : technology.badge === "Structure"
    ? "bg-orange-500 text-orange-800"
    : technology.badge === "Featured"
    ? "bg-blue-200 text-blue-600"
    : technology.badge === "Trending"
    ? "bg-blue-50 text-blue-500"
    : technology.badge === "Hot"
    ? "bg-gray-100 text-green-600"
    : "bg-orange-50 text-orange-600"
}`}
>
  {technology.badge}
</span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
       <span className="text-sm font-medium text-slate-700">
  <span className="text-amber-400">★</span> {technology.rating}
</span>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`rounded-lg px-4 py-2 text-sm font-semibold ${
            isAdded
              ? "cursor-not-allowed bg-green-100 text-green-600"
              : "gradient-bg text-white"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;