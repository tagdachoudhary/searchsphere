const actions = [
    "Images",
    "Videos",
    "News",
    "Maps",
    "Shopping",
    "Books",
  ];
  
  const QuickActions = () => {
    return (
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
          >
            {action}
          </button>
        ))}
      </div>
    );
  };
  
  export default QuickActions;