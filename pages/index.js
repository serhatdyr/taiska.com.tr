import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutUs from "@/components/AboutUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Slider from "@/components/VerticalSlider";

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
    

      <Navbar />
      <Slider />
      <AboutUs />
      <Portfolio />
      <Contact />
    
    </>
  );
}
