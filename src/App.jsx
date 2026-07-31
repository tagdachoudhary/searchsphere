import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Footer from "./components/Footers";

import SearchDashboard from "./components/SearchDashboard";
import SearchLoader from "./components/SearchLoader";

import CTA from "./components/CTA";
import DashboardPreview from "./components/DashboardPreview";
import HowItWorks from "./components/HowItWorks";
import TrustedBy from "./components/TrustedBy";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query) => {
    console.log("APP SEARCH:", query);

    setIsLoading(true);

    setTimeout(() => {
      setSearchQuery(query);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onSearch={handleSearch} />

      {isLoading ? (
        <SearchLoader />
      ) : searchQuery ? (
        <SearchDashboard searchQuery={searchQuery} />
      ) : (
        <>
          <Hero onSearch={handleSearch} />
          <DashboardPreview />
          <HowItWorks />
          <Features />
          <TrustedBy />
          <Stats />
          <CTA />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;