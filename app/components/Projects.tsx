"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Image as ImageIcon, Video, Activity, Calculator, Utensils } from "lucide-react";
import Link from "next/link";

import { useLanguage } from "../context/LanguageContext";

export function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            title: t.projects.items.tableauDashboard.title,
            description: t.projects.items.tableauDashboard.description,
            tags: ["Tableau", "Data Visualization", "BI"],
            icon: <ImageIcon className="w-10 h-10 text-blue-400" />,
            link: "#",
        },
        {
            title: t.projects.items.recommendation.title,
            description: t.projects.items.recommendation.description,
            tags: ["Python", "BERT", "Ranking", "ML"],
            icon: <Video className="w-10 h-10 text-green-400" />,
            link: "#",
        },
        {
            title: t.projects.items.stpPersona.title,
            description: t.projects.items.stpPersona.description,
            tags: ["Marketing", "Data Analysis", "STP"],
            icon: <Utensils className="w-10 h-10 text-orange-400" />,
            link: "#",
        },
        {
            title: t.projects.items.dietRecord.title,
            description: t.projects.items.dietRecord.description,
            tags: ["Python", "Data Analysis", "Visualization"],
            icon: <Calculator className="w-10 h-10 text-purple-400" />,
            link: "#",
        },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.projects.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-2">
                                        <Link href={project.link} className="p-2 hover:text-primary transition-colors">
                                            <Github className="w-5 h-5" />
                                        </Link>
                                        <Link href={project.link} className="p-2 hover:text-primary transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
