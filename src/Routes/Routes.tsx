import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";

export function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<HomePage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
    )
}