export const metadata = {
    title: "Política Anti-ilícitos | Muda Paraguai",
    description: "Nosso posicionamento firme contra estruturação para sonegação, fraude ou ocultação patrimonial.",
};

export default function AntiIlicitosPage(): React.ReactElement {
    return (
        <div className="bg-background pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="bg-card border border-muda-red/30 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-muda-red/10 rounded-full blur-[100px] pointer-events-none" />

                    <h1 className="text-3xl sm:text-4xl font-sora font-bold text-foreground mb-6 relative z-10">
                        Política Anti-ilícitos
                    </h1>

                    <div className="space-y-6 text-foreground/80 leading-relaxed relative z-10">
                        <p className="font-semibold text-lg text-foreground">
                            A MUDA PARAGUAI não atende demandas envolvendo sonegação, fraude, ocultação patrimonial ilícita, lavagem de dinheiro ou qualquer ‘atalho’ incompatível com a lei.
                        </p>

                        <p>
                            Nosso propósito é auxiliar empresários, investidores e profissionais liberais a estruturar operações legítimas no Paraguai, buscando eficiência operacional, expansão internacional e previsibilidade tributária com base na legislação vigente de ambos os países.
                        </p>

                        <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">Diretrizes de Atuação</h2>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>Exigimos transparência total do cliente sobre a origem dos recursos e a natureza da operação.</li>
                            <li>Não constituímos estruturas jurídicas com a finalidade exclusiva de blindagem patrimonial contra credores em execuções ativas.</li>
                            <li>Não atuamos com laranjas ou "testas de ferro". Os sócios devem ser os reais beneficiários e controladores da operação.</li>
                            <li>Toda remessa de capital deve respeitar as normas de fechamento de câmbio e declaração ao Banco Central do Brasil (CBE).</li>
                        </ul>

                        <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">Triagem e Compliance</h2>
                        <p>
                            Reservamo-nos o direito de recusar clientes ou encerrar a prestação de serviços, a qualquer momento, caso identifiquemos indícios de não conformidade legal ou propósitos incompatíveis com nossos pilares de governança.
                        </p>

                        <div className="mt-12 p-6 bg-muda-red/10 border border-muda-red/20 rounded-xl text-muda-red font-medium">
                            Se o seu objetivo é "sumir com o dinheiro" ou "não pagar nenhum imposto no Brasil operando irregularmente", por favor, não siga com o agendamento.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
