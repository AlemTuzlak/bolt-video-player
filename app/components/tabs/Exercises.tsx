export function Exercises() {
  const exercises = [
    {
      id: 1,
      title: "Build a Responsive Navigation",
      difficulty: "Intermediate",
      estimatedTime: "45 mins",
      description: "Create a responsive navigation bar that collapses into a hamburger menu on mobile devices.",
      completed: false,
    },
    {
      id: 2,
      title: "CSS Grid Layout Challenge",
      difficulty: "Advanced",
      estimatedTime: "1 hour",
      description: "Implement a complex grid layout using CSS Grid, including nested grids and responsive breakpoints.",
      completed: true,
    },
  ];

  return (
    <div className="p-8">
      <div className="prose prose-invert max-w-none">
        <h2 className="text-xl font-bold mb-4">Practice Exercises</h2>
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{exercise.title}</h3>
                {exercise.completed ? (
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">Completed</span>
                ) : (
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">In Progress</span>
                )}
              </div>
              <div className="flex gap-4 mt-2 text-sm text-gray-400">
                <span>Difficulty: {exercise.difficulty}</span>
                <span>•</span>
                <span>Est. Time: {exercise.estimatedTime}</span>
              </div>
              <p className="mt-3 text-gray-300">{exercise.description}</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                {exercise.completed ? "Review Solution" : "Start Exercise"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}