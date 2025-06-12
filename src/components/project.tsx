export interface Project {
  title: string;
  description: string;
  tech: string[];
  rating: number;
  isModal?: boolean;
  fullDescription?: string;
  features?: string[];
  technologies?: string[];
  imageUrl: string;
  projectUrl?: string;
}