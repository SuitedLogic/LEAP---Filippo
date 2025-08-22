import Typography from "@/components/UI/Typography";
import Icon from "../../../Icon";
import { ICON_PATH } from "@/constants";
import { FeatureGridContent } from "../../types";

const iconWrapperStyle = {
    'icon-scalable-solution': 'bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
    'icon-secure-platform': 'bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
    'icon-fast-performance': 'bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'
}

type FeatureCardProps = {
    id: string;
    content: FeatureGridContent
}

const FeatureCard: React.FC<FeatureCardProps> = ({ id, content }) => {
    
    return (
       <div id={id} className={`bg-white p-8 rounded-lg shadow-md text-${content.alignment}`}>
            {content.icon &&
                <div className={iconWrapperStyle[content.icon as keyof typeof iconWrapperStyle] || 'bg-gray-100 text-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'}>
                    <Icon path={`${ICON_PATH}${content.icon}`} />
                </div>
            }

            <Typography as="h3" className="text-xl font-semibold mb-2">{content.title}</Typography>
            {content.description && <Typography as={'p'} className="text-gray-600">{content.description}</Typography>}
        </div>
    );
}

export default FeatureCard;