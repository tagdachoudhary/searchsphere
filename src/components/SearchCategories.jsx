const categories = [
    {
      title: "Technology",
      emoji: "💻",
    },
    {
      title: "Science",
      emoji: "🧪",
    },
    {
      title: "Business",
      emoji: "💼",
    },
    {
      title: "Health",
      emoji: "🏥",
    },
    {
      title: "Education",
      emoji: "📚",
    },
    {
      title: "Entertainment",
      emoji: "🎬",
    },
  ];
  
  const SearchCategories = () => {
    return (
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Explore Categories
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer text-center"
              >
                <div className="text-4xl mb-4">{category.emoji}</div>
  
                <h3 className="text-white font-semibold">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SearchCategories;