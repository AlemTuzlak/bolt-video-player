export function Overview({ title }: { title: string }) {
  return (
    <div className="p-8">
      <div className="prose prose-invert max-w-none">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="text-gray-300 space-y-4">
          <p>
            Welcome to this comprehensive web development course! In this section,
            we'll cover the fundamental concepts and tools you'll need to begin
            your journey as a web developer.
          </p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">
            What you'll learn
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Understanding of web development fundamentals</li>
            <li>HTML5 and semantic markup</li>
            <li>CSS3 styling and layouts</li>
            <li>JavaScript programming basics</li>
          </ul>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">
            Course Requirements
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Basic computer skills</li>
            <li>A modern web browser</li>
            <li>Text editor (VS Code recommended)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}