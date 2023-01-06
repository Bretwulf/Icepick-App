import { Route, Routes } from "react-router-dom";
import Profile from "../pages/edit/Profile";
import RegisterPage from "../pages/edit/Register";
export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
