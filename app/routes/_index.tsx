import { useState } from "react";
import { VideoPlayer } from "~/components/VideoPlayer";
import { CourseOutline } from "~/components/CourseOutline";
import { Tabs, TabsContent } from "~/components/Tabs";
import { Overview } from "~/components/tabs/Overview";
import { Exercises } from "~/components/tabs/Exercises";
import { Notes } from "~/components/tabs/Notes";
import { Announcements } from "~/components/tabs/Announcements";
import { Reviews } from "~/components/tabs/Reviews";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

const courseModules = [
  {
    title: "Getting Started with Web Development",
    sections: [
      { title: "Introduction to Web Development", duration: "5:30", completed: true },
      { title: "Setting Up Your Development Environment", duration: "10:15", completed: true },
      { title: "HTML Basics", duration: "15:45" },
    ],
  },
  {
    title: "CSS Fundamentals",
    sections: [
      { title: "CSS Selectors and Properties", duration: "12:20" },
      { title: "Box Model and Layout", duration: "18:30" },
      { title: "Flexbox and Grid", duration: "20:15" },
    ],
  },
];

export default function Index() {
  const [currentSection, setCurrentSection] = useState("Introduction to Web Development");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSectionSelect = (moduleIndex: number, sectionIndex: number) => {
    setCurrentSection(courseModules[moduleIndex].sections[sectionIndex].title);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 mt-16">
        <div className="flex">
          {/* Sidebar */}
          <div
            className={`fixed left-0 top-16 bottom-0 bg-[#1c1d1f] border-r border-gray-700 overflow-hidden transition-all duration-300 z-20 ${
              isSidebarOpen ? "w-80" : "w-0"
            }`}
          >
            <div className="h-full overflow-y-auto course-outline">
              <CourseOutline
                modules={courseModules}
                currentSection={currentSection}
                onSectionSelect={handleSectionSelect}
              />
            </div>
          </div>

          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`fixed top-1/2 -translate-y-1/2 z-30 bg-purple-600 hover:bg-purple-700 transition-all duration-300 h-20 flex items-center ${
              isSidebarOpen 
                ? "left-80 rounded-r-lg" 
                : "left-0 rounded-r-lg"
            }`}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isSidebarOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>

          {/* Main Content */}
          <div
            className={`flex-1 transition-all duration-300 ${
              isSidebarOpen ? "ml-80" : "ml-0"
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 py-8">
              <VideoPlayer
                videoUrl="https://www.youtube.com/embed/RKCGVdqomRM"
                onTimeUpdate={(time) => console.log(time)}
              />

              <Tabs defaultValue="overview" className="mt-8">
                <TabsContent value="overview">
                  <Overview title="Web Development Fundamentals" />
                </TabsContent>
                <TabsContent value="exercises">
                  <Exercises />
                </TabsContent>
                <TabsContent value="notes">
                  <Notes />
                </TabsContent>
                <TabsContent value="announcements">
                  <Announcements />
                </TabsContent>
                <TabsContent value="reviews">
                  <Reviews />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}