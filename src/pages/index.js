import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Homepage/Hero";
import Services from "../components/Homepage/Services";
import AnimationRevealPage from "../helpers/AnimateRevealPage";
import IndividualFeatures from "../components/Homepage/Individuals";
import Business from "../components/Homepage/Business";
import Features from "../components/Homepage/Features";
import Download from "../components/Homepage/DownloadApp";
import Partners from "../components/Homepage/Partners";

const IndexPage = () => {
  return (
    <AnimationRevealPage>
      <Layout>
        <Hero />
        <Services />
        <IndividualFeatures />
        <Business />
        <Features />
        <Download />
        <Partners />
      </Layout>
    </AnimationRevealPage>
  );
};

export default IndexPage;
