import { Outlet } from 'react-router-dom';
import { AppNav } from './nav';
export function Layout() {
  return (
    <>
      <AppNav />
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
