import { createBrowserRouter, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Layout from '../components/Layout';




const Home = lazy(() => import('../pages/Home'));
const Category = lazy(() => import('../pages/Category'));
const Cart = lazy(() => import('../pages/Cart'));
const Profile = lazy(() => import('../pages/Profile'));
const NotFound = lazy(() => import('../pages/NotFound'));

const withSuspense = (node: React.ReactNode) => (
  <Suspense fallback={<div style={{ padding: 16 }}>加载中...</div>}>{node}</Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: withSuspense(<Home />) },
      { path: 'category', element: withSuspense(<Category />) },
      { path: 'cart', element: withSuspense(<Cart />) },
      { path: 'profile', element: withSuspense(<Profile />) },
    ],
  },
  { path: '*', element: withSuspense(<NotFound />) },
]);

export default router;


