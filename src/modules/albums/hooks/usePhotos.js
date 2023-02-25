import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPhotos} from "../../../store/actions/photosActions";

export default function usePhotos (id) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPhotos(id))
    })

    const {photos} = useSelector(state => ({
        photos: state.photos
    }))


    return{photos}
}