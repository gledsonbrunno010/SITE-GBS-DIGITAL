import { LucideIcon } from 'lucide-react';

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image?: string;
}