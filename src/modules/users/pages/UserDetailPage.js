import useUserDetails from "../hooks/useUserDetails";
import useCustomNavigate from "../../common/hooks/useCustomNavigate";
import {NavLink, useParams} from "react-router-dom";

export default function UserDetailPage() {
    const {id} = useParams()

    const {detailedUser} = useUserDetails(id)

    const navigate = useCustomNavigate()

    const onBackButtonClick = () => {
        navigate.back()
    }

    const editURL = `/users/user/edit/${id}`

    return (
        <>
            <h2>User Details Page</h2>
            <div>Name: {detailedUser.name}</div>
            <div>Usermame: {detailedUser.username}</div>
            <div>Email: {detailedUser.email}</div>
            <button onClick={onBackButtonClick}>Go Back</button>
            <NavLink to={editURL}>Edit User</NavLink>
        </>
    )
}