"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Preciso morar no Paraguai?",
        answer: "Não. É possível ser sócio de uma empresa no Paraguai residindo no Brasil, mas a empresa precisará de um representante legal com residência ou identidade paraguaia, dependendo do formato jurídico escolhido."
    },
    {
        question: "Quanto tempo leva?",
        answer: "A constituição e liberação do RUC (Registro Único do Contribuinte) costuma levar de 30 a 60 dias, dependendo da completude dos documentos enviados e da agilidade dos órgãos."
    },
    {
        question: "É legal?",
        answer: "Sim, 100% legal. Empreender no exterior e realizar remessas de capital é um direito do contribuinte brasileiro, desde que declarado ao Banco Central (CBE) e à Receita Federal."
    },
    {
        question: "Como funciona contabilidade e rotina fiscal?",
        answer: "A empresa precisará de um contador local para as declarações (mensais/anuais). A Muda Paraguai assume ou acompanha toda essa rotina para garantir sua conformidade sem envolver você na burocracia."
    },
    {
        question: "Posso operar do Brasil?",
        answer: "A empresa paraguaia pode ter clientes no Brasil ou em qualquer lugar do mundo. Contudo, é fundamental ter 'substância econômica' no Paraguai (endereço, conta bancária, decisões tomadas lá) para evitar questionamentos de bitributação."
    },
    {
        question: "Maquila serve para mim?",
        answer: "O regime de Maquila é um incentivo focado para quem vai industrializar e/ou exportar serviços ou produtos a partir do Paraguai (com imposto único de 1%). Ele requer análise de viabilidade e projeto aprovado pelo governo local."
    }
];

export function FAQSection(): React.ReactElement {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-20 lg:py-32 bg-background border-t border-border/50" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12 lg:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-sora font-semibold text-white tracking-tight mb-4"
                    >
                        Perguntas Frequentes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70"
                    >
                        Clareza antes da execução. Entenda os fundamentos da mudança corporativa para o Paraguai.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card/40 backdrop-blur-md border border-white/10 rounded-xl px-6 py-2 shadow-lg data-[state=open]:border-muda-green/30 transition-colors"
                            >
                                <AccordionTrigger className="text-left font-sora font-semibold text-base sm:text-lg hover:no-underline text-white hover:text-muda-green transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground/70 leading-relaxed pt-2 pb-4 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
