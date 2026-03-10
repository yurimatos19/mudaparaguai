export const metadata = {
    title: "Termos de Uso | Muda Paraguai",
    description: "Condições e regras de utilização dos nossos serviços e plataforma.",
};

export default function TermosPage(): React.ReactElement {
    return (
        <div className="bg-background pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl font-sora font-semibold text-foreground mb-8">
                    Termos de Uso
                </h1>

                <div className="space-y-6 text-foreground/80 leading-relaxed font-inter">
                    <p>
                        Bem-vindo à <strong>Muda Paraguai</strong>. Ao acessar nosso site e utilizar nossos serviços de Diagnóstico e Consultoria, você concorda expressamente com estes Termos de Uso.
                    </p>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">1. Natureza dos Serviços</h2>
                    <p>
                        A Muda Paraguai presta serviços de consultoria e assessoria para estruturação de negócios de brasileiros no Paraguai, operando exclusivamente dentro da legalidade (vide Política Anti-ilícitos). Nossos diagnósticos gerados pelo site são <strong>cenários indicativos</strong> e não constituem garantias ou promessas absolutas de redução tributária ou isenção de riscos operacionais.
                    </p>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">2. Propriedade Intelectual</h2>
                    <p>
                        Todo o conteúdo presente no site (textos, gráficos, relatórios PDF gerados, logotipos, etc.) é de propriedade exclusiva da Muda Paraguai. É estritamente proibida a reprodução, distribuição ou qualquer uso comercial não autorizado sem consentimento formal prévio.
                    </p>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">3. Responsabilidades do Usuário</h2>
                    <p>
                        Você se compromete a:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Fornecer informações exatas e verdadeiras durante o Diagnóstico e cadastro.</li>
                        <li>Não utilizar os serviços ou a plataforma para finalidades ilícitas, fraudulentas ou para estruturar evasão fiscal.</li>
                        <li>Ler e aceitar nossa Política de Privacidade (LGPD) e Política Anti-ilícitos.</li>
                    </ul>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">4. Isenção de Garantias ("Disclaimer")</h2>
                    <p>
                        Os cenários e resultados apresentados visam orientar a tomada de decisão. Toda estruturação dependerá da análise concreta de viabilidade jurídica e contábil, após aprovação mútua em reunião executiva. A Muda Paraguai não se responsabiliza por autuações ou imprevistos em operações cujo objeto real tenha sido ocultado pelo cliente.
                    </p>

                    <div className="mt-12 pt-8 border-t border-border/50">
                        <p className="text-sm text-foreground/60">
                            Para dúvidas legais, acione: <strong>legal@mudaparaguai.com</strong>.
                        </p>
                        <p className="text-sm text-foreground/60 mt-2">
                            Última atualização: 01 de Fevereiro de 2026.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
