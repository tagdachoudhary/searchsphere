const Sidebar = () => {
  const items = [
    {
      icon: "🏠",
      label: "Home",
    },
    {
      icon: "🔍",
      label: "Search",
    },
    {
      icon: "📄",
      label: "Documents",
    },
    {
      icon: "💻",
      label: "GitHub",
    },
    {
      icon: "⭐",
      label: "Saved",
    },
    {
      icon: "🕒",
      label: "History",
    },
    {
      icon: "⚙️",
      label: "Settings",
    },
  ];

  return (
    <aside className="hidden lg:flex w-72 min-h-screen flex-col border-r border-zinc-800 bg-zinc-950/95 backdrop-blur-xl">

      {/* Logo */}
      <div className="border-b border-zinc-800 px-8 py-8">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Search
          <span className="text-cyan-400">Sphere</span>
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          AI Powered Search Engine
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 space-y-2 p-6">
        {items.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left text-gray-400 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <span className="text-xl">{item.icon}</span>

            <span className="font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* AI Card */}
      <div className="m-6 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-indigo-500/15 p-6">

        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-2xl">
            🤖
          </div>

          <div>
            <h2 className="font-bold text-white">
              SearchSphere AI
            </h2>

            <p className="text-xs text-gray-400">
              Gemini Powered
            </p>
          </div>
        </div>

        <p className="text-sm leading-6 text-gray-400">
          Search across Google, GitHub, documentation and AI-generated summaries in one place.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;