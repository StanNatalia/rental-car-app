import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./pages/HomePage"));
const CarPage = lazy(() => import("./pages/CarPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));

function App() {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/car/:id" element={<CarPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
