import {Link, useLocation} from "react-router-dom";

export default function AlbumItem({id, title}) {
    const {pathname} = useLocation()

    return (
        <div className="album-item">
            <Link to={`${pathname}photos/${id}`}>{title}</Link>
        </div>
    )
}