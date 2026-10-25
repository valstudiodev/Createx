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