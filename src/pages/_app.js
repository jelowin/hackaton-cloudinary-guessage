import { Inter, Montserrat } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    // bg-main-bg-image bg-[length:150px_150px] bg-opacity-50 animate-scroll
    <main
      className={`lg:container-xl h-screen bg-slate-50 p-6 lg:p-8 ${inter.variable} ${montserrat.variable} font-inter`}
    >
      <Component {...pageProps} />
    </main>
  );
}
