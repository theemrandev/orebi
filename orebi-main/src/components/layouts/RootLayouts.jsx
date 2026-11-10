import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import CartDrawer from '../common/CartDrawer';
import QuickViewModal from '../common/QuickViewModal';
import Toast from '../common/Toast';

const RootLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <QuickViewModal />
      <Toast />
    </div>
  );
};

export default RootLayouts;
