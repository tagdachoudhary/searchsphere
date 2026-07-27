function SearchDashboard() {
    return (
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl">
  
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-8 py-5">
  
            <div className="flex gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
  
            <h2 className="text-lg font-semibold text-slate-300">
              SearchSphere Workspace
            </h2>
  
            <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
              AI Powered
            </div>
  
          </div>
  
          <div className="grid lg:grid-cols-[260px_1fr]">
  
            {/* Sidebar */}
  
            <aside className="border-r border-slate-800 p-6">
  
              <h3 className="mb-6 text-xl font-bold text-white">
                Sources
              </h3>
  
              <div className="space-y-3">
  
                <div className="rounded-xl border border-blue-500 bg-blue-500/10 px-5 py-4">
                  📄 PDFs
                </div>
  
                <div className="rounded-xl bg-slate-800 px-5 py-4 hover:bg-slate-700 transition">
                  🌐 Websites
                </div>
  
                <div className="rounded-xl bg-slate-800 px-5 py-4 hover:bg-slate-700 transition">
                  💻 GitHub
                </div>
  
                <div className="rounded-xl bg-slate-800 px-5 py-4 hover:bg-slate-700 transition">
                  📝 Notes
                </div>
  
                <div className="rounded-xl bg-slate-800 px-5 py-4 hover:bg-slate-700 transition">
                  📚 Documentation
                </div>
  
              </div>
  
            </aside>
  
            {/* Main */}
  
            <main className="p-8">
  
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
  
                <span className="text-slate-400">Searching...</span>
  
                <h2 className="mt-2 text-2xl font-bold text-blue-400">
                  How does Semantic Search work?
                </h2>
  
              </div>
  
              <div className="mt-8 space-y-5">
  
                <div className="rounded-2xl border border-slate-800 bg-slate-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
  
                  <div className="flex items-center justify-between">
  
                    <span className="font-semibold">
                      📄 Semantic_Search.pdf
                    </span>
  
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                      Indexed
                    </span>
  
                  </div>
  
                </div>
  
                <div className="rounded-2xl border border-slate-800 bg-slate-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
  
                  <div className="flex items-center justify-between">
  
                    <span className="font-semibold">
                      💻 microsoft/graphrag
                    </span>
  
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                      Connected
                    </span>
  
                  </div>
  
                </div>
  
                <div className="rounded-2xl border border-slate-800 bg-slate-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
  
                  <div className="flex items-center justify-between">
  
                    <span className="font-semibold">
                      🌐 OpenAI Documentation
                    </span>
  
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                      Live
                    </span>
  
                  </div>
  
                </div>
  
                <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-7">
  
                  <div className="mb-5 flex items-center gap-4">
  
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-2xl">
                      🤖
                    </div>
  
                    <div>
  
                      <h3 className="text-xl font-bold text-blue-300">
                        AI Summary
                      </h3>
  
                      <p className="text-sm text-slate-400">
                        Generated in 0.18 seconds
                      </p>
  
                    </div>
  
                  </div>
  
                  <p className="leading-8 text-slate-300">
                    Semantic search understands the meaning of your query instead
                    of matching only keywords. SearchSphere combines AI embeddings,
                    document indexing, and contextual retrieval to provide accurate
                    answers from PDFs, websites, GitHub repositories, notes, and
                    documentation—all within a single intelligent workspace.
                  </p>
  
                </div>
  
              </div>
  
            </main>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default SearchDashboard;