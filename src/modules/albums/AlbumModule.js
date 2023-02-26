import {Route, Navigate, Routes} from "react-router-dom";
import AlbumsListPage from "./pages/AlbumsListPage";
import PhotosPage from "./pages/PhotosPage";
import UserAlbumsListPage from "./pages/UserAlbumsListPage";

export default function AlbumModule () {
    return (
        <Routes>
            <Route path='/photos/:id' element={<PhotosPage/>}/>
            <Route path='/' element={<AlbumsListPage/>}/>
            <Route path='/:id' element={<UserAlbumsListPage/>}/>
            <Route path='*' element={<Navigate to='/notfound' replace />} />
        </Routes>
    )
}