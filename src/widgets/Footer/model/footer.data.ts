import { routeMap } from "@/app/routes/routeMap";
import { FooterColumnData, FooterContact } from "./footer.types";


export const footerColums: FooterColumnData[] = [
  {
    title: 'footer.siteMap.title',
    items: [
      {
        type: 'link',
        label: 'footer.siteMap.links.aboutUs',
        to: routeMap.about.path
      },
      {
        type: 'link',
        label: 'footer.siteMap.links.courses',
        to: routeMap.courses.path
      },
      {
        type: 'link',
        label: 'footer.siteMap.links.events',
        to: routeMap.events.path
      },
      {
        type: 'link',
        label: 'footer.siteMap.links.blog',
        to: routeMap.blog.path
      },
      {
        type: 'link',
        label: 'footer.siteMap.links.contacts',
        to: routeMap.contacts.path
      }
    ]
  },
  {
    title: 'footer.courses.title',
    items: [
      {
        type: 'link',
        label: 'footer.courses.links.marketing',
        to: routeMap.home.path
      },
      {
        type: 'link',
        label: 'footer.courses.links.management',
        to: routeMap.home.path
      },
      {
        type: 'link',
        label: 'footer.courses.links.hrRecruiting',
        to: routeMap.home.path
      },
      {
        type: 'link',
        label: 'footer.courses.links.design',
        to: routeMap.home.path
      },
      {
        type: 'link',
        label: 'footer.courses.links.development',
        to: routeMap.home.path
      }
    ]
  },
]

export const footerContactsData: FooterContact[] = [
  {
    type: 'contact',
    label: '(405) 555-0128',
    value: '(405) 555-0128',
    href: '/phone'
  },
  {
    type: 'contact',
    label: 'hello@createx.com',
    value: 'hello@createx.com',
    href: '/email'
  }
]