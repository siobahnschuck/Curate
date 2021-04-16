import './css/App.css';
import {Route, Switch} from 'react-router-dom'
// import Header from './components/Pages/Header'
import Home from './components/Pages/Home'
import Studio from './components/Pages/Studio'
import Explore from './components/Pages/Explore'
import UserGallery from './components/Pages/User_Gallery';
import ProfileForm from './components/Forms/profileForm'
// import Navbar from './components/navbar/Navbar';
import ProfileNav from './components/navbar/ProfileNav'
import GalleryForm from './components/Forms/galleryForm';
import DrawingDetails from './components/drawings/DrawingDetails';
import GalleryDetails from './components/gallery/GalleryDetails';

function App() {
  return (
    <div className="App"> 
    {/* <Header/> */}
    {/* <Navbar />  */}
    <ProfileNav/>
    <Switch>
      <Route exact path='/' 
        render={() => (
          <Home/>
        )}
      />
      <Route path='/studio'
        render={() => (<Studio/>)}
      />
      <Route path='/explore'
        render={() => (<Explore/>)}
      />
      <Route path='/profile'
        render={() => (<UserGallery/>)}
      />
      <Route path='/explore'
        render={() => (<Explore/>)}
      />
      <Route path='/edit'
        render={() => (<ProfileForm/>)}
      />
      <Route path='/create/gallery'
        render={() => (<GalleryForm/>)}
      />
      <Route path='/drawing/details/:id'
        render={() => (<DrawingDetails/>)}
      />
      <Route path='/gallery/details/:id'
        render={() => (<GalleryDetails/>)}
      />
    </Switch>
    </div>
  );
}

export default App;
