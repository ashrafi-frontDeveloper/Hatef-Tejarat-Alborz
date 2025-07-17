import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Header/Navbar/Navbar';
import MainHeader from './components/Header/MainHeader/MainHeader';
import ScrollToTop from './components/ScrollToTop';

// کامپوننت‌هایی که بلافاصله استفاده می‌شن (کوچک یا سبک)، هنوز عادی ایمپورت می‌شن:
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// 🔄 Lazy load برای صفحات سنگین یا route‌های خاص
const Validations = lazy(() => import('./components/Validations/Validations'));
const Verifications = lazy(() => import('./components/Verifications/Verifications'));
const Contact = lazy(() => import('./components/Cantact/Contact'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const Order = lazy(() => import('./components/Verifications/Order'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard/AdminDashboard'));

const AllProductsSteel = lazy(() => import('./components/AllProducts/SteelProducts/AllProductsSteel'));
const AllProductsWire = lazy(() => import('./components/AllProducts/WireProducts/WireProducts'));
const DetailsProducts = lazy(() => import('./components/DetailsProducts/DetailsProducts'));
const CategoryDetails = lazy(() => import('./components/DetailsProducts/CategoryDetails'));

import FullPageLoader from './components/FullPageLoader';

export default function App() {
  const location = useLocation();

  return (
    <div>
      <ScrollToTop />
      {!location.pathname.startsWith('/admin') && <Navbar />}
      {location.pathname === '/' && <MainHeader />}

      <Suspense fallback={<div className="p-10 text-center text-gray-400"><FullPageLoader /></div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/validations/*" element={<Validations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/verifications" element={<Verifications />} />

          <Route path="/products/steel" element={<AllProductsSteel />} />
          <Route path="/products/wire" element={<AllProductsWire />} />
          <Route path="/products/details/:category" element={<DetailsProducts />} />
          <Route path="/products/category/:categorySlug" element={<CategoryDetails />} />

          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </Suspense>

    {!location.pathname.startsWith('/admin') && <Footer />}
    </div>
  );
}


