import {useSelector} from "react-redux";

export default function useUsersList () {
    const {users} = useSelector(state => ({
        users:state.users
    }))

    return {users}
}