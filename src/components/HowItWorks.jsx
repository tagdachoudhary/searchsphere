function HowItWorks() {
    const steps = [
      {
        number: "01",
        title: "Connect Your Sources",
        desc: "Upload PDFs, connect GitHub repositories, or search websites instantly.",
      },
      {
        number: "02",
        title: "AI Understands Everything",
        desc: "SearchSphere indexes and understands your content using AI-powered semantic search.",
      },
      {
        number: "03",
        title: "Get Instant Answers",
        desc: "Receive direct answers, summaries, and relevant documents in seconds.",
      },
    ];
  
    return (
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <h2 className="text-center text-5xl font-bold text-white">
            How It Works
          </h2>
  
          <p className="mt-4 text-center text-slate-400">
            Three simple steps to search smarter.
          </p>
  
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition"
              >
                <div className="text-5xl font-extrabold text-blue-500">
                  {step.number}
                </div>
  
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {step.title}
                </h3>
  
                <p className="mt-4 text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default HowItWorks;