import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AlbumsListPage from "./pages/AlbumsListPage";
import PhotosPage from "./pages/PhotosPage";

export default function AlbumModule () {
    return (
        <Router>
            <Switch>
                <Route path='/albums/photos/:id'><PhotosPage/></Route>
                <Route path='/albums/'><AlbumsListPage/></Route>
                {/*<Route exact path='/users/*'><Redirect to='/notfound' replace/></Route>*/}
            </Switch>
        </Router>
    )
}