
interface TextContent {
    text: string;
    style: {
        fontSize: string;
        color: string;
        fontWeight?: string;
    }
}

export interface HeroBannerAttributes {
  background: {
    type: string;
    img?: {
        src: string;
        alt: string;
    },
    overlay?: {
        color: string;
        enabled: boolean;
    }
  },
  content: {
    title: TextContent;
    subtitle: TextContent;
  }
}

export interface HeroBannerSection {
  id: string;
  type: 'hero_banner';
  attributes: HeroBannerAttributes;
}