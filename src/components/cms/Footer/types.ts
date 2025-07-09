export interface FooterAttributes {
  text:{
    copyright: string;
  },
  content: {
    socialLinks: Array<{
      icon: string;  
      platform: string;
      url: string;
    }>;
  }
}

export interface FooterSection {
  id: string;
  type: 'footer';
  attributes: FooterAttributes;
}
