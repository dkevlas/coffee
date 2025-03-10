import HomePage from '@/pages/HomePage';
import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

export default function HomeRoutes(): ReactNode {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
