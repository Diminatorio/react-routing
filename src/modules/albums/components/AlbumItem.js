import {Link, useLocation} from "react-router-dom";

export default function AlbumItem({id, title}) {
    const {pathname} = useLocation()
    return (
        <div className="album-item">
            <Link to={`/albums/photos/${id}`}>{title}</Link>
        </div>
    )
}