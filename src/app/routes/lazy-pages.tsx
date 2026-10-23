import { lazy } from "react";

export const LazyHomePage = lazy(() => import('@/pages/Home-page/ui/HomePage'))
export const LazyAboutPage = lazy(() => import('@/pages/About-page/ui/AboutPage'));
export const LazyContactsPage = lazy(() => import('@/pages/Contacts-page/ui/ContactsPage'));
export const LazyCoursesPage = lazy(() => import('@/pages/Courses-page/ui/CoursesPage'));
export const LazyEventsPage = lazy(() => import('@/pages/Events-page/ui/EventsPage'));
export const LazySinglePostPage = lazy(() => import('@/pages/SinglePostPage/ui/SinglePostPage'));
export const LazyBlogPage = lazy(() => import('@/pages/Blog-page/ui/BlogPage'));
export const LazyCourseDetailsPage = lazy(() => import('@/pages/CourseDetailsPage/ui/CourseDetailsPage'));
export const LazyEventDetailsPage = lazy(() => import('@/pages/EventDetailsPage/ui/EventsDetailsPage'));
export const LazyPage404 = lazy(() => import('@/pages/Page404/ui/Page404'))
export const LazyErrorPage = lazy(() => import('@/pages/ErrorPage/ui/ErrorPage'))