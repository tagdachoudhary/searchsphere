function Footers() {
    return (
      <footer className="border-t border-slate-800 bg-slate-950">
  
        <div className="mx-auto grid max-w-7xl gap-14 px-8 py-20 md:grid-cols-4">
  
          {/* Logo + About */}
          <div>
  
            <div className="flex items-center gap-3">
  
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-3 text-xl">
                🔍
              </div>
  
              <h2 className="text-3xl font-bold">
                SearchSphere
              </h2>
  
            </div>
  
            <p className="mt-6 leading-8 text-slate-400">
              AI-powered universal search for developers,
              students and researchers.
              Search everything from one intelligent workspace.
            </p>
  
          </div>
  
          {/* Product */}
          <div>
  
            <h3 className="mb-6 text-lg font-semibold">
              Product
            </h3>
  
            <ul className="space-y-4 text-slate-400">
  
              <li className="hover:text-white cursor-pointer">
                Features
              </li>
  
              <li className="hover:text-white cursor-pointer">
                Dashboard
              </li>
  
              <li className="hover:text-white cursor-pointer">
                Pricing
              </li>
  
              <li className="hover:text-white cursor-pointer">
                Roadmap
              </li>
  
            </ul>
  
          </div>
  
          {/* Resources */}
          <div>
  
            <h3 className="mb-6 text-lg font-semibold">
              Resources
            </h3>
  
            <ul className="space-y-4 text-slate-400">
  
              <li className="hover:text-white cursor-pointer">
                Documentation
              </li>
  
              <li className="hover:text-white cursor-pointer">
                API
              </li>
  
              <li className="hover:text-white cursor-pointer">
                GitHub
              </li>
  
              <li className="hover:text-white cursor-pointer">
                Blog
              </li>
  
            </ul>
  
          </div>
  
          {/* Company */}
          <div>
  
            <h3 className="mb-6 text-lg font-semibold">
              Company
            </h3>
  
            <ul className="space-y-4 text-slate-400">
  
              <li className="hover:text-white cursor-pointer">
                About
              </li>
  
              <li className="hover:text-white cursor-pointer">
                Contact
              </li>
  
              <li className="hover:text-white cursor-pointer">
                Careers
              </li>
  
              <li className="hover:text-white cursor-pointer">
                Privacy
              </li>
  
            </ul>
  
          </div>
  
        </div>
  
        <div className="border-t border-slate-800">
  
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-8 text-slate-500 md:flex-row">
  
            <p>
              © 2026 SearchSphere. All rights reserved.
            </p>
  
            <p>
              Built with ❤️ using React & Tailwind CSS
            </p>
  
          </div>
  
        </div>
  
      </footer>
    );
  }
  
  export default Footers;