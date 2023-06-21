// Shared layout

import { Outlet } from '@remix-run/react';

export default function ExpensesLayout() {
  return (
    <main>
      <p>Shared layout</p>
      <Outlet />
    </main>
  );
}
