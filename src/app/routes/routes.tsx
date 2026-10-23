import { Suspense } from "react";
import { LazyAboutPage, LazyBlogPage, LazyContactsPage, LazyCourseDetailsPage, LazyCoursesPage, LazyEventDetailsPage, LazyEventsPage, LazyHomePage, LazyPage404, LazySinglePostPage } from "./lazy-pages";
import { createBrowserRouter } from "react-router";
import MainLayout from "@/widgets/MainLayout/ui/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ui/ErrorPage";
import { routeMap } from "./routeMap";


export const routes = [
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id: 'home-page',
        element: (
          <Suspense>
            <LazyHomePage />
          </Suspense>
        ),
        meta: {
          isInMenu: false,
          title: 'Home',
        }
      },
      {
        path: routeMap.about.path,
        id: 'about-page',
        element: (
          <Suspense>
            <LazyAboutPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'About us'
        }
      },
      {
        path: routeMap.courses.path,
        id: 'courses-page',
        element: (
          <Suspense>
            <LazyCoursesPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'courses'
        },
      },
      {
        path: routeMap.events.path,
        id: 'events-page',
        element: (
          <Suspense>
            <LazyEventsPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'events'
        },
      },
      {
        path: routeMap.blog.path,
        id: 'blog-page',
        element: (
          <Suspense>
            <LazyBlogPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Blog'
        },
      },
      {
        path: routeMap.contacts.path,
        id: 'contacts-page',
        element: (
          <Suspense>
            <LazyContactsPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'contacts'
        }
      },
      {
        path: routeMap.singlePost.path,
        id: 'single-post',
        element: (
          <Suspense>
            <LazySinglePostPage />
          </Suspense>
        )
      },
      {
        path: routeMap.eventDetails.path,
        id: 'events-details',
        element: (
          <Suspense>
            <LazyEventDetailsPage />
          </Suspense>
        )
      },
      {
        path: routeMap.courseDetails.path,
        id: 'course-details',
        element: (
          <Suspense>
            <LazyCourseDetailsPage />
          </Suspense>
        )
      },
      {
        path: '*',
        element: (
          <Suspense>
            <LazyPage404 />
          </Suspense>
        ),
        meta: {
          id: 'page-404'
        }
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

export default router