import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta lang="english" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="My Portfolio Website. I am a full stack web developer from India with 2+ years of experience in creating optimized, responsive, interactive, user-friendly and feature-rich websites and web applications."
        />
        <meta property="og:title" content="Sivaram's Website" />
        <meta
          property="og:description"
          content="My Portfolio Website. I am a full stack web developer from India with 2+ years of experience in creating optimized, responsive, interactive, user-friendly and feature-rich websites and web applications."
        />
        <meta
          name="image"
          property="og:image"
          content="http://sivaramp.com/avataar.png"
        />
        <meta property="og:url" content="http://sivaramp.com" />
        <meta name="author" content="Sivaram Pandariganthan" />
        <meta property="og:type" content="portfolio" />
        <title>Sivaram's Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono,wght@0,400;0,700;0,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        limit={2}
      />
    </div>
  );
}
