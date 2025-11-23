"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Globe } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navItems = [
        { name: t.nav.home, href: "/" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.experience, href: "#experience" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        if (language === "en") {
            setLanguage("ja");
        } else if (language === "ja") {
            setLanguage("zh-tw");
        } else {
            setLanguage("en");
        }
    };

    const getLanguageLabel = () => {
        if (language === "en") return "JA";
        if (language === "ja") return "中";
        return "EN";
    };

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                            <Code2 className="w-6 h-6 text-primary" />
                            <span>Portfolio</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium border border-border hover:border-primary/50"
                            >
                                <Globe className="w-4 h-4" />
                                <span>{getLanguageLabel()}</span>
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md text-sm font-medium border border-border"
                        >
                            <span className="font-bold">{getLanguageLabel()}</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
