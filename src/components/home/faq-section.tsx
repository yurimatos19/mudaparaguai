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
        answer: "Não. É possível ser sócio de uma empresa no Paraguai residindo no Brasil, mas a empresa precisará de um representante legal com residência ou identidade paraguaia, dependendo do formato societário escolhido."
    },
    {
        question: "Quanto tempo leva?",
        answer: "A constituição e liberação do RUC (Registro Único do Contribuinte) costuma levar de 30 a 60 dias, dependendo da completude dos documentos enviados e da agilidade dos órgãos locais."
    },
    {
        question: "É legal?",
        answer: "Sim, 100% legal. Empreender no exterior e realizar remessas de capital é um direito garantido do contribuinte brasileiro, desde que declarado ao Banco Central (CBE) e à Receita Federal (Declaração de IR)."
    },
    {
        question: "Como funciona contabilidade e rotina fiscal?",
        answer: "A empresa precisará de um contador local para as declarações (mensais e anuais). A Muda Paraguai assume ou acompanha toda essa rotina contábil para garantir sua total conformidade sem envolver você na burocracia diária."
    },
    {
        question: "Posso operar do Brasil?",
        answer: "A empresa paraguaia pode ter clientes no Brasil ou em qualquer lugar do mundo. Contudo, é fundamental estabelecer 'substância econômica' no Paraguai (endereço, conta bancária, decisões tomadas lá) para evitar questionamentos de bitributação ou fraude de estabelecimento permanente."
    },
    {
        question: "Maquila serve para mim?",
        answer: "O regime de Maquila é um incentivo focado para quem vai industrializar e/ou exportar serviços ou produtos a partir do Paraguai (com imposto único de 1%). Requer análise de viabilidade técnica e projeto formal aprovado pelo governo local."
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
        <section className="py-20 lg:py-28 bg-background border-t border-border" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-serif font-normal text-foreground tracking-tight mb-3"
                    >
                        Perguntas Frequentes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-sm text-muted-foreground"
                    >
                        Clareza e conformidade antes da execução tributária.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-1">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-border py-1"
                            >
                                <AccordionTrigger className="text-left font-serif font-semibold text-base sm:text-lg hover:no-underline text-foreground hover:text-primary transition-colors py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pt-1 pb-4 text-sm">
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
