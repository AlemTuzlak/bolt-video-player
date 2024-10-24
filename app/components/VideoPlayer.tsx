import { useState } from "react";
import { Button, Menu, MenuTrigger, Popover } from "react-aria-components";

interface Chapter {
  id: number;
  title: string;
  timestamp: number;
}

interface VideoPlayerProps {
  videoUrl: string;
  onTimeUpdate: (time: number) => void;
}

export function VideoPlayer({ videoUrl, onTimeUpdate }: VideoPlayerProps) {
  const [chapters, setChapters] = useState<Chapter[]>([
    { id: 1, title: "Introduction", timestamp: 0 },
    { id: 2, title: "Main Content", timestamp: 180 },
    { id: 3, title: "Summary", timestamp: 360 },
  ]);
  const [newChapterTitle, setNewChapterTitle] = useState("");
  const [currentTime, setCurrentTime] = useState(0);

  const handleAddChapter = () => {
    if (newChapterTitle.trim()) {
      const newChapter = {
        id: Date.now(),
        title: newChapterTitle.trim(),
        timestamp: Math.floor(currentTime),
      };
      setChapters([...chapters, newChapter]);
      setNewChapterTitle("");
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-xl">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          title="Course Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onTimeUpdate={(e) => {
            const time = (e.target as HTMLVideoElement).currentTime;
            setCurrentTime(time);
            onTimeUpdate(time);
          }}
        />
      </div>
      <div className="p-4 bg-[#2d2f31] border-t border-gray-700">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const iframe = document.querySelector('iframe');
                const player = (iframe as any)?.contentWindow;
                player?.postMessage('{"event":"command","func":"seekTo","args":[' + (-30) + ']}', '*');
              }}
              className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition-colors text-white font-medium"
            >
              ⏪ 30s
            </button>
            <button
              onClick={() => {
                const iframe = document.querySelector('iframe');
                const player = (iframe as any)?.contentWindow;
                player?.postMessage('{"event":"command","func":"seekTo","args":[' + 30 + ']}', '*');
              }}
              className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition-colors text-white font-medium"
            >
              30s ⏩
            </button>

            <MenuTrigger>
              <Button className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition-colors text-white font-medium">
                Chapters ▼
              </Button>
              <Popover className="mt-2">
                <Menu className="w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-4">
                  <div className="mb-4">
                    <input
                      type="text"
                      value={newChapterTitle}
                      onChange={(e) => setNewChapterTitle(e.target.value)}
                      placeholder="Chapter title"
                      className="w-full px-3 py-2 bg-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      onClick={handleAddChapter}
                      className="mt-2 w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 transition-colors text-white rounded-md"
                    >
                      Add at {formatTime(currentTime)}
                    </button>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {chapters.map((chapter) => (
                      <Button
                        key={chapter.id}
                        onPress={() => {
                          const iframe = document.querySelector('iframe');
                          const player = (iframe as any)?.contentWindow;
                          player?.postMessage(`{"event":"command","func":"seekTo","args":[${chapter.timestamp}]}`, '*');
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md text-gray-300 transition-colors"
                      >
                        {chapter.title} ({formatTime(chapter.timestamp)})
                      </Button>
                    ))}
                  </div>
                </Menu>
              </Popover>
            </MenuTrigger>
          </div>

          <a
            href={videoUrl}
            download
            className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 transition-colors text-white font-medium flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}