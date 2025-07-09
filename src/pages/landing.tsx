import ContactsForm from "@/components/cms/ContactsForm";
import { ContactsFormSection } from "@/components/cms/ContactsForm/types";
import FeatureGrid from "@/components/cms/FeatureGrid";
import { FeatureGridSection } from "@/components/cms/FeatureGrid/types";
import Footer from "@/components/cms/Footer";
import { FooterSection } from "@/components/cms/Footer/types";
import HeroBanner from "@/components/cms/HeroBanner";
import { HeroBannerSection } from "@/components/cms/HeroBanner/types";
import { CMSProvider } from "@/contexts/CmsContext";
import { GetServerSideProps } from "next";

export type CMSSection = 
  | HeroBannerSection 
  | FeatureGridSection 
  | ContactsFormSection 
  | FooterSection;

export type CMSData = CMSSection[];
interface LandingProps {
  cmsData: CMSSection[];
}

const Landing: React.FC<LandingProps> = ({ cmsData }) => {
  return (
    <CMSProvider data={cmsData}>
      <HeroBanner />
      <FeatureGrid />
      <ContactsForm />
      <Footer />
    </CMSProvider>
  );
};

export default Landing;

export const getServerSideProps: GetServerSideProps = async () => {
  // read data from API/mock file
  const { cmsData } = await import('@/data/cms.data');

  return {
    props: {
      cmsData
    }
  };
};
