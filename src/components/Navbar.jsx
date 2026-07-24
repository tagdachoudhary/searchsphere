import { Search } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2">
            <Search size={22} />
          </div>

          <h1 className="text-2xl font-bold">
            SearchSphere
            <span className="text-blue-500">X</span>
          </h1>
        </div>

        <div className="hidden gap-8 md:flex text-slate-300">
          <a href="#" className="transition hover:text-blue-400">Features</a>
          <a href="#" className="transition hover:text-blue-400">Technology</a>
          <a href="#" className="transition hover:text-blue-400">Pricing</a>
          <a href="#" className="transition hover:text-blue-400">GitHub</a>
        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
          Launch App
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
