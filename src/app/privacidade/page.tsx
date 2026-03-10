export const metadata = {
    title: "Política de Privacidade (LGPD) | Muda Paraguai",
    description: "Entenda como tratamos e protegemos seus dados pessoais de acordo com a LGPD.",
};

export default function PrivacidadePage(): React.ReactElement {
    return (
        <div className="bg-background pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl font-sora font-semibold text-foreground mb-8">
                    Política de Privacidade
                </h1>

                <div className="space-y-6 text-foreground/80 leading-relaxed font-inter">
                    <p>
                        A <strong>Muda Paraguai</strong>, doravante referida como "nós", "nosso" ou "empresa", está comprometida em proteger a privacidade e os dados pessoais de nossos clientes, parceiros e usuários do site, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) do Brasil e demais legislações aplicáveis.
                    </p>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">1. Coleta e Uso de Dados</h2>
                    <p>
                        Coletamos informações pessoais que você nos fornece voluntariamente ao preencher nosso Diagnóstico, formulários de contato ou ao contratar nossos serviços. Isso inclui, mas não se limita a: Nome, E-mail, Telefone (WhatsApp), e informações sobre seu perfil empresarial.
                    </p>
                    <p>
                        Tratamos seus dados exclusivamente para:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Fornecer o resultado do Diagnóstico de Fit.</li>
                        <li>Entrar em contato para agendamento de reuniões e propostas comerciais.</li>
                        <li>Prestar os serviços de estruturação societária contratados.</li>
                        <li>Cumprir obrigações legais e regulatórias.</li>
                    </ul>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">2. Compartilhamento de Dados</h2>
                    <p>
                        Não vendemos nem comercializamos seus dados pessoais. Seus dados poderão ser compartilhados estritamente com nossos parceiros legais e contábeis no Paraguai e no Brasil apenas quando essencial para a execução do serviço contratado por você.
                    </p>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">3. Segurança e Retenção</h2>
                    <p>
                        Adotamos medidas técnicas e administrativas (como WAF, firewalls e criptografia) para proteger seus dados contra acessos não autorizados. Reteremos suas informações apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou exigências legais.
                    </p>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">4. Seus Direitos (LGPD)</h2>
                    <p>
                        Você tem o direito de solicitar:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Acesso, correção ou atualização de seus dados.</li>
                        <li>A portabilidade de seus dados a outro prestador de serviços.</li>
                        <li>A exclusão/anonimização dos seus dados, ressalvadas as obrigações de guarda legal.</li>
                        <li>A revogação do consentimento a qualquer momento.</li>
                    </ul>

                    <div className="mt-12 pt-8 border-t border-border/50">
                        <p className="text-sm text-foreground/60">
                            Para exercer seus direitos ou tirar dúvidas, entre em contato através do e-mail: <strong>contato@mudaparaguai.com</strong>.
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
