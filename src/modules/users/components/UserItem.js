import {Link, useLocation} from "react-router-dom";

export default function UserItem({id, name}) {
    const {pathname} = useLocation()

    return (
        <div className="user-item">
            <Link to={`${pathname}user/${id}`}>{name}</Link>
            <Link to={`/albums/${id}`}> To albums</Link>
        </div>
    )
}