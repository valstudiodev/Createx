import { ContactInfoData } from "../model/contactInfo.types";

export const contactInfoData: ContactInfoData = {
  details: [
    {
      id: 'email',
      icon: '--icon-message-circle',
      label: 'labels.talkToUs',
      value: 'hello@createx.com',
      href: 'mailto:hello@createx.com'
    },
    {
      id: 'phone',
      icon: '--icon-smarthone',
      label: 'labels.callUs',
      value: '(405) 555-0128',
      href: 'tel:+14055550128'
    },
    {
      id: 'address',
      icon: '--icon-location-white',
      label: 'labels.address',
      value: '2464 Royal Ln. Mesa, New Jersey 45463, USA',
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        '2464 Royal Ln. Mesa, New Jersey 45463, USA',
      )}`,
    }
  ],
  socials: [
    {
      id: 'facebook',
      platform: 'facebook',
      icon: '--icon-facebook',
      href: '/',
      label: 'facebook'
    },
    {
      id: 'twitter',
      platform: 'twitter',
      icon: '--icon-twitter',
      href: '/',
      label: 'twitter'
    },
    {
      id: 'utube',
      platform: 'utube',
      icon: '--icon-youtube',
      href: '/',
      label: 'utube'
    },
    {
      id: 'telegram',
      platform: 'telegram',
      icon: '--icon-telegram',
      href: '/',
      label: 'telegram'
    },
    {
      id: 'instagram',
      platform: 'instagram',
      icon: '--icon-instagram',
      href: '',
      label: 'instagram'
    },
    {
      id: 'linkedin',
      platform: 'linkedin',
      icon: '--icon-linkedin',
      href: '/',
      label: 'linkedin'
    }
  ]
}