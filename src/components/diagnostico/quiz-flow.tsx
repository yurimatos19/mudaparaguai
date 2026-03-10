"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

// --- Data Definitions ---
type Option = { label: string; score: number };
type Question = {
    id: string;
    question: string;
    weight?: number;
    options: Option[];
    isIllicitFilter?: boolean;
};

const questions: Question[] = [
    {
        id: "q1",
        question: "1. Qual é o seu perfil profissional?",
        options: [
            { label: "Empresário / Dono de Negócio", score: 10 },
            { label: "Investidor", score: 8 },
            { label: "Profissional Liberal", score: 5 },
            { label: "Outro", score: 2 }
        ]
    },
    {
        id: "q2",
        question: "2. Qual é a faixa de receita anual (ou projeção) do negócio envolvido?",
        options: [
            { label: "Até R$ 1 Milhão", score: 4 },
            { label: "De R$ 1 a 5 Milhões", score: 7 },
            { label: "De R$ 5 a 20 Milhões", score: 9 },
            { label: "Acima de R$ 20 Milhões", score: 10 }
        ]
    },
    {
        id: "q3",
        question: "3. Qual a origem principal da sua receita?",
        weight: 1.2,
        options: [
            { label: "Prestação de Serviços (Digitais ou Físicos)", score: 10 },
            { label: "Comércio Varejista/Atacadista", score: 7 },
            { label: "Indústria / Transformação", score: 9 },
            { label: "Importação / Exportação", score: 10 }
        ]
    },
    {
        id: "q4",
        question: "4. Qual a complexidade da sua estrutura atual?",
        options: [
            { label: "Eu sozinho (Empreendedor Individual)", score: 5 },
            { label: "1 a 3 sócios, empresa única", score: 7 },
            { label: "Múltiplas empresas ou holding", score: 10 }
        ]
    },
    {
        id: "q5",
        question: "5. Sobre rotina, você aceitaria governança, contabilidade mensal e manutenção de documentos?",
        weight: 2.0,
        options: [
            { label: "Sim, busco organização e previsibilidade.", score: 10 },
            { label: "Apenas o mínimo obrigatório por lei.", score: 5 },
            { label: "Não. Prefiro operar na informalidade/sem burocracia.", score: 0 }
        ]
    },
    {
        id: "q6",
        question: "6. A sua operação já possui um caráter internacional?",
        options: [
            { label: "Sim, tenho clientes/fornecedores no exterior.", score: 10 },
            { label: "Não, mas pretendo expandir em breve.", score: 8 },
            { label: "Não, minha operação será 100% Brasil.", score: 5 }
        ]
    },
    {
        id: "q7",
        question: "7. Você possui passivos, dívidas ativas ou contencioso relevante no Brasil?",
        options: [
            { label: "Não, situação fiscal limpa.", score: 10 },
            { label: "Sim, mas sob controle/parcelado.", score: 6 },
            { label: "Sim, passivos altos e busco fugir de bloqueios.", score: 0 }
        ]
    },
    {
        id: "q8",
        question: "8. Qual é o seu principal objetivo com o Paraguai?",
        weight: 1.5,
        options: [
            { label: "Previsibilidade tributária e segurança", score: 10 },
            { label: "Expansão comercial para América do Sul", score: 9 },
            { label: "Regime de Maquila (Exportação/Industrial)", score: 10 },
            { label: "Apenas reduzir custos operacionais rápidos", score: 4 }
        ]
    },
    {
        id: "q9",
        question: "9. Em quanto tempo você pretende iniciar a operação/migração?",
        options: [
            { label: "Imediatamente (0 a 30 dias)", score: 10 },
            { label: "Em breve (31 a 90 dias)", score: 8 },
            { label: "Apenas estudando para o futuro (+90 dias)", score: 4 }
        ]
    },
    {
        id: "q10",
        question: "10. Você busca reduzir impostos por meio de ocultação patrimonial, fraude, sonegação, lavagem de dinheiro ou laranjas?",
        isIllicitFilter: true,
        options: [
            { label: "Não. Busco otimização dentro da lei e com compliance.", score: 10 },
            { label: "Sim. Procuro atalhos informais para não pagar impostos.", score: 0 } // Triggers block
        ]
    }
];

