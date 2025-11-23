"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Research() {
    const { t } = useLanguage();

    return (
        <section id="research" className="py-20 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.research.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.research.description}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {/* @ts-ignore */}
                    {t.research.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">
                                        {/* @ts-ignore */}
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-3">
                                        {/* @ts-ignore */}
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {/* @ts-ignore */}
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {/* @ts-ignore */}
                                    {item.year && (
                                        <p className="text-sm text-muted-foreground">
                                            {/* @ts-ignore */}
                                            {item.year}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
