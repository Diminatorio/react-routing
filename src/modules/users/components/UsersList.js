import UserItem from "./UserItem";

export default function UsersList({list}) {
    return (
        <div className="users-list">
            {list.map(user =>
                <UserItem key={user.id} id={user.id} name={user.name}/>
            )}
        </div>
    )
}