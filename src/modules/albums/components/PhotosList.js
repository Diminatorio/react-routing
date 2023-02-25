export default function PhotosList({photos}) {
    return (
        <div className="albums-list">
            {photos ?
                photos.map(photo => <img src={photo.thumbnailUrl} alt="Photo" key={photo.id}/>):
            <div>Undefined</div>
            }
        </div>
    )
}