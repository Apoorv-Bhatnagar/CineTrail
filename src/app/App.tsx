
import React, { lazy, Suspense, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '../styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';




const Layout = lazy(() => import('../components/layout/layout'));
const HomePage = lazy(() => import('../pages/home/homePage'));
const MovieItem = lazy(() => import('../components/movie/movieItem/movieItem'));
const MyWatchlist = lazy(() => import('../pages/watchlist/saved'));
const NotFoundPage = lazy(() => import('../pages/notFound/notFound'));



const App: React.FC = () => {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movie/:id" element={<MovieItem />} />
            <Route path="/saved" element={<MyWatchlist  />} />   
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
