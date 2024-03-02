import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Retenmax - Retenção máxima de clientes",
    description: "Retenção máxima de clientes",
    keywords: "consultoria empresarial, software empresarial, campo grande ms, retenmax, retenção de clientes, retenção de clientes campo grande ms, retenção de clientes ms, retenção de clientes mato grosso do sul, retenção de clientes brasil, retenção de clientes sul, retenção de clientes centro-oeste, retenção de clientes norte, retenção de clientes nordeste, retenção de clientes sudeste, retenção de clientes suldeste, retenção de clientes mato grosso do sul, retenção de clientes mato grosso, retenção de clientes goiás, retenção de clientes são paulo, retenção de clientes rio de janeiro, retenção de clientes minas gerais, retenção de clientes espírito santo, retenção de clientes paraná, retenção de clientes santa catarina, retenção de clientes rio grande do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul ",
    authors: { name: "Arthur Maximiliano" },
    viewport: "width=device-width, initial-scale=1.0",
    robots: "follow, index"
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
