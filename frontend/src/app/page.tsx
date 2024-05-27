import PageLayout from '@/components/layouts/page-layout/PageLayout';
import Category from '@/components/sections/category/Category';
import Hero from '@/components/sections/hero/Hero';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Category />
    </PageLayout>
  );
}
