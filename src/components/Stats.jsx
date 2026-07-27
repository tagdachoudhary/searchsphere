function Stats() {
  const stats = [
    {
      value: "20+",
      label: "Supported File Types",
    },
    {
      value: "1M+",
      label: "Documents Searchable",
    },
    {
      value: "<100ms",
      label: "Average Search Time",
    },
    {
      value: "99.9%",
      label: "Platform Availability",
    },
  ];

  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="rounded-[32px] border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-16">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.label}
                className="text-center"
              >

                <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-6xl font-extrabold text-transparent">
                  {item.value}
                </h2>

                <p className="mt-4 text-lg text-slate-400">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;