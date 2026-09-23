export interface Skill {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface TimelineItem {
  label: string;
  title: string;
  description: string;
}

export interface Activity {
  number: string;
  icon: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  heroEmail: string;
  phone: string;
  location: string;
}
