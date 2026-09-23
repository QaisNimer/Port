export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  level: 'BTEC LEVEL 2' | 'BTEC LEVEL 3';
  icon: string;
  cardDescription: string;
  detailDescription: string;
  technologies: string[];
  images: GalleryImage[];
  hasDetailPage: boolean;
}
