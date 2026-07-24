import { FileText, Github, Globe, Zap } from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: <FileText size={30} />,
      value: "20+",
      label: "Supported File Types",
    },
    {
      icon: <Github size={30} />,
      value: "GitHub",
      label: "Repository Search",
    },
    {
      icon: <Globe size={30} />,
      value: "Web",
      label: "Website Search",
    },
    {
      icon: <Zap size={30} />,
      value: "<100ms",
      label: "Target Search Latency",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center backdrop-blur-md transition hover:border-blue-500"
          >
            <div className="mb-3 flex justify-center text-blue-400">
              {item.icon}
            </div>

            <h2 className="text-3xl font-bold">{item.value}</h2>

            <p className="mt-2 text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;