import SearchBar from "./SearchBar";
import RecentSearches from "./RecentSearches";
import TrendingSearches from "./TrendingSearches";
import QuickActions from "./QuickActions";

const Hero = ({ onSearch }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-slate-900 px-6">
      <div className="max-w-6xl w-full text-center">

        <h1 className="text-6xl font-extrabold text-white">
          Search Smarter.
        </h1>

        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
          Find Faster.
        </h2>

        <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">
          Experience the next generation of intelligent search powered by AI,
          beautiful design and blazing-fast performance.
        </p>

        <SearchBar onSearch={onSearch} />

        <QuickActions />

        <RecentSearches />

        <TrendingSearches />

      </div>
    </section>
  );
};

export default Hero;