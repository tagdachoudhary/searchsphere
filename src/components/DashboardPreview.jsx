function DashboardPreview() {
    return (
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
  
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">
  
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
  
            <h3 className="font-semibold text-slate-300">
              SearchSphere Dashboard
            </h3>
  
            <div></div>
  
          </div>
  
          <div className="grid lg:grid-cols-3">
  
            {/* Sidebar */}
  
            <div className="border-r border-slate-800 p-6">
  
              <h4 className="mb-5 text-lg font-bold">
                Sources
              </h4>
  
              <div className="space-y-3">
  
                <div className="rounded-xl bg-slate-800 p-4">
                  📄 PDFs
                </div>
  
                <div className="rounded-xl bg-slate-800 p-4">
                  🌐 Websites
                </div>
  
                <div className="rounded-xl bg-slate-800 p-4">
                  💻 GitHub
                </div>
  
                <div className="rounded-xl bg-slate-800 p-4">
                  📝 Notes
                </div>
  
              </div>
  
            </div>
  
            {/* Search Results */}
  
            <div className="col-span-2 p-8">
  
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                🔍 Searching:
                <span className="ml-2 text-blue-400">
                  React Performance Optimization
                </span>
              </div>
  
              <div className="mt-8 space-y-5">
  
                <div className="rounded-2xl bg-slate-800 p-5">
                  📄 React Documentation.pdf
                </div>
  
                <div className="rounded-2xl bg-slate-800 p-5">
                  💻 facebook/react
                </div>
  
                <div className="rounded-2xl bg-slate-800 p-5">
                  🌐 react.dev
                </div>
  
                <div className="rounded-2xl border border-blue-500 bg-blue-500/10 p-6">
                  <h3 className="text-xl font-bold text-blue-300">
                    AI Summary
                  </h3>
  
                  <p className="mt-4 text-slate-300">
                    SearchSphere combines information from PDFs,
                    GitHub repositories and websites into one
                    intelligent answer instead of making you open
                    dozens of tabs.
                  </p>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default DashboardPreview;