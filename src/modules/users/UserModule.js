import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import UserEditPage from "./pages/UserEditPage";

export default function UserModule () {
    return (
        <Router>
            <Switch>
                <Route path='/users/user/edit/:id'><UserEditPage/></Route>
                <Route path='/users/user/:id'><UserDetailPage/></Route>
                <Route path='/users/'><UserListPage/></Route>
                <Route exact path='/users/*'><Redirect to='/notfound' replace/></Route>
            </Switch>
        </Router>
    )
}