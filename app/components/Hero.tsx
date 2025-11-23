"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                    {/* Fallback to image if video doesn't load */}
                    <Image
                        src="/background.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
            </div>

            <div className="container px-4 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative w-32 h-32 md:w-40 md:h-40 mx-auto"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-75 blur-lg animate-pulse" />
                    <Image
                        src="/hero-profile.jpg"
                        alt="Profile"
                        fill
                        className="object-cover rounded-full border-4 border-background relative z-10 shadow-xl"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        {t.hero.title}
                        <span className="text-primary block mt-2">{t.hero.subtitle}</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium"
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
                >
                    <Link
                        href="#contact"
                        className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-xl hover:bg-primary/90 transition-all shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 border-2 border-primary-foreground/20 animate-pulse hover:animate-none"
                    >
                        {t.hero.contactMe}
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-muted-foreground w-6 h-6" />
            </motion.div>
        </section>
    );
}
