import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {NotFound} from "./modules/about/pages/NotFound";
import {GreetPage} from "./modules/about/pages/GreetPage";
import Navigation from "./modules/common/components/Navigation";
import UserModule from "./modules/users/UserModule";
import AlbumModule from "./modules/albums/AlbumModule";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUsers} from "./store/actions/userActions";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setUsers())
    }, [])

  return (
      <div className="App">
          <Router>
              <Navigation/>
              <Switch>
                  <Route path='/users'><UserModule/></Route>
                  <Route path='/albums/'><AlbumModule/></Route>
                  <Route path='/notfound'><NotFound/></Route>
                  <Route exact path='/'><GreetPage/></Route>
                  <Route path="*"><Redirect to='/notfound'/></Route>

              </Switch>
          </Router>
      </div>
  );
}

export default App;
