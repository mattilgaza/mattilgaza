"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const pathname = usePathname();

    const linkClass = (path) =>
        `px-3 py-1 rounded transition ${pathname === path
            ? "underline underline-offset-4 font-semibold text-white"
            : "text-gray-200 hover:text-gray-400 hover:underline hover:underline-offset-4"
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-gray-800 shadow-md">
            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-gray-800 shadow-xl transform transition-transform duration-300 z-50 flex flex-col ${sidebarVisible ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setSidebarVisible(false)}
                        className="text-3xl text-gray-300 hover:text-white"
                    >
                        ✕
                    </button>
                </div>
                <ul className="flex flex-col mt-4 space-y-4 px-4 text-lg">
                    <li className="">
                        <Link href="/" onClick={() => setSidebarVisible(false)} className="block px-4 py-2 rounded text-cotton hover:text-gray-300">
                            Forside
                        </Link>
                    </li>
                    <li>
                        <Link href="/vipps" onClick={() => setSidebarVisible(false)} className={linkClass("/vipps")}>
                            Vipps
                        </Link>
                    </li>
                    <li>
                        <Link href="/om_oss" onClick={() => setSidebarVisible(false)} className="block px-4 py-2 rounded text-cotton hover:bg-gray-300">
                            Om Oss
                        </Link>
                    </li>
                    <li>
                        <Link href="/aktivitet" onClick={() => setSidebarVisible(false)} className="block px-4 py-2 rounded text-cotton hover:bg-gray-300">
                            Aktivitet
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Desktop Navbar */}
            <div className="flex items-center justify-between px-6 py-4 md:py-3 md:px-12">
                <Link href="/" className="text-3xl font-thin text-gray-100">
                    Mat til Gaza
                </Link>

                <ul className="hidden md:flex items-center space-x-6 text-lg">
                    <li className="hover:bg-gray-700 rounded px-3 py-1">
                        <Link href="/" className={linkClass("/")}>Forside</Link>
                    </li>
                    <li className="hover:bg-gray-700 rounded px-3 py-1">
                        <Link href="/vipps" className={linkClass("/vipps")}>Vipps</Link>
                    </li>
                    <li className="hover:bg-gray-700 rounded px-3 py-1">
                        <Link href="/om_oss" className={linkClass("/om_oss")}>Om Oss</Link>
                    </li>
                    <li className="hover:bg-gray-700 rounded px-3 py-1">
                        <Link href="/aktivitet" className={linkClass("/aktivitet")}>Aktivitet</Link>
                    </li>
                </ul>

                {/* Hamburger for mobile */}
                <button
                    className="md:hidden text-3xl text-gray-300 hover:text-white"
                    onClick={() => setSidebarVisible(true)}
                >
                    ☰
                </button>
            </div>
        </nav>
    );
}
