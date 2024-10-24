import { useState } from "react";

export function Notes() {
  const [notes, setNotes] = useState<string>("");
  const [savedNotes, setSavedNotes] = useState<Array<{ id: number; text: string; date: string }>>([
    { id: 1, text: "Remember to practice HTML semantic elements", date: "2024-03-20" },
    { id: 2, text: "CSS Grid vs Flexbox use cases", date: "2024-03-21" },
  ]);

  const handleSaveNote = () => {
    if (notes.trim()) {
      setSavedNotes([
        { id: Date.now(), text: notes, date: new Date().toISOString().split('T')[0] },
        ...savedNotes,
      ]);
      setNotes("");
    }
  };

  return (
    <div className="p-8">
      <div className="prose prose-invert max-w-none">
        <h2 className="text-xl font-bold mb-4">Course Notes</h2>
        <div className="mb-6">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-32 bg-gray-800 text-white rounded-lg p-4 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            placeholder="Take notes for this lecture..."
          />
          <button
            onClick={handleSaveNote}
            className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Save Note
          </button>
        </div>
        <div className="space-y-4">
          {savedNotes.map((note) => (
            <div key={note.id} className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300">{note.text}</p>
              <p className="text-sm text-gray-500 mt-2">Added on {note.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}