import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setAlbums} from "../../../store/actions/albumsActions";

export default function useAlbumsList (id) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAlbums(id))
    }, [])

    const {albums} = useSelector(state => ({
        albums:state.albums
    }))

    return {albums}
}