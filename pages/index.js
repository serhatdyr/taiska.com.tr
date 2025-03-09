import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import AboutUs from "@/components/AboutUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import VerticalSlider from "@/components/VerticalSlider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Taiska</title>
        <meta name="keywords" content="taiska" />
      </Head>
      <VerticalSlider />
      <AboutUs />
      <Portfolio />
      <Contact />
    </>
  );
}
