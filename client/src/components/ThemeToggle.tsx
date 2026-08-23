import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>("light");

    const handleClick = () => {
        const htmlElement: HTMLElement = document.documentElement;
        const isLight: boolean = theme === "light";

        if (isLight) {
            htmlElement.classList.add("dark");
            setTheme("dark");
        } else {
            htmlElement.classList.remove("dark");
            setTheme("light");
        }
    };

    return (
        <button
            className="p-1.5 self-center rounded-full hover:bg-desc/20"
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
