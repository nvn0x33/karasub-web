import Logo from "../assets/logo.png";

import { Moon } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-bg py-6 px-4">
            <nav className="flex ">
                <img src={Logo} />
            </nav>
        </header>
    );
}
