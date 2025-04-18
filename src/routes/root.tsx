import { Outlet } from 'react-router-dom';

import Header from '@/containers/header';
import HeroSection from '@/containers/hero-section';

const Root = () => {
  return (
    <>
      <Header/>
      <HeroSection />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
