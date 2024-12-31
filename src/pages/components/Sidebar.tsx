import { 
  Home, 
  LineChart, 
  BarChart2, 
  BookText, 
  Brain, 
  Settings, 
  User,
  Sun,
  Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

export const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle the 'dark' class on the document element
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="w-64 bg-[#151725] h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="h-8 w-8 bg-purple-600 rounded-lg"></div>
        <h1 className="text-xl font-bold">Dashdark X</h1>
      </div>

      <div className="flex-1 space-y-1">
        <Button variant="ghost" className="w-full justify-start gap-3 text-purple-500">
          <Home className="h-5 w-5" />
          Trade
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
          <BarChart2 className="h-5 w-5" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
          <BookText className="h-5 w-5" />
          Trade log
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
          <Brain className="h-5 w-5" />
          Insight
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
          <LineChart className="h-5 w-5" />
          Notebook
        </Button>
      </div>

      <div className="space-y-1">
        <Toggle 
          className="w-full justify-start gap-3 text-gray-400"
          pressed={isDarkMode}
          onPressedChange={toggleTheme}
        >
          {isDarkMode ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Toggle>
        <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
          <Settings className="h-5 w-5" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
          <User className="h-5 w-5" />
          Profile
        </Button>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/ae943dd7-fc9a-4b11-9f4d-c35a778fb499.png" alt="Profile" className="h-10 w-10 rounded-full" />
          <div className="flex-1">
            <p className="font-medium">John Carter</p>
            <p className="text-sm text-gray-400">Account Settings</p>
          </div>
        </div>
      </div>

      <Button className="mt-6 bg-purple-600 hover:bg-purple-700">
        Get template →
      </Button>
    </div>
  );
};