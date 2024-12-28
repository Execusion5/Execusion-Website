import Footer from '@/components/landing/Footer';
import Navbar from '@/components/layout/Nav/Navbar';
import ContactUs from '@/pages/landing/ContactUs';
import Executors from '@/pages/landing/Executors';
import FAQ from '@/pages/landing/FAQ';
import Hero from '@/pages/landing/Hero';
import Portfolio from '@/pages/landing/Portfolio';
import Services from '@/pages/landing/Services';
import { Testimonials } from '@/pages/landing/Testimonials';

export default function page() {
  return (
    <>
      <Navbar />
      <div className='bg-[url("@/images/grid.svg")]'>
        <div className='container'>
          <Hero />
          <Executors />
          <Services />
          <Portfolio />
          <Testimonials />
          <ContactUs />
          <FAQ />
        </div>
      </div>
      <Footer />
    </>
  );
}
