import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Theme } from "../lib/themeToggle";

const storageHandler: Theme = new Theme();
const htmlElement: HTMLElement = document.documentElement;

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string>(storageHandler.getTheme());

    useEffect(() => {
        if (storageHandler.getTheme() === "dark") {
            htmlElement.classList.add("dark");
        } else {
            htmlElement.classList.remove("dark");
        }
    }, []);

    const handleClick = () => {
        let newTheme: string;

        const isLight: boolean = theme === "light";

        if (isLight) {
            htmlElement.classList.add("dark");
            newTheme = "dark";
        } else {
            htmlElement.classList.remove("dark");
            newTheme = "light";
        }

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
