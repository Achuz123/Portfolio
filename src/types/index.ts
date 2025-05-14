export interface NavLink {
  href: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}