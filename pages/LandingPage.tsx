import { Header } from "../components/Header";
import { SectionOne } from "../components/landingPageSections/SectionOne";
import { SectionTwo } from "../components/landingPageSections/SectionTwo";
import { Section3 } from "../components/landingPageSections/Section3";
import { Layout } from "../components/Layout";
import { Section4 } from "../components/landingPageSections/Section4";
import { Section5 } from "../components/landingPageSections/Section5";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  return (
    <>
      <div>
        <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/50">
          <Header />
        </div>
        <div>
          <Layout>
            <SectionOne />
          </Layout>
          <SectionTwo />
          <Layout>
            <Section3 />
            <Section4 />
          </Layout>
          <Section5 />
          <Footer />
        </div>
      </div>
    </>
  );
};
