import Link from "@/components/UI/Link";
import Typography from "@/components/UI/Typography";
import { ICON_PATH } from "@/constants";
import { useCMS } from "@/contexts/CmsContext";
import Icon from "../Icon";
import { FooterSection } from "./types";

const Footer: React.FC = () => {
    const { getSectionById } = useCMS();
    const footerData = getSectionById('footer-section') as FooterSection;

    if(!footerData || !footerData.attributes) return null;

    const getSocialLinks = () => {
        return footerData.attributes.content.socialLinks.map((link: { platform: string, url: string, icon: string }) => {

          return (
                <Link
                    key={link.platform}
                    href={link.url}
                    className="text-gray-400 hover:text-white transition duration-300"
                    >
                    <span className="sr-only">{link.platform}</span>
                    <Icon 
                        path={`${ICON_PATH}${link.icon}`} 
                        aria-hidden="true"
                        className="h-6 w-6" 
                    />
                </Link>
            );
        });
    };

    return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <Typography as="p">&copy; 2025 Mayhem. All rights reserved.</Typography>
            <div className="mt-4 flex justify-center space-x-4">
              {getSocialLinks()}
            </div>
          </div>
      </footer>
    )
};

export default Footer;