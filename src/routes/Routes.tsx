import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Page404 from "../pages/errors/Page404";
import PostDetailsPage from "../pages/PostDetailsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostDetailsPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
      <Route path="/error/404" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
