"use client";

import { motion } from "framer-motion";
import { Server, Database, Globe, Lock, Code2, MonitorSmartphone, Check } from "lucide-react";
import Image from "next/image";

const technologies = [
    { name: "Global CDN", icon: Globe, color: "text-muda-blue" },
    { name: "Cloud Infrastructure", icon: Server, color: "text-muda-green" },
    { name: "Data Sovereignty", icon: Database, color: "text-muda-yellow" },
    { name: "Enterprise Security", icon: Lock, color: "text-muda-red" },
];

export function TechDemos(): React.ReactElement {
    return (
        <section className="py-24 lg:py-32 bg-muda-navy text-white relative overflow-hidden">
            {/* Deep intense glows for Tech section */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-muda-blue/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-muda-green/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            
            {/* Tech grid background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mb-16 lg:mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white mb-6 backdrop-blur-sm">
                        <Code2 className="w-4 h-4 text-muda-blue" />
                        Infraestrutura Tecnológica
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight mb-6">
                        Não apenas documentos. <br />
                        <span className="text-muda-green font-bold">Substância operacional real.</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-xl">
                        Para a Receita Federal, um CNPJ não basta. Nossa estruturação garante que sua operação tenha IPs paraguaios, servidores locais e infraestrutura provando que seu negócio realmente funciona a partir do Paraguai.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Visual Demo / Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-muda-blue to-muda-green rounded-3xl blur-2xl opacity-20" />
                        <div className="relative rounded-3xl border border-white/10 bg-[#0A1118]/80 backdrop-blur-xl p-4 shadow-2xl overflow-hidden">
                            {/* Browser Header */}
                            <div className="flex items-center gap-2 mb-4 px-2">
                                <div className="w-3 h-3 rounded-full bg-muda-red" />
                                <div className="w-3 h-3 rounded-full bg-muda-yellow" />
                                <div className="w-3 h-3 rounded-full bg-muda-green" />
                                <div className="ml-4 px-3 py-1 bg-white/5 rounded-md flex-1 text-center border border-white/5">
                                    <span className="text-[10px] text-white/40 font-mono flex items-center justify-center gap-2">
                                        <Lock className="w-3 h-3" />
                                        190.128.xxx.xx (Asunción, PY)
                                    </span>
                                </div>
                            </div>
                            
                            {/* Mockup Body */}
                            <div className="aspect-[4/3] rounded-xl bg-[#0F172A] border border-white/5 flex flex-col p-6 relative overflow-hidden">
                                {/* Grid inside mockup */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
                                
                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="text-white font-bold text-sm tracking-wide">Portal de Compliance</div>
                                        <div className="h-8 w-8 rounded-full bg-muda-blue/20 flex items-center justify-center border border-muda-blue/30">
                                            <MonitorSmartphone className="w-4 h-4 text-muda-blue" />
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1 flex gap-4">
                                        <div className="w-1/3 flex flex-col gap-4">
                                            <div className="h-24 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden group flex flex-col justify-center px-4">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-muda-green" />
                                                <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Status IP</div>
                                                <div className="text-lg font-bold text-muda-green">Ativo (PY)</div>
                                            </div>
                                            <div className="h-24 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden flex flex-col justify-center px-4">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-muda-yellow" />
                                                <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Servidor</div>
                                                <div className="text-lg font-bold text-muda-yellow">Online</div>
                                            </div>
                                        </div>
                                        <div className="w-2/3 bg-white/5 rounded-lg border border-white/5 relative flex items-center justify-center overflow-hidden">
                                            {/* Simulated radar/ping effect */}
                                            <div className="absolute w-full h-full flex items-center justify-center">
                                                <motion.div 
                                                    animate={{ scale: [1, 2, 3], opacity: [0.5, 0, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className="w-16 h-16 rounded-full border border-muda-blue bg-muda-blue/10"
                                                />
                                                <div className="w-2 h-2 rounded-full bg-muda-blue shadow-[0_0_10px_#0038A8] absolute" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features list */}
                    <div className="space-y-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/5 ${tech.color}`}>
                                    <tech.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-white mb-0.5">{tech.name}</h4>
                                    <p className="text-sm text-white/50">Infraestrutura validada para compliance fiscal.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                                    <Check className="w-4 h-4 text-muda-green" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
