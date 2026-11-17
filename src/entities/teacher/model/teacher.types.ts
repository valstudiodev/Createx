import { SocialLink } from "@/shared/constants/socialLinks/socialLinks.types";

export interface Teacher {
  id: string;
  name: string;
  image: string;
  position?: string;
  specialty?: string;
  rating?: number;
  coursesCount?: number;
  studentsCount?: number;
  description?: string;
  socialMedia?: SocialLink[];
}