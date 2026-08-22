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
        <button onClick={handleClick}>
            {theme === "light" ? <Sun /> : <Moon color="white" />}
        </button>
    );
}
