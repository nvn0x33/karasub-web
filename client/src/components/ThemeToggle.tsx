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
