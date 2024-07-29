import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@/components/layout';
import Home from '@/pages/home';
import Todos from '@/pages/todos';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}