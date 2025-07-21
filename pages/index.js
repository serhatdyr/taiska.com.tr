import Head from "next/head";
import {  Roboto } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import AboutUs from "@/components/AboutUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import VerticalSlider from "@/components/VerticalSlider";
import Collabrations from "@/components/Collabrations";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['400', '700']
});


export default function Home() {
  return (
    <>
      <Head>
        <title>Home Taiska</title>
        <meta name="keywords" content="taiska" />
      </Head>
      <MobileMenu />
      <VerticalSlider className={roboto.className} />
      <AboutUs />
      <Portfolio />
      <Collabrations />
      <Contact />
    </>
  );
}
