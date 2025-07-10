import React from 'react'
import HeroSection from './composants/HeroSection.jsx';
import FeaturesSection from './composants/FeaturesSection.jsx';
import Categories from './composants/Categories.jsx';
import TopPicks from './composants/TopPicks.jsx';
import MenuCards from './composants/MenuCards.jsx';
import PromoBanner from './composants/PromoBanner.jsx';
import Testimonials from './composants/Testimonials.jsx';
import FAQSection from './composants/FAQSection.jsx';
import TeamSection from './composants/TeamSection.jsx';
import PartnersSection from './composants/PartnersSection.jsx';
import ContactBanner from './composants/ContactBanner.jsx';   

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Categories />
      <TopPicks />
      <MenuCards />
      <PromoBanner />
      <Testimonials />
      <FAQSection />
      <TeamSection />
      <PartnersSection />
      <ContactBanner />
    </>
  );
}
