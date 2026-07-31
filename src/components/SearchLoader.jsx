const SearchLoader = () => {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center px-6">
        <div className="text-center">
  
          <div className="mx-auto h-20 w-20 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>
  
          <h2 className="mt-8 text-3xl font-bold text-white">
            SearchSphere AI
          </h2>
  
          <p className="mt-4 text-lg text-gray-400 animate-pulse">
            Analyzing trusted sources...
          </p>
  
          <div className="mt-8 flex justify-center gap-2">
            <span className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce"></span>
            <span
              className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default SearchLoader;