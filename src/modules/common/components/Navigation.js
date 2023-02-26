import {NavLink} from "react-router-dom";

export default function Navigation() {
    return(
        <div className="nav-bar">
            <NavLink to='/'>Home</NavLink> <br/>
            <NavLink to='/users/'>Users</NavLink> <br/>
            <NavLink to='/albums/'>Albums</NavLink><br/>
        </div>
    )
}