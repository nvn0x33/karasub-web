import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/logo.png";

export default function Header() {
    return (
        <header className="bg-bg py-6 px-4">
            <nav className="flex ">
                <img src={Logo} />
                <ThemeToggle />
            </nav>
        </header>
    );
}
