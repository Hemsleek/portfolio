import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import { navData } from "../data";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar {...navData} />
      <main className={styles.main}>
        <Section>
          <div></div>
        </Section>
      </main>
    </div>
  );
};

export default Home;
