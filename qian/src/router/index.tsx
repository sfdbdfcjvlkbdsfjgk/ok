import { createBrowserRouter, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Layout from '../components/Layout';

// 懒加载页面组件
const Home = lazy(() => import('../pages/home/index'));
const Class = lazy(() => import('../pages/class/index'));
const Collect = lazy(() => import('../pages/collect/index'));
const Main = lazy(() => import('../pages/main/index'));
const Release = lazy(() => import('../pages/release/index'));
const Recipe = lazy(() => import('../pages/recipe/index'));
const Video = lazy(() => import('../pages/video/index'));
const Work = lazy(() => import('../pages/work/index'));
const NotFound = lazy(() => import('../pages/NotFound'));

const withSuspense = (node: React.ReactNode) => (
  <Suspense fallback={<div style={{ padding: 16, textAlign: 'center' }}>加载中...</div>}>{node}</Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: withSuspense(<Home />) },
      { path: 'category', element: withSuspense(<Class />) },
      { path: 'collect', element: withSuspense(<Collect />) },
      { path: 'profile', element: withSuspense(<Main />) },
      { path: 'release', element: withSuspense(<Release />) },
      // { path: 'recipe', element: withSuspense(<Recipe />) },
      // { path: 'video', element: withSuspense(<Video />) },
      // { path: 'work', element: withSuspense(<Work />) },
    ],
  },
  { path: '*', element: withSuspense(<NotFound />) },
  { path: '/recipe', element: withSuspense(<Recipe />) },
  { path: '/video', element: withSuspense(<Video />) },
  { path: '/work', element: withSuspense(<Work />) },
]);

export default router;