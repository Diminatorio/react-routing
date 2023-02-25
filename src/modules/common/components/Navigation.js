import {useHistory} from "react-router-dom";

export default function Navigation() {
    const history = useHistory()

    const onHome = () => {history.push('/')}
    const onUsers = () => {history.push('/users/')}
    const onAlbums = () => {history.push('/albums/')}

    return(
        <div className="nav-bar">
            <button className="btn-home" onClick={onHome}>Home</button>
            <button className="btn-users" onClick={onUsers}>Users</button>
            <button className="btn-albums" onClick={onAlbums}>Albums</button>
        </div>
    )
}