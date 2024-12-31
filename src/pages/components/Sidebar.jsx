import { 
  Home, 
  LineChart, 
  BarChart2, 
  BookText, 
  Brain, 
  Settings, 
  User,
  Sun,
  Moon,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <ShadcnSidebar>
        <SidebarHeader className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-purple-600 rounded-lg"></div>
            <h1 className="text-xl font-bold">Dashdark X</h1>
          </div>
          <SidebarTrigger />
        </SidebarHeader>

        <SidebarContent>
          <div className="flex-1 space-y-1 p-4">
            <Button variant="ghost" className="w-full justify-start gap-3 text-purple-500">
              <Home className="h-5 w-5" />
              <span>Trade</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
              <BarChart2 className="h-5 w-5" />
              <span>Dashboard</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
              <BookText className="h-5 w-5" />
              <span>Trade log</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
              <Brain className="h-5 w-5" />
              <span>Insight</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
              <LineChart className="h-5 w-5" />
              <span>Notebook</span>
            </Button>
          </div>

          <div className="space-y-1 p-4">
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
              <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
            </Toggle>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700 p-4">
            <div className="flex items-center gap-3">
              <img src="/lovable-uploads/ae943dd7-fc9a-4b11-9f4d-c35a778fb499.png" alt="Profile" className="h-10 w-10 rounded-full" />
              <div className="flex-1">
                <p className="font-medium">John Carter</p>
                <p className="text-sm text-gray-400">Account Settings</p>
              </div>
            </div>
          </div>

          <Button className="m-4 w-[calc(100%-2rem)] bg-purple-600 hover:bg-purple-700">
            Get template →
          </Button>
        </SidebarContent>
      </ShadcnSidebar>
    </SidebarProvider>
  );
};