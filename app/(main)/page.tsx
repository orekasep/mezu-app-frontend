'use client';
import {
  HeroSection,
  FeatureMenuSection,
  FeatureOrderSection,
  ClientSection,
  FormSection,
  ArticleSection,
} from 'components';

export default function Home() {
  return (
    <div>
      <main className=''>
        <HeroSection />
        <FeatureMenuSection />
        <FeatureOrderSection />
        <ClientSection />
        <FormSection />
        <ArticleSection />
      </main>
    </div>
  );
}
