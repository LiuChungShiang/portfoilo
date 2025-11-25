"use client";

import { motion } from "framer-motion";
import { Code, Database, LineChart, Brain, Linkedin, Github, BookOpen } from "lucide-react";
import Image from "next/image";

import { useLanguage } from "../context/LanguageContext";

export function About() {
    const { t } = useLanguage();

    const skills = [
        {
            icon: <LineChart className="w-6 h-6" />,
            title: t.about.skills.dataAnalysis,
            description: t.about.skills.dataAnalysisDesc,
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: t.about.skills.ml,
            description: t.about.skills.mlDesc,
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: t.about.skills.causalInference,
            description: t.about.skills.causalInferenceDesc,
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: t.about.skills.aiDriven,
            description: t.about.skills.aiDrivenDesc,
        },
    ];

    return (
        <section id="about" className="py-20 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    <motion.div
                        initial={false}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            {t.about.description}
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a
                                href="https://www.linkedin.com/in/%E4%BB%B2%E7%BF%94-%E5%8A%89-897a20306/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-background border border-border rounded-full hover:border-primary/50 hover:text-primary transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/LiuChungShiang"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-background border border-border rounded-full hover:border-primary/50 hover:text-primary transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={false}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                            <Image
                                src="/profile.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                            <p className="text-muted-foreground">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-card p-8 rounded-2xl border border-border"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">{t.about.certifications.title}</h3>
                    <div className="space-y-6">
                        {/* @ts-ignore */}
                        {t.about.certifications.categories.map((category, catIndex) => (
                            <div key={catIndex}>
                                <h4 className="text-lg font-semibold mb-3 text-primary">{/* @ts-ignore */}{category.name}</h4>
                                <div className="flex flex-wrap gap-3">
                                    {/* @ts-ignore */}
                                    {category.items.map((cert, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground font-medium border border-border"
                                        >
                                            {cert}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
