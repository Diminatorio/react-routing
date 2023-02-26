import AlbumsList from "../components/AlbumsList";
import {useParams} from "react-router-dom";
import useAlbumsList from "../hooks/useAlbumsList";

export default function UserAlbumsListPage () {
    const {id} = useParams()

    const {albums} = useAlbumsList(id)
    return (
        <>
            <h2>Albums page</h2>
            <AlbumsList albums={albums}/>
        </>
    )
}