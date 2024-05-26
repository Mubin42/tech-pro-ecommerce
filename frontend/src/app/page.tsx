import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Navbar />
      <Footer />
    </main>
  );
}
