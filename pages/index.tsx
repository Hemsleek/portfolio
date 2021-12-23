import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mail from "../components/Mail";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Section from "../components/Section";
import TechTools from "../components/TechTools";
import {
  aboutData,
  footerData,
  HeroData,
  mailData,
  navData,
  projectsData,
  techTools,
} from "../data";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-white dark:bg-deep-blue`}>
      <NavBar {...navData} />
      <main className={`${styles.main} bg-white dark:bg-transparent`}>
        <Hero {...HeroData} />
        <Projects projectsData={projectsData} />
        <About {...aboutData} />
        <TechTools {...techTools} />
        <Mail {...mailData} />
      </main>
      <Footer {...footerData} />
    </div>
  );
};

export default Home;
