import { Header } from "../components/Header";
import { SectionOne } from "../components/landingPageSections/SectionOne";
import { SectionTwo } from "../components/landingPageSections/SectionTwo";
import { Layout } from "../components/Layout";

export const LandingPage = () => {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Layout>
            <SectionOne />
            <SectionTwo />
          </Layout>
        </div>
      </div>
    </>
  );
};
