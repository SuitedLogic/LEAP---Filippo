import ContactsForm from "@/components/cms/ContactsForm";
import FeatureGrid from "@/components/cms/FeatureGrid";
import Footer from "@/components/cms/Footer";
import HeroBanner from "@/components/cms/HeroBanner";
import { CMSProvider } from "@/contexts/CmsContext";
import { GetServerSideProps } from "next";

export interface CMSSection<T = any> {
  id: string;
  type: string;
  attributes: T;
}

export type CMSData = CMSSection[];

export type GetSectionByType<T extends string> = CMSSection & { type: T };

export type SectionAttributes<T extends CMSSection> = T['attributes'];

interface LandingProps {
  cmsData: CMSSection[];
}

const Landing: React.FC<LandingProps> = ({cmsData}) => {
  
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

  //read data from API/mock file
  const { cmsData } = await import('@/data/cms.data')

  return {
    props: {
      cmsData
    }
  }
}