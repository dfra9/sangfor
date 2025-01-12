import { Link } from "@inertiajs/react";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const SCROLL_THRESHOLD = 1;

        const handleScroll = () => {
            setIsScrolled(window.pageYOffset >= SCROLL_THRESHOLD);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar Lang Select */}
            <div className="fixed left-0 right-0 top-0 z-50 h-10 bg-[#00008e]">
                <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-full items-center justify-end">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/language/id"
                                className="text-white hover:text-gray-200"
                            >
                                ID
                            </Link>
                            <span className="text-white">|</span>
                            <Link
                                href="/language/en"
                                className="text-white hover:text-gray-200"
                            >
                                EN
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar*/}
            <header
                className={`fixed left-0 right-0 top-10 z-40 transition-all duration-100 ${
                    isScrolled
                        ? "bg-white/50 shadow-md backdrop-blur-sm"
                        : "bg-white"
                }`}
            >
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center">
                        {/* Logo */}
                        <div className="flex items-center space-x-4">
                            <Link href="/">
                                <img
                                    src="/assets/helios.png"
                                    alt="Helios Logo"
                                    className="h-17"
                                />
                            </Link>
                            <img
                                src="/assets/sangfor.png"
                                alt="Sangfor Logo"
                                className="h-18"
                            />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
