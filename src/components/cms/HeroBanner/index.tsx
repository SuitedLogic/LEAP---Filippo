import { useCMS } from "@/contexts/CmsContext";
import Button from "../../UI/Button";
import CmsImage from "../CmsImage";
import Typography from "../../UI/Typography";
import { HeroBannerSection } from "./types";

const HeroBanner: React.FC = () => {
    const { getSectionById } = useCMS()
    const heroData = getSectionById('hero-section') as HeroBannerSection;

    if(!heroData) return null;
    
    const imgData = heroData.attributes.background
    const titleData = heroData.attributes.content.title
    const subtitleData = heroData.attributes.content.subtitle


    return (
        <section
            id="hero-section"
            className="relative py-20 flex items-center justify-center"
        >
            <CmsImage
                src={imgData.img?.src}
                alt={imgData.img?.alt}
                overlay={imgData.overlay?.enabled ? imgData.overlay.color : undefined}
            />

            <div className="relative z-10 text-center px-4">
                <Typography
                    as="h1"
                    className="mb-4"
                    style={{color: titleData.style?.color, fontSize: titleData.style?.fontSize, fontWeight: titleData.style?.fontWeight}}
                >
                   {titleData.text}
                </Typography>
                <Typography
                    as="p"
                    style={{color: subtitleData.style?.color, fontSize: subtitleData.style?.fontSize, fontWeight: subtitleData.style?.fontWeight}}
                >
                    {subtitleData.text}
                </Typography>
                <Button type="button" onClick={() => console.log('Button clicked!')} className={`mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 cursor-pointer`}>
                    Get Started
                </Button>
            </div>
        </section>
    );
};

export default HeroBanner;