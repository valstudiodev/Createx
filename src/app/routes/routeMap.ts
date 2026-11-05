export interface Route<TArgs extends any[] = []> {
  path: string;
  navigate: (...args: TArgs) => string;
}

export function defineRoute<TArgs extends any[] = []>(
  path: string,
  navigate?: (...args: TArgs) => string
): Route<TArgs> {
  return {
    path,
    navigate: navigate ?? ((..._args: TArgs) => path),
  };
}

export const routeMap = {
  home: defineRoute('/'),
  about: defineRoute('/about'),
  courses: defineRoute('/courses'),
  courseDetails: defineRoute(
    '/courses/:id',
    (id: string | number) => `/courses/${id}`
  ),
  events: defineRoute('/events'),
  eventDetails: defineRoute(
    '/events/:id',
    (id: string | number) => `/events/${id}`
  ),
  blog: defineRoute('/blog'),
  singlePost: defineRoute(
    '/blog/:id',
    (id: string | number) => `/blog/${id}`
  ),
  contacts: defineRoute('/contacts'),
  // admin
  admin: defineRoute('/admin'),
  adminProducts: defineRoute('/admin/courses'),
  adminPosts: defineRoute('/admin/posts'),
  adminEvents: defineRoute('/admin/events')
} as const;