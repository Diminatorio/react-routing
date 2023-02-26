import {useNavigate} from 'react-router-dom'

export default function useCustomNavigate(navigateTo = '/') {
    const navigate = useNavigate()
    const back = () => navigate(-1)
    const forward = () => navigate(+1)
    const moveToPage = () => navigate(navigateTo)

    return {back, forward, moveToPage}
}