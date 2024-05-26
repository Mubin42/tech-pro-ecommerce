import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Hero from '@/components/sections/hero/Hero';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
