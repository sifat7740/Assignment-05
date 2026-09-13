import footer from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer id="contact" className="mt-16 bg-white text-slate-600">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <img src={footer} alt="" />

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-5 flex gap-4 text-sm">
            <a href="#" className="hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-600">Product</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-600">Company</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-600">Legal</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
