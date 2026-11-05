import { routeMap } from "@/app/routes/routeMap";

interface LinksNavigation {
  title: string;
  id: string;
  path?: string;
}

export const linksNavigations: LinksNavigation[] = [
  {
    title: 'courses',
    id: 'admin-products',
    path: routeMap.adminProducts.path,
  },
  {
    title: 'posts',
    id: 'admin-posts',
    path: routeMap.adminPosts.path,
  },
  {
    title: 'events',
    id: 'admin-events',
    path: routeMap.adminEvents.path,
  },
]