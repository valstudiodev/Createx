export type SocialPlatform =
  | 'facebook'
  | 'behance'
  | 'twitter'
  | 'linkedin'

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url?: string;
  iconClass: `--icon-${SocialPlatform}`
}

export const socialPlatforms: SocialPlatform[] = [
  'facebook',
  'behance',
  'twitter',
  'linkedin',
]

export const socialMediaConfig: Record<SocialPlatform, SocialLink> = {
  facebook: {
    platform: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/',
    iconClass: '--icon-facebook',
  },
  behance: {
    platform: 'behance',
    label: 'Behance',
    url: 'https://www.behance.net/',
    iconClass: '--icon-behance',
  },
  twitter: {
    platform: 'twitter',
    label: 'Twitter',
    url: 'https://twitter.com/',
    iconClass: '--icon-twitter',
  },
  linkedin: {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    iconClass: '--icon-linkedin',
  },
};