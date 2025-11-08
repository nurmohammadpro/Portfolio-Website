import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      className="p-1 bg-surface text-primary border-primary-color hover:border-primary-color text-sm rounded-full cursor-pointer transition-colors ease-in-out duration-200"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun strokeWidth={1} width={20} height={20} />
      ) : (
        <Moon strokeWidth={1} width={20} height={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
