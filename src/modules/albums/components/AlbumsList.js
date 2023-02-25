import AlbumItem from "./AlbumItem";

export default function AlbumsList({albums}) {
    return (
        <div className="albums-list">
            {albums.map(album =>
                <AlbumItem key={album.id} id={album.id} title={album.title}/>
            )}
        </div>
    )
}