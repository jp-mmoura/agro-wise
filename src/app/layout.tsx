import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "Agrowise - Sistema de Gestão Agrícola",
  description: "Gerencie seus produtos agrícolas de forma eficiente com o Agrowise",
  keywords: "agricultura, gestão agrícola, produtos agrícolas, agrowise",
  authors: [{ name: "Agrowise Team" }],
  openGraph: {
    title: "Agrowise - Sistema de Gestão Agrícola",
    description: "Gerencie seus produtos agrícolas de forma eficiente com o Agrowise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {children}
          </AuthProvider>
          <Toaster position="top-right" />
        </QueryClientProvider>
      </body>
    </html>
  );
}