import {Navigate, Route, Routes} from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import UserEditPage from "./pages/UserEditPage";

export default function UserModule () {
    return (
        <Routes>
            <Route path='/user/edit/:id' element={<UserEditPage/>}/>
            <Route path='/user/:id' element={<UserDetailPage/>}/>
            <Route path='/' element={<UserListPage/>}/>
            <Route path='*' element={<Navigate to='/notfound' replace />} />
        </Routes>
    )
}