"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Experience() {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {t.experience.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className={`md:col-span-2 relative ${item.image ? 'p-6 rounded-xl overflow-hidden border border-border/50' : ''}`}>
                                    {/* @ts-ignore */}
                                    {item.image && (
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                /* @ts-ignore */
                                                src={item.image}
                                                /* @ts-ignore */
                                                alt={item.company}
                                                fill
                                                className="object-cover opacity-80"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                                        </div>
                                    )}

                                    <div className="relative z-10">
                                        <div className={`mb-1 text-sm font-semibold ${item.image ? 'text-white' : 'text-primary'}`}>
                                            {item.year}
                                        </div>

                                        <h3 className={`text-xl font-bold mb-1 ${item.image ? 'text-white' : ''}`}>{item.title}</h3>
                                        <div className={`${item.image ? 'text-gray-200' : 'text-muted-foreground'} mb-2 flex items-center gap-2`}>
                                            <Briefcase className="w-4 h-4" />
                                            {item.company}
                                        </div>

                                        <p className={`${item.image ? 'text-gray-200' : 'text-muted-foreground'}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* @ts-ignore */}
                                {item.details && (
                                    <div className="md:col-span-1 flex items-center">
                                        <p className="text-muted-foreground">
                                            {/* @ts-ignore */}
                                            {item.details}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
