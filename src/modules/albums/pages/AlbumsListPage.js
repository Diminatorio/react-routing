import useAlbumsList from "../hooks/useAlbumsList";
import AlbumsList from "../components/AlbumsList";


export default function AlbumsListPage() {
    const {albums} = useAlbumsList()

    return (
        <>
            <h2>Albums page</h2>
            <AlbumsList albums={albums}/>
        </>
    )
}