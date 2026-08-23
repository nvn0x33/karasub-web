import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>("light");

    const handleClick = () => {
        const htmlElement = document.documentElement;
        let nextTheme: string;

        if (theme === "light") {
            nextTheme = "dark";
            htmlElement.classList.add("dark");
        } else {
            nextTheme = "light";
            htmlElement.classList.remove("dark");
        }

        setTheme(nextTheme);
    };

    return (
        <button
            className="p-2 self-center rounded-full hover:bg-desc/20"
            onClick={handleClick}
        >
            {theme === "light" ? (
                <Sun className="text-desc" strokeWidth={2.5} />
            ) : (
                <Moon className="text-desc" strokeWidth={2.5} />
            )}
        </button>
    );
}
