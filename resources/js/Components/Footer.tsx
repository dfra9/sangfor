import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="relative">
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-green-600">
                <div className="absolute inset-y-0 right-0 w-1/2">
                    {/* World Map Pattern */}
                    <div
                        className="h-full w-full bg-contain bg-right bg-no-repeat opacity-20"
                        style={{
                            backgroundImage: "url('/assets/worldmap.png')",
                            backgroundSize: "80%",
                            backgroundPosition: "center right 100%",
                        }}
                    ></div>
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Company Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white">
                                PT. Helios Informatika Nusantara
                            </h3>
                            <div className="space-y-2 text-gray-300">
                                <p>Centennial Tower, 12th Floor,</p>
                                <p>Jl. Jendral Gatot Subroto</p>
                                <p>No. Kav 24-25, Jakarta</p>
                                <p>12930 Indonesia</p>
                            </div>
                            <div className="space-y-2 text-gray-300">
                                <p>
                                    <span className="font-medium">Phone:</span>{" "}
                                    +62 21 8062 2220
                                </p>
                                <p>
                                    <span className="font-medium">Email:</span>{" "}
                                    Tencent@helios.id
                                </p>
                            </div>

                            {/* Social Media Links */}
                            <div className="flex space-x-4">
                                <Link
                                    href="#"
                                    className="rounded-full bg-white transition-colors hover:bg-gray-200"
                                >
                                    <img
                                        src="/assets/ui/Facebook.png"
                                        alt="Facebook"
                                        className="h-7 w-7"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="rounded-full bg-white transition-colors hover:bg-gray-200"
                                >
                                    <img
                                        src="/assets/ui/ig.png"
                                        alt="Instagram"
                                        className="h-7 w-7"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="rounded-full bg-white transition-colors hover:bg-gray-200"
                                >
                                    <img
                                        src="/assets/ui/Twitter.png"
                                        alt="Twitter"
                                        className="h-7 w-7"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="rounded-full bg-white transition-colors hover:bg-gray-200"
                                >
                                    <img
                                        src="/assets/ui/Youtube.png"
                                        alt="YouTube"
                                        className="h-7 w-7"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="rounded-full bg-white transition-colors hover:bg-gray-200"
                                >
                                    <img
                                        src="/assets/ui/Linkedin.png"
                                        alt="LinkedIn"
                                        className="h-7 w-7"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#000a85] py-4">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-sm text-gray-300">
                            © 2023 - PT. Helios Informatika Nusantara - All
                            Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
