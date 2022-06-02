import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "./LandingPage";

const Home: NextPage = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default Home;
