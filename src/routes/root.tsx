import { Outlet, Link } from 'react-router-dom';

import Header from '@/containers/header';

const Root = () => {
  return (
    <>
      <Header/>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
