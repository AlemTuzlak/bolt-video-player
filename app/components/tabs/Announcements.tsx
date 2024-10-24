export function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "New Course Section Added",
      date: "2024-03-21",
      content: "We've just added a new section on Advanced CSS Techniques!",
      author: "Course Instructor",
    },
    {
      id: 2,
      title: "Live Q&A Session",
      date: "2024-03-20",
      content: "Join us this Friday for a live Q&A session where we'll discuss common challenges in web development.",
      author: "Course Team",
    },
  ];

  return (
    <div className="p-8">
      <div className="prose prose-invert max-w-none">
        <h2 className="text-xl font-bold mb-4">Course Announcements</h2>
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white">{announcement.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                <span>{announcement.author}</span>
                <span>•</span>
                <span>{announcement.date}</span>
              </div>
              <p className="mt-3 text-gray-300">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}