import { useCMS } from "@/contexts/CmsContext";
import FeatureCard from "./components/FeatureCard";
import { getGridColsClass } from "./helper";
import { FeatureGridSection } from "./types";


const FeatureGrid: React.FC = () => {
    const { getSectionById } = useCMS();
    const featureData = getSectionById('feature-grid') as FeatureGridSection;
    if(!featureData || !featureData.attributes) return null;

    const featureCards = featureData.attributes.items.map((feature) => (
        <FeatureCard key={feature.id} id={feature.id} content={feature.content} />
    ));

    return (
        <section id="feature-grid" className="py-16 px-4 md:px-10 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>

                <div className={`grid grid-cols-1 ${getGridColsClass(featureData.attributes.layout.columns)}`}
                    style={{ 
                        gap: featureData.attributes.layout.gap, 
                        padding: featureData.attributes.layout.padding 
                    }}
                    >
                    {featureCards}
                </div>
            </div>
        </section>
    )
};

export default FeatureGrid;
