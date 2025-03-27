
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ForWho } from '@/components/ForWho';
import { Benefits } from '@/components/Benefits';
import { Workshop } from '@/components/Workshop';
import { AISystem } from '@/components/AISystem';
import { Results } from '@/components/Results';
import { WhyWorks } from '@/components/WhyWorks';
import { Format } from '@/components/Format';
import { Bonuses } from '@/components/Bonuses';
import { FAQ } from '@/components/FAQ';
import { Pricing } from '@/components/Pricing';
import { Guarantee } from '@/components/Guarantee';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ForWho />
      <Benefits />
      <Workshop />
      <AISystem />
      <Results />
      <WhyWorks />
      <Format />
      <Bonuses />
      <FAQ />
      <Pricing />
      <Guarantee />
    </Layout>
  );
};

export default Index;
