import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-3xl bg-white px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-16">
        <div>
          <h1 className="text-4xl font-bold leading-tight  sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technologies"
              className="gradient-bg rounded-2xl px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-2xl border border-slate-400 px-6 py-3  text-center text-sm text-slate-500 font-semibold "
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={bannerStack}
            alt="Development stack"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
