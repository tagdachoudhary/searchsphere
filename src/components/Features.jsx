function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Optimized search engine with intelligent indexing."
    },
    {
      icon: "🤖",
      title: "AI Powered",
      desc: "Understand documents instead of just finding them."
    },
    {
      icon: "📄",
      title: "Universal Search",
      desc: "Search PDFs, code, websites and notes together."
    },
    {
      icon: "🔒",
      title: "Privacy First",
      desc: "Your local files stay on your device."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Why SearchSphere?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <div className="mb-4 text-5xl">
              {feature.icon}
            </div>

            <h3 className="mb-3 text-xl font-bold">
              {feature.title}
            </h3>

            <p className="text-slate-400">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;