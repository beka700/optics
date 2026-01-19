import { Outlet } from 'react-router-dom';
import Prohed from './pro-hed/Prohed';
import Pro9 from './pro9/Pro9';

function Layout() {
  return (
    <>
      <Prohed />
      <Outlet />
      <Pro9 />
    </>
  );
}

export default Layout;