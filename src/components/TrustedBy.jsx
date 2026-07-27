function TrustedBy() {
    const companies = [
      "Google",
      "Microsoft",
      "OpenAI",
      "GitHub",
      "Notion",
      "Vercel",
    ];
  
    return (
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
  
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Inspired by tools developers use every day
          </p>
  
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company}
                className="rounded-2xl border border-slate-800 bg-slate-900 py-5 text-center text-lg font-semibold text-slate-400 transition duration-300 hover:border-blue-500 hover:text-white"
              >
                {company}
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default TrustedBy;