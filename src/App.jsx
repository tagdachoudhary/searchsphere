import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchDashboard from "./components/SearchDashboard";
import Features from "./components/Features";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footers from "./components/Footers";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <SearchDashboard />

      <Features />

      <Stats />

      <CTA />

      <Footers />

    </div>
  );
}

export default App;