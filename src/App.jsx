import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Footer from "./components/Footers";

import SearchDashboard from "./components/SearchDashboard";

import CTA from "./components/CTA";
import DashboardPreview from "./components/DashboardPreview";
import HowItWorks from "./components/HowItWorks";
import TrustedBy from "./components/TrustedBy";


function App() {

  const [searchQuery, setSearchQuery] = useState("");


  const handleSearch = (query) => {
    console.log("APP SEARCH:", query);
    setSearchQuery(query);
  };


  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar onSearch={handleSearch} />


      {searchQuery ? (

        <SearchDashboard 
          searchQuery={searchQuery}
        />

      ) : (

        <>
          <Hero />

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