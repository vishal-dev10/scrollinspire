import { Link } from "react-router-dom";
import { 
  Plus, 
  BarChart2, 
  BookText, 
  Brain, 
  LineChart, 
  Settings, 
  User,
  Sun,
  Moon
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

export const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="w-64 bg-white dark:bg-[#151725] h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="h-8 w-8 bg-purple-600 rounded-lg"></div>
        <h1 className="text-xl font-bold">TradeMate</h1>
      </div>

      <div className="flex-1 space-y-1">
        <Link
          to="/new-trade"
          className="flex items-center gap-3 text-purple-500 p-2 rounded hover:bg-gray-700"
        >
          <Plus className="h-5 w-5" />
          New Trade
        </Link>
        <Link
          to="/"
          className="flex items-center gap-3 text-gray-400 p-2 rounded hover:bg-gray-700"
        >
          <BarChart2 className="h-5 w-5" />
          Dashboard
        </Link>
        <Link
          to="/trade-log"
          className="flex items-center gap-3 text-gray-400 p-2 rounded hover:bg-gray-700"
        >
          <BookText className="h-5 w-5" />
          Trade Log
        </Link>
        <Link
          to="/insight"
          className="flex items-center gap-3 text-gray-400 p-2 rounded hover:bg-gray-700"
        >
          <Brain className="h-5 w-5" />
          Insight
        </Link>
        <Link
          to="/notebook"
          className="flex items-center gap-3 text-gray-400 p-2 rounded hover:bg-gray-700"
        >
          <LineChart className="h-5 w-5" />
          Notebook
        </Link>
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
        <Link
          to="/settings"
          className="flex items-center gap-3 text-gray-400 p-2 rounded hover:bg-gray-700"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
        <Link
          to="/profile"
          className="flex items-center gap-3 text-gray-400 p-2 rounded hover:bg-gray-700"
        >
          <User  className="h-5 w-5" />
          Profile
        </Link>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="flex items-center gap-3">
          {/* <img src="/lovable-uploads/ae943dd7-fc9a-4b11-9f4d-c35a778fb499.png" alt="Profile" className="h-10 w-10 rounded-full" /> */}
          {/* <div className="flex-1">
            <p className="font-medium">John Carter</p>
            <p className="text-sm text-gray-400">Account Settings</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};