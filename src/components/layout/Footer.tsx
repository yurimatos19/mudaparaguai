import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { BrazilFlag, ParaguayFlag } from "@/components/ui/svg-flags";

const socialLinks = [
    {
        icon: MessageCircle,
        label: "WhatsApp",
        href: "https://wa.me/5581992992676?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Muda%20Paraguai.",
        color: "hover:text-muda-green hover:bg-muda-green/10",
    },
    {
        icon: Instagram,
        label: "Instagram",
        href: "https://instagram.com/mudaparaguai",
        color: "hover:text-pink-400 hover:bg-pink-400/10",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/company/mudaparaguai",
        color: "hover:text-blue-400 hover:bg-blue-400/10",
    },
];

export function Footer(): React.ReactElement {
    return (
        <footer className="bg-muda-navy text-muda-offwhite border-t border-white/5 font-sans">
            {/* Top strip — CTA hint */}
            <div className="border-b border-white/5 py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/70 font-medium">
                        Pronto para estruturar sua operação no Paraguai?
                    </p>
                    <Link
                        href="/diagnostico"
                        className="text-sm font-semibold text-muda-yellow hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                        Começar diagnóstico grátis
                        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/logo.png"
                                    alt="Muda Paraguai Logo"
                                    width={150}
                                    height={44}
                                    className="object-contain"
                                />
                            </Link>
                            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                                <BrazilFlag width={16} height={11} />
                                <span className="text-[9px] font-bold text-white/40">➔</span>
                                <ParaguayFlag width={16} height={11} />
                            </div>
                        </div>
                        <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                            Do Brasil ao Paraguai — com segurança jurídica, governança e operação 100% rastreável.
                        </p>
                        <div className="flex items-center gap-2 text-muda-yellow bg-muda-yellow/10 w-fit px-3 py-1.5 rounded-lg border border-muda-yellow/20">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-xs font-semibold tracking-wide uppercase">Compliance-first</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-2 pt-1">
                            {socialLinks.map((s) => (
                                <Link
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-200 ${s.color}`}
                                >
                                    <s.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-semibold text-white tracking-wide text-sm">Plataforma</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/#como-funciona" className="hover:text-white transition-colors">Como funciona</Link></li>
                            <li><Link href="/#para-quem" className="hover:text-white transition-colors">Para quem é</Link></li>
                            <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços e Planos</Link></li>
                            <li><Link href="/diagnostico" className="hover:text-white transition-colors">Diagnóstico gratuito</Link></li>
                            <li><Link href="/#quem-somos" className="hover:text-white transition-colors">Quem somos</Link></li>
                            <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-semibold text-white tracking-wide text-sm">Legal</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
                            <li><Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                            <li><Link href="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link></li>
                            <li>
                                <Link href="/anti-ilicitos" className="hover:text-white transition-colors text-muda-red/80 font-medium hover:text-muda-red">
                                    Política Anti-ilícitos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-semibold text-white tracking-wide text-sm">Contato</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <Link
                                    href="mailto:contato@mudaparaguai.com"
                                    className="flex items-start gap-3 hover:text-white transition-colors group"
                                >
                                    <Mail className="w-4 h-4 mt-0.5 text-white/40 group-hover:text-muda-yellow transition-colors flex-shrink-0" />
                                    <span>contato@mudaparaguai.com</span>
                                </Link>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 text-white/40 flex-shrink-0" />
                                <span>Recife, Brasil<br />Rua Capitão José da Luz, 58, Sala 203</span>
                            </li>
                            <li>
                                <Link
                                    href="https://wa.me/5581992992676?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Muda%20Paraguai."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-muda-yellow/80 hover:text-muda-yellow transition-colors font-medium group"
                                >
                                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    Falar no WhatsApp
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/45">
                    <p>© {new Date().getFullYear()} Muda Paraguai. Todos os direitos reservados.</p>
                    <p className="text-center md:text-right max-w-sm">
                        Site informativo. Nenhuma informação aqui constitui promessa de resultado tributário ou jurídico.
                    </p>
                </div>
            </div>
        </footer>
    );
}
