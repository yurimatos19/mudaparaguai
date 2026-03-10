"use client";

import { motion } from "framer-motion";
import { Scale, Cpu, Linkedin, ShieldCheck } from "lucide-react";

const team = [
    {
        name: "Osvaldo Neto",
        role: "Advogado Especialista",
        roleColor: "text-muda-green",
        borderColor: "border-muda-green/20",
        glowColor: "bg-muda-green",
        initials: "ON",
        avatarBg: "from-muda-green/30 to-muda-green/5",
        description:
            "Advogado especializado em direito societário e governança tributária. Assegura que cada passo da migração possua embasamento legal, construindo estruturas societárias seguras no eixo Brasil-Paraguai.",
        tags: [
            { icon: Scale, label: "Direito Societário" },
            { icon: ShieldCheck, label: "Compliance Tributário" },
        ],
        linkedin: "https://linkedin.com/in/",
        delay: 0,
    },
    {
        name: "Yuri Barbosa Matos",
        role: "Engenheiro de IA & Automação",
        roleColor: "text-muda-blue",
        borderColor: "border-muda-blue/20",
        glowColor: "bg-muda-blue",
        initials: "YB",
        avatarBg: "from-muda-blue/30 to-muda-blue/5",
        description:
            "Especialista em inteligência artificial e automação de processos. Desenvolve as soluções tecnológicas que garantem eficiência operacional, integração de sistemas e redução de fricção burocrática.",
        tags: [
            { icon: Cpu, label: "Inteligência Artificial" },
            { icon: ShieldCheck, label: "Automação de Processos" },
        ],
        linkedin: "https://linkedin.com/in/",
        delay: 0.15,
    },
];

export function WhoWeAre(): React.ReactElement {
    return (
        <section className="py-24 lg:py-32 bg-background border-t border-white/5 relative overflow-hidden" id="quem-somos">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-muda-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                <div className="text-center mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-sm font-medium mb-6"
                    >
                        <ShieldCheck className="w-3.5 h-3.5 text-muda-green" />
                        Fundadores
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-sora font-semibold text-white tracking-tighter mb-4"
                    >
                        Quem está por trás da Muda Paraguai
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed"
                    >
                        Unimos inteligência jurídica e tecnologia de ponta para construir pontes sólidas — não atalhos.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {team.map((member) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: member.delay }}
                            className={`group relative rounded-[2rem] border ${member.borderColor} bg-card/60 backdrop-blur-xl overflow-hidden hover:border-opacity-50 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl`}
                        >
                            {/* Glow on hover */}
                            <div className={`absolute -top-24 -right-24 w-64 h-64 ${member.glowColor}/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            <div className="p-8 sm:p-10 relative z-10">
                                {/* Avatar + name row */}
                                <div className="flex items-start gap-5 mb-6">
                                    {/* Avatar placeholder — styled initials */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarBg} border ${member.borderColor} flex items-center justify-center flex-shrink-0 shadow-inner`}>
                                        <span className={`text-xl font-sora font-black ${member.roleColor}`}>{member.initials}</span>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <h3 className="text-xl font-sora font-bold text-white mb-1 leading-tight">{member.name}</h3>
                                                <p className={`text-sm font-semibold ${member.roleColor}`}>{member.role}</p>
                                            </div>
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/20 transition-all duration-200 flex-shrink-0"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-foreground/65 text-sm leading-relaxed mb-6">
                                    {member.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {member.tags.map((tag) => (
                                        <div
                                            key={tag.label}
                                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${member.borderColor} bg-white/5 text-xs font-semibold text-white/60`}
                                        >
                                            <tag.icon className={`w-3 h-3 ${member.roleColor}`} />
                                            {tag.label}
                                        </div>
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
