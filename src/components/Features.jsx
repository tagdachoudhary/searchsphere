function Features() {
  const features = [
    {
      title: "📄 Universal Search",
      description:
        "Search across PDFs, documentation, notes, websites and knowledge bases from one intelligent search engine.",
    },
    {
      title: "🧠 AI Answers",
      description:
        "Receive contextual answers instead of simple keyword matches using advanced semantic search.",
    },
    {
      title: "💻 GitHub Intelligence",
      description:
        "Search repositories, README files, code snippets and project documentation in seconds.",
    },
    {
      title: "🌐 Website Indexing",
      description:
        "Index entire websites and instantly retrieve relevant information with natural language queries.",
    },
    {
      title: "⚡ Lightning Fast",
      description:
        "Optimized architecture provides instant search with minimal latency across multiple data sources.",
    },
    {
      title: "🔒 Secure Workspace",
      description:
        "Your documents remain private with secure storage, authentication and encrypted processing.",
    },
  ];

  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="mb-3 text-blue-400 font-semibold uppercase tracking-widest">
            FEATURES
          </p>

          <h2 className="text-5xl font-bold">
            Everything You Need
            <span className="text-blue-500"> In One Search Engine</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            SearchSphere combines modern AI with lightning-fast search,
            allowing developers, students and researchers to search
            everything from one beautiful interface.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {feature.description}
              </p>

              <button className="mt-8 font-semibold text-blue-400 transition group-hover:translate-x-2">
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;