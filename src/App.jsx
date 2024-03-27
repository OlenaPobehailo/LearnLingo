import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeachersPage from "./pages/TeachersPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="teachers" element={<TeachersPage />} />

        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
