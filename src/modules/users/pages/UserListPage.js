import useUsersList from "../hooks/useUsersList";
import UsersList from "../components/UsersList";
import CreateForm from "../components/CreateForm";

export default function UserListPage () {
    const {users} = useUsersList()
    return (
        <>
            <h2>Users list page</h2>
            <UsersList list={users}/>
            <CreateForm/>
        </>
    )
}