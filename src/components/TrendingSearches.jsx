const trending = [
    "AI",
    "Apple",
    "Tesla",
    "Football",
    "Cricket",
    "Netflix",
    "ChatGPT",
    "Coding",
  ];
  
  const TrendingSearches = () => {
    return (
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">
          Trending Searches
        </h3>
  
        <div className="flex flex-wrap gap-3">
          {trending.map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-orange-400 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
            >
              🔥 {item}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default TrendingSearches;