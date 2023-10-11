import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import CopyRight from "./components/CopyRight";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div className={styles.sticky}>
        <Navbar />
      </div>
      <Landing />
      <About />
      <Service />
      <Gallery />
      <Testimonials />
      {/* <Brands /> */}
      <Contact />
      <Footer />
      <CopyRight />
    </main>
  );
}
