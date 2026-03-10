export const metadata = {
    title: "Política de Cookies | Muda Paraguai",
    description: "Como utilizamos cookies para melhorar sua experiência em nossa plataforma.",
};

export default function CookiesPage(): React.ReactElement {
    return (
        <div className="bg-background pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl font-sora font-semibold text-foreground mb-8">
                    Política de Cookies
                </h1>

                <div className="space-y-6 text-foreground/80 leading-relaxed font-inter">
                    <p>
                        A <strong>Muda Paraguai</strong> valoriza sua privacidade e transparência. Esta política explica como usamos cookies e tecnologias similares em nosso site.
                    </p>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">O que são Cookies?</h2>
                    <p>
                        Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou celular) quando você visita o nosso site. Eles nos ajudam a lembrar de suas preferências e a entender como você navega pelas nossas páginas.
                    </p>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">Que tipos de Cookies utilizamos?</h2>
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Essenciais:</strong> Necessários para o funcionamento básico do site, como navegação no Quiz de Diagnóstico e login no Portal do Cliente. Não podem ser desativados.</li>
                        <li><strong>Desempenho (Analytics):</strong> Utilizados para coletar dados anônimos (como os do GA4 e PostHog) sobre como os usuários interagem com o site, identificando páginas mais acessadas e eventuais erros, ajudando a melhorar a experiência geral.</li>
                        <li><strong>Funcionais:</strong> Permitem que o site lembre de escolhas que você faz, como sua região, proporcionando recursos aprimorados e mais personalizados.</li>
                    </ul>

                    <h2 className="text-xl font-sora font-semibold text-foreground mt-8 mb-4">Gerenciamento de Cookies</h2>
                    <p>
                        Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado. Contudo, sem os cookies essenciais, algumas partes ou fluxos do nosso site (como o simulador e diagnóstico) podem não funcionar corretamente.
                    </p>

                    <div className="mt-12 pt-8 border-t border-border/50">
                        <p className="text-sm text-foreground/60">
                            Para dúvidas adicionais, entre em contato em: <strong>privacidade@mudaparaguai.com</strong>.
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
