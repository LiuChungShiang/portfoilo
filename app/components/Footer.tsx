"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    const [year, setYear] = useState(2025);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-background border-t border-border py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground text-sm">
                    © {year} {t.footer.rights}
                </p>
                <div className="flex gap-6">
                    {/* Social links can go here */}
                </div>
            </div>
        </footer>
    );
}
