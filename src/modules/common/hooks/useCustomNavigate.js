import {useHistory} from 'react-router-dom'

export default function useCustomNavigate(navigateTo = '/') {
    const navigate = useHistory()
    const back = () => navigate.goBack()
    const forward = () => navigate.goForward()
    const moveToPage = () => navigate.push(navigateTo)

    return {back, forward, moveToPage}
}