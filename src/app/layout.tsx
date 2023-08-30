import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Hind } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600"],
    display: "swap",
    variable: "--font-montserrat",
});
const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "600"],
    display: "swap",
    variable: "--font-hind",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${hind.variable}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
