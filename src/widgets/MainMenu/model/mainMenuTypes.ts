import { IndexRouteObject, NonIndexRouteObject } from "react-router";

export interface MainMenuProps {
  className?: string;
}

export interface RouteMeta {
  id?: string;
  isInMenu?: boolean;
  title?: string;
  breadcrumb?: string;
}

export type AppIndexRoute = IndexRouteObject & {
  meta?: RouteMeta;
};

export type AppNonIndexRoute = Omit<
  NonIndexRouteObject,
  'children'
> & {
  meta?: RouteMeta;
  children?: AppRoute[];
};

export type AppRoute = AppIndexRoute | AppNonIndexRoute;


// export type CustomRouteObject = Omit<RouteObject, 'children'> & {
//   handle?: {
//     meta?: RouteMeta;
//   };
//   meta?: RouteMeta;
//   children?: CustomRouteObject[];
// };

export interface RouteMeta {
  isInMenu?: boolean;
  title?: string;
}

// export type AppRoute = Omit<RouteObject, 'children'> & {
//   meta?: RouteMeta;
//   children?: AppRoute[];
// };