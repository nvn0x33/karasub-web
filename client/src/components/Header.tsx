import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/logo.png";

export default function Header() {
    return (
        <header className="bg-bg p-6 max-md:p-4">
            <nav className="flex justify-between">
                <img src={Logo} className="h-6 max-md:h-5" />
                <ThemeToggle />
            </nav>
        </header>
    );
}
