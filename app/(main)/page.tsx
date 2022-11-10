import {
  HeroSection,
  FeatureMenuSection,
  FeatureOrderSection,
  ClientSection,
} from "components";

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection />
        <FeatureMenuSection />
        <FeatureOrderSection />
        <ClientSection />
      </main>
    </div>
  );
}
