import { ReactNode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeRoute } from './routes/routes';

function App(): ReactNode {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/*" element={<HomeRoute />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
