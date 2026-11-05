export type ContactMethod = 'email' | 'phone' | 'address'

export type ContactPlatform =
  | 'facebook'
  | 'twitter'
  | 'utube'
  | 'telegram'
  | 'instagram'
  | 'linkedin'

export interface ContactDetail {
  id: ContactMethod;
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface SocialLink {
  id: string;
  platform: ContactPlatform;
  icon: string;
  label: string;
  href: string;
}

export interface ContactInfoData {
  details: ContactDetail[],
  socials: SocialLink[]
}

export interface MapProps {
  title: string;
  className?: string;
}