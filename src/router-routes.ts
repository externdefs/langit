// This file is automatically generated, do not edit.

/* eslint-disable */

import { lazy } from "solid-js";
import { type RouteDefinition } from "@solidjs/router";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./routes/_index.tsx")),
  },
  {
    path: "u/:uid",
    component: lazy(() => import("./routes/u.$uid.tsx")),
    children: [
      {
        path: "profile/:handle/post/:status",
        component: lazy(() => import("./routes/u.$uid.profile.$handle.post.$status.tsx")),
      },
      {
        path: "profile/:handle",
        component: lazy(() => import("./routes/u.$uid.profile.$handle._index.tsx")),
      },
      {
        path: "notifications",
        component: lazy(() => import("./routes/u.$uid.notifications.tsx")),
      },
      {
        path: "/",
        component: lazy(() => import("./routes/u.$uid._index.tsx")),
      },
      {
        path: "search",
        component: lazy(() => import("./routes/u.$uid.search.tsx")),
      },
      {
        path: "you",
        component: lazy(() => import("./routes/u.$uid.you.tsx")),
      },
    ],
  },
  {
    path: "/",
    component: lazy(() => import("./routes/_auth.tsx")),
    children: [
      {
        path: "register",
        component: lazy(() => import("./routes/_auth.register.tsx")),
      },
      {
        path: "login",
        component: lazy(() => import("./routes/_auth.login.tsx")),
      },
    ],
  },
];

export default routes;
