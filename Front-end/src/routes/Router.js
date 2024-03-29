import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentPage from "../pages/CommentsPage/CommentsPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignupPage from "../pages/SignupPage/SignupPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/comment" element={< CommentPage/>} />
        {/* <Route path="/comment:Post" element={< CommentPage/>} /> */}


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
