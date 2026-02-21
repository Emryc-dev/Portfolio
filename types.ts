export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  imageUrl: string;
  galleryUrls?: string[];
  liveUrl: string;
  githubUrl?: string;
  category: 'FullStack' | 'Frontend' | 'Backend' | 'Others';
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}
