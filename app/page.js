import Image from 'next/image'
import About from './component/About';
import Banner from './component/Banner';
import Call from './component/Call';
import Footer from './component/Footer';
import Header from './component/Header';
import Industry from './component/Industry';
import Services from './component/Services';
import Team from './component/Team';
import Why from './component/Why';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Why />
      <About />

      <Industry />

      <Team />
      <Call />

      <Services />

      <Footer />
    </>
  );
}
