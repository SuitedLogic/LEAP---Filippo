export interface FeatureGridContent {
    title: string;
    description: string;
    alignment: 'left' | 'center' | 'right';
    icon: string;
}

export interface FeatureGridAttributes {
  layout: {
    columns: number;
    gap: string;
    padding: string;
  }
  items: Array<{
    id: string;
    content: FeatureGridContent
  }>
}

export interface FeatureGridSection {
  id: string;
  type: 'feature_grid';
  attributes: FeatureGridAttributes;
}