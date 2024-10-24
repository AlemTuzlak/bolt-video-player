export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#1c1d1f] border-b border-gray-700 z-20 flex items-center px-8">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-white">LearnCode</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Courses</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Teaching</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-white hover:text-purple-400 transition-colors">Sign In</button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}