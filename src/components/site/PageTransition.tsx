import { Outlet, useRouterState } from "@tanstack/react-router";

export function PageTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} className="page-transition">
      <Outlet />
    </div>
  );
}
