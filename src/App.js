import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
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
              <Routes>
                  <Route path='/users/*' element={<UserModule/>}/>
                  <Route path='/albums/*' element={<AlbumModule/>}/>
                  <Route path='/notfound' element={<NotFound/>}/>
                  <Route path='/' element={<GreetPage/>}/>
                  <Route path='*' element={<Navigate to='/notfound' replace />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
