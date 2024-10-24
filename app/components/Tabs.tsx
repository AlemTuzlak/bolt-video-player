import { useState } from "react";

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

const tabItems = [
  { value: "overview", label: "Overview" },
  { value: "exercises", label: "Exercises" },
  { value: "notes", label: "Notes" },
  { value: "announcements", label: "Announcements" },
  { value: "reviews", label: "Reviews" },
];

export function Tabs({ defaultValue, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      <div className="border-b border-gray-700">
        <div className="px-8 py-4 overflow-x-auto">
          <nav className="flex gap-8 text-lg min-w-max">
            {tabItems.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`pb-4 transition-colors whitespace-nowrap ${
                  activeTab === tab.value
                    ? "text-purple-400 border-b-2 border-purple-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {children instanceof Array
        ? children.find((child) => (child as any).props.value === activeTab)
        : children}
    </div>
  );
}

export function TabsContent({ value, children }: TabsContentProps) {
  return <div data-value={value}>{children}</div>;
}