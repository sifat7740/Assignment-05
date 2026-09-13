import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies");
        setLoading(false);
      });
  }, []);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack");
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack`);
  };

  const removeFromStack = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack(stack.filter((item) => item.id !== id));

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed");
  };

  return (
    <div>
      <Navbar />

      <main>
        <Hero />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Explore the <span className="gradient-text">Technologies</span>
            </h2>

            <p className="mt-2 text-slate-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <div className="flex min-h-60 items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-orange-500"></div>

                <p className="mt-4 text-sm text-slate-500">
                  Loading technologies...
                </p>
              </div>
            </div>
          ) : (
            <div className="grid items-start gap-6 lg:grid-cols-4">
              <div className="lg:col-span-3">
                <TechnologyGrid
                  technologies={technologies}
                  stack={stack}
                  onAdd={addToStack}
                />
              </div>

              <YourStack
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
