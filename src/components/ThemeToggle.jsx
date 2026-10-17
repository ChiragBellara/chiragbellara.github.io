import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "theme-dark";

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            // className="border-none bg-trasparent cursor-pointer"
            style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
            }}
        >
            {isDark ? <Sun /> : <Moon />}
        </button>
    );
}
