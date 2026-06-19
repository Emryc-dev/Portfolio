export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  spanClass: string; // for column spans e.g., "md:col-span-7", "md:col-span-5"
  aspectClass: string; // aspect-square, aspect-video etc.
  link: string;
  linkLabel?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  year: string;
  description?: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
  summary: string;
}

export interface Exploration {
  id: string;
  title: string;
  image: string;
  rotation: string; // rotation class like "rotate-3", "rotate-[-2deg]"
  details: string;
}
