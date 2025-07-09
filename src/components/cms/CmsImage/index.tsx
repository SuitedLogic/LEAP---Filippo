import Image from 'next/image'

type CmsImageProps = {
    src?: string;
    alt?: string;
    overlay?: string;
};

const CmsImage: React.FC<CmsImageProps> = ({ src, alt, overlay }) => {
    if (!src && !overlay) {
        return null; 
    }

    return (
        <div className="absolute inset-0 z-0">
            {
                src && <Image
                    src={src}
                    alt={alt ?? "CMS Background Image"}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            }
            {/* here I left bg-gray-700 bg-opacity-50 as background fallback */}
            {overlay && <div className="absolute inset-0 bg-gray-700 bg-opacity-50" style={{ backgroundColor: overlay }}></div>}
        </div>
    );
};

export default CmsImage;