// --- Main Component ---
export function QuizFlow(): React.ReactElement {
    const [step, setStep] = useState(0); // 0 to 9: questions | 10: lead form | 11: results
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [illicitIntent, setIllicitIntent] = useState(false);

    // Lead Form
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", consent: false });

    // Navigation
    const handleOptionSelect = (qId: string, score: number, isIllicit: boolean = false) => {
        setAnswers(prev => ({ ...prev, [qId]: score }));

        if (isIllicit && score === 0) {
            setIllicitIntent(true);
        } else if (isIllicit && score > 0) {
            setIllicitIntent(false);
        }

        setTimeout(() => {
            setStep(s => s + 1);
        }, 400); // Small delay for UX
    };

    const handleBack = () => {
        if (step > 0) setStep(s => s - 1);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStep(11); // Show results immediately (optimistic UI)

        // Calculate data to send
        const score = calculateScore();
        let fitLevel = "Baixo Fit";
        if (score >= 70 && !illicitIntent) fitLevel = "Alto Fit";
        else if (score >= 40 && !illicitIntent) fitLevel = "Médio Fit";

        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    consent: formData.consent,
                    answers: answers,
                    score: score,
                    fitLevel: fitLevel,
                    illicitIntent: illicitIntent
                })
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // Score Calculation
    const calculateScore = () => {
        if (illicitIntent) return 0;

        let totalScore = 0;
        let maxPossible = 0;

        questions.forEach(q => {
            const weight = q.weight || 1;
            const userAns = answers[q.id] || 0;
            totalScore += userAns * weight;
            maxPossible += 10 * weight; // 10 is max score per question
        });

        return Math.round((totalScore / maxPossible) * 100);
    };

    const currentQ = questions[step];
    const progress = ((step) / (questions.length + 1)) * 100;

    // Renderers
    const renderQuestion = () => (
        <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
        >
            <h2 className="text-2xl sm:text-3xl font-sora font-semibold text-foreground">
                {currentQ.question}
            </h2>
            <div className="space-y-3">
                {currentQ.options.map((opt, i) => (
                    <button
                        key={i}
                        onClick={() => handleOptionSelect(currentQ.id, opt.score, currentQ.isIllicitFilter)}
                        className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-md
              ${answers[currentQ.id] === opt.score
                                ? 'border-primary bg-primary/5 shadow-sm'
                                : 'border-border/60 bg-card hover:border-primary/50'
                            }`}
                    >
                        <span className="text-lg text-foreground font-medium">{opt.label}</span>
                    </button>
                ))}
            </div>
        </motion.div>
    );

    const renderLeadForm = () => (
        <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-sora font-semibold text-foreground mb-3">Último passo!</h2>
                <p className="text-foreground/70">Preencha os dados abaixo para visualizar seu score e liberar seu relatório executivo.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5 bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
                <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" required placeholder="João da Silva"
                        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 bg-background"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">E-mail de negócio</Label>
                    <Input id="email" type="email" required placeholder="joao@empresa.com.br"
                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 bg-background"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp</Label>
                    <Input id="phone" type="tel" required placeholder="(11) 99999-9999"
                        value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 bg-background"
                    />
                </div>
                <div className="flex items-start gap-3 mt-6">
                    <Checkbox id="consent" required checked={formData.consent} onCheckedChange={(c) => setFormData({ ...formData, consent: c === true })} className="mt-1" />
                    <Label htmlFor="consent" className="text-sm font-normal text-foreground/70 leading-relaxed cursor-pointer">
                        Ao assinalar, você concorda com a Política de Privacidade e autoriza a Muda Paraguai a entrar em contato para fins de diagnóstico e estruturação empresarial.
                    </Label>
                </div>

                <Button type="submit" className="w-full h-14 text-lg bg-muda-navy hover:bg-muda-navy/90 text-white mt-4" disabled={!formData.consent}>
                    Ver Meu Resultado <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </form>
        </motion.div>
    );

    const renderResults = () => {
        const score = calculateScore();
        let fitLevel = "Baixo Fit";
        let message = "Pelo seu perfil atual, o caminho mais seguro é educacional e preparatório.";
        let colorClass = "text-muda-red bg-muda-red/10 border-muda-red/20";
        let ActionButton = (
            <Button variant="outline" className="w-full h-12" asChild>
                    <a href="https://wa.me/5581992992676?text=Olá!%20Fiz%20o%20diagnóstico%20da%20Muda%20Paraguai%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer">
                        Falar com especialista
                    </a>
                </Button>
        );

        if (score >= 70 && !illicitIntent) {
            fitLevel = "Alto Fit";
            message = "Você tem alto fit para uma jornada assistida. Nossa equipe fará contato em breve.";
            colorClass = "text-muda-green bg-muda-green/10 border-muda-green/20";
            ActionButton = (
                <Button className="w-full h-12 bg-gradient-to-r from-muda-green to-muda-blue text-white hover:opacity-90 font-semibold shadow-lg" asChild>
                    <a href={`https://wa.me/5581992992676?text=Olá!%20Fiz%20o%20diagnóstico%20e%20obtive%20score%20${score}%20(Alto%20Fit).%20Gostaria%20de%20agendar%20uma%20reunião.`} target="_blank" rel="noopener noreferrer">
                        Agendar Reunião Completa (45 min)
                    </a>
                </Button>
            );
        } else if (score >= 40 && !illicitIntent) {
            fitLevel = "Médio Fit";
            message = "Você tem fit parcial. Recomendamos uma triagem curta para validar o cenário ideal.";
            colorClass = "text-muda-yellow bg-muda-yellow/10 border-muda-yellow/20";
            ActionButton = (
                <Button className="w-full h-12 bg-muda-blue text-white hover:opacity-90 font-semibold shadow-lg" asChild>
                    <a href={`https://wa.me/5581992992676?text=Olá!%20Fiz%20o%20diagnóstico%20e%20obtive%20score%20${score}%20(Médio%20Fit).%20Gostaria%20de%20uma%20triagem.`} target="_blank" rel="noopener noreferrer">
                        Agendar Triagem (20 min)
                    </a>
                </Button>
            );
        }

        if (illicitIntent) {
            return (
                <div className="text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-muda-red/10 flex items-center justify-center mx-auto mb-4">
                        <ShieldAlert className="w-10 h-10 text-muda-red" />
                    </div>
                    <h2 className="text-3xl font-sora font-semibold text-foreground">Operação Bloqueada</h2>
                    <p className="text-lg text-foreground/70 max-w-xl mx-auto p-6 bg-card border-2 border-muda-red/20 rounded-xl">
                        A MUDA PARAGUAI adota política rígida de Compliance Antifraude.
                        Identificamos intenções incompatíveis com nossos pilares éticos e legais.
                        Não seguiremos com o diagnóstico nem aceitaremos agendamentos de reunião.
                    </p>
                    <div className="pt-8">
                        <Button variant="outline" onClick={() => window.location.href = "/"}>Voltar para o site</Button>
                    </div>
                </div>
            );
        }

        return (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-sora font-bold text-foreground mb-4">Seu Diagnóstico está Pronto</h2>
                    <p className="text-foreground/70">Baseado nas suas respostas, calculamos seu índice de aderência sistêmica.</p>
                </div>

                <Card className="p-8 border-border/50 text-center relative overflow-hidden bg-background shadow-md">
                    {/* Background Glow */}
                    <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 ${colorClass.split(' ')[0]}`} />

                    <div className="mb-6">
                        <span className="text-6xl font-sora font-black text-foreground">{score}</span>
                        <span className="text-xl text-foreground/50 font-medium">/100</span>
                    </div>

                    <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full border mb-6 ${colorClass}`}>
                        <span className="font-semibold">{fitLevel}</span>
                    </div>

                    <p className="text-foreground/80 text-lg leading-relaxed max-w-lg mx-auto mb-10">
                        {message}
                    </p>

                    <div className="space-y-4 max-w-sm mx-auto">
                        {ActionButton}

                        <Button variant="outline" className="w-full h-12 bg-card border-border/60 group" asChild>
                            <a href="https://wa.me/5581992992676?text=Olá!%20Gostaria%20de%20receber%20meu%20relatório%20executivo%20da%20Muda%20Paraguai." target="_blank" rel="noopener noreferrer">
                                <FileText className="w-4 h-4 mr-2 text-foreground/60 group-hover:text-primary transition-colors" />
                                Solicitar Relatório Executivo
                            </a>
                        </Button>
                    </div>
                </Card>
            </motion.div>
        );
    };

    return (
        <div className="w-full pb-20">
            {/* Top Bar for Quiz */}
            {step < 11 && !illicitIntent && (
                <div className="mb-10 space-y-4">
                    <Button variant="ghost" size="sm" onClick={handleBack} disabled={step === 0} className="-ml-3 text-foreground/60 hover:text-foreground">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                    </Button>
                    <div className="flex items-center justify-between text-sm font-medium text-foreground/50 mb-2">
                        <span>Passo {Math.min(step + 1, 11)} de 11</span>
                        <span>{Math.round(progress)}% Completo</span>
                    </div>
                    <div className="w-full h-2 bg-muda-navy/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-muda-green"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            )}

            {/* Internal Content */}
            <AnimatePresence mode="wait">
                {step < 10 && renderQuestion()}
                {step === 10 && renderLeadForm()}
                {step === 11 && renderResults()}
            </AnimatePresence>
        </div>
    );
}
