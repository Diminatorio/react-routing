import {useSelector} from "react-redux";

export default function useUserDetails (id) {
    const {users} = useSelector(state => ({
        users:state.users
    }))
    const detailedUser = users.find(el => String(el.id) === id)
    return{detailedUser}
}