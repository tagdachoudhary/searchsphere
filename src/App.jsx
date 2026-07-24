import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

  <div className="absolute right-20 top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

  <div className="absolute bottom-10 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[180px]" />

</div>
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}

export default App;