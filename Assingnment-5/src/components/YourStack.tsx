import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

          <p className="mt-1 text-sm text-slate-500">
            {stack.length} Technology Selected
          </p>
        </div>

        {stack.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
              +
            </div>

            <p className="mt-4 text-sm font-medium text-slate-600">
              Your stack is empty
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Add technologies to build your stack
            </p>
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 p-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-slate-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-lg text-slate-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}

            <button
              onClick={onRemoveAll}
              className="mt-2 w-full rounded-lg border border-red-200 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default YourStack;
