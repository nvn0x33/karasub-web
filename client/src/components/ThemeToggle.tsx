import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Theme } from "../lib/themeToggle";

const storageHandler: Theme = new Theme();
const htmlElement: HTMLElement = document.documentElement;

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>(storageHandler.getTheme());

    useEffect(() => {
        htmlElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleClick = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);
        storageHandler.setTheme(newTheme);
    };

    return (
        <button className="self-center rounded-full" onClick={handleClick}>
            {theme === "light" ? (
                <Sun
                    className="text-desc hover:text-icon-hover"
                    strokeWidth={2.5}
                />
            ) : (
                <Moon
                    className="text-desc hover:text-icon-hover"
                    strokeWidth={2.5}
                />
            )}
        </button>
    );
}
