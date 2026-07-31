function Sidebar() {
    const items = [
      "🏠 Home",
      "🔍 Search",
      "📄 Documents",
      "💻 GitHub",
      "⭐ Saved",
      "🕒 History",
      "⚙️ Settings",
    ];
  
    return (
      <aside className="hidden lg:flex w-72 min-h-screen bg-zinc-950 border-r border-zinc-800 flex-col p-6">
  
        <h1 className="text-3xl font-bold text-white mb-10">
          Search<span className="text-cyan-400">Sphere</span>
        </h1>
  
        <div className="space-y-2">
  
          {items.map((item) => (
            <button
              key={item}
              className="w-full text-left rounded-xl px-4 py-3 text-gray-400 hover:bg-zinc-900 hover:text-white transition"
            >
              {item}
            </button>
          ))}
  
        </div>
  
        <div className="mt-auto rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-5 border border-cyan-500/20">
  
          <h2 className="font-bold text-lg">
            🤖 SearchSphere AI
          </h2>
  
          <p className="text-gray-400 text-sm mt-2">
            Search across the web, GitHub, PDFs and documentation using AI.
          </p>
  
        </div>
  
      </aside>
    );
  }
  
  export default Sidebar;