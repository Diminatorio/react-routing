import useCustomNavigate from "../../common/hooks/useCustomNavigate";
import {useParams} from "react-router-dom";
import usePhotos from "../hooks/usePhotos";
import PhotosList from "../components/PhotosList";

export default function PhotosPage() {
    const {id} = useParams()

    const {photos} = usePhotos(id)

    const navigate = useCustomNavigate()

    const onBackButtonClick = () => {
        navigate.back()
    }

    return (
        <>
            <h2>Photos Page</h2>
            <PhotosList photos={photos}/>
            <button onClick={onBackButtonClick}>Go Back</button>
        </>
    )
}