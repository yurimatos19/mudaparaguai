import { QuizFlow } from "@/components/diagnostico/quiz-flow";

export const metadata = {
    title: "Diagnóstico Jurídico | Muda Paraguai",
    description: "Descubra seu índice de aderência para estruturar operações no Paraguai com segurança, previsibilidade e compliance.",
};

export default function DiagnosticoPage(): React.ReactElement {
    return (
        <div className="bg-muted/30">
            <div className="max-w-4xl mx-auto w-full pt-16">
                <QuizFlow />
            </div>
        </div>
    );
}
