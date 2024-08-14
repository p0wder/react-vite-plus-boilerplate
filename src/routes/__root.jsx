import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "@/components/ui/toaster"
import NavBar from "@/components/nav-bar";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  ),
});
