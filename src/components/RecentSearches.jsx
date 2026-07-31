const searches = [
    "React Interview Questions",
    "OpenAI GPT",
    "JavaScript Arrays",
    "Tailwind CSS",
    "Frontend Roadmap",
  ];
  
  const RecentSearches = () => {
    return (
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">
          Recent Searches
        </h3>
  
        <div className="flex flex-wrap gap-3">
          {searches.map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-white transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default RecentSearches;