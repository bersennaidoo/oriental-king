import React, { FC } from "react"
import { Outlet } from 'react-router-dom';

import MainNavigation from './components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
