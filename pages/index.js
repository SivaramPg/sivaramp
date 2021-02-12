import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sivaram's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
