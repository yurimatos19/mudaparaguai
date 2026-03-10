import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Configuração do Nodemailer com SMTP do Gmail
        // Para usar o Gmail, é necessário usar uma "Senha de Aplicativo" (App Password)
        // Crie uma em: My Account -> Security -> App Passwords
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'yuribarbosamatos@gmail.com', // E-mail que envia
                pass: process.env.EMAIL_PASS // App Password do Gmail
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'yuribarbosamatos@gmail.com',
            to: 'yuribarbosamatos@gmail.com', // Cópia do diagnóstico será enviada para este e-mail
            subject: `🚨 Novo lead no Diagnóstico - Muda Paraguai (${data.name})`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #0b1d3d;">Novo Diagnóstico Completo!</h2>
          
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>E-mail corporativo:</strong> ${data.email}</p>
            <p><strong>WhatsApp:</strong> ${data.phone}</p>
            <p><strong>Consentimento marcado:</strong> ${data.consent ? 'Sim' : 'Não'}</p>
          </div>
          
          <h3 style="color: #0d9488;">Resultado do Quiz</h3>
          <div style="background-color: #f0fdf4; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
            <p><strong>Score:</strong> ${data.score}/100</p>
            <p><strong>Fit:</strong> ${data.fitLevel}</p>
            <p><strong>Bloqueado (Compliance):</strong> ${data.illicitIntent ? 'Sim (Intenção ilícita identificada)' : 'Não'}</p>
          </div>

          <h3 style="color: #64748b; font-size: 16px; margin-bottom: 12px;">Ponderação das Respostas (0-10):</h3>
          <ul style="background-color: #f1f5f9; padding: 16px 16px 16px 32px; border-radius: 6px;">
            ${Object.entries(data.answers || {}).map(([key, value]) => `<li>Questão ${key}: <strong>${value} pts</strong></li>`).join('')}
          </ul>
        </div>
      `
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'E-mail enviado com sucesso' }, { status: 200 });

    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return NextResponse.json(
            { message: 'Falha ao enviar e-mail', error: String(error) },
            { status: 500 }
        );
    }
}
