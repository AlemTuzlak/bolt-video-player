import { useState } from "react";

interface Section {
  title: string;
  duration: string;
  completed?: boolean;
}

interface Module {
  title: string;
  sections: Section[];
}

interface CourseOutlineProps {
  modules: Module[];
  currentSection?: string;
  onSectionSelect: (moduleIndex: number, sectionIndex: number) => void;
}

export function CourseOutline({ modules, currentSection, onSectionSelect }: CourseOutlineProps) {
  const [expandedModules, setExpandedModules] = useState<number[]>(modules.map((_, i) => i));

  const toggleModule = (moduleIndex: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleIndex)
        ? prev.filter(i => i !== moduleIndex)
        : [...prev, moduleIndex]
    );
  };

  return (
    <div className="pt-6 px-6">
      <h2 className="text-xl font-bold mb-6 text-white">Course Content</h2>
      <div className="space-y-6">
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="border-b border-gray-700 pb-6 last:border-0">
            <button
              onClick={() => toggleModule(moduleIndex)}
              className="w-full text-left space-y-2 font-bold text-lg mb-4 text-white hover:text-purple-400 transition-colors"
            >
              <div className="text-sm text-purple-400">Section {moduleIndex + 1}</div>
              <div className="flex items-center justify-between">
                <span className="pr-8">{module.title}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transform transition-transform ${
                    expandedModules.includes(moduleIndex) ? "rotate-0" : "-rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedModules.includes(moduleIndex) && (
              <ul className="space-y-2">
                {module.sections.map((section, sectionIndex) => (
                  <li
                    key={sectionIndex}
                    onClick={() => onSectionSelect(moduleIndex, sectionIndex)}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors
                      ${section.title === currentSection
                        ? "bg-purple-600 text-white"
                        : "hover:bg-gray-700 text-gray-300"
                      }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {section.completed ? (
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium break-words">{section.title}</p>
                      <p className="text-sm text-gray-400 mt-1">{section.duration}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}