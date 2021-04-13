import './css/App.css';
import {Route, Switch} from 'react-router-dom'
import Header from './components/Pages/Header'
import Home from './components/Pages/Home'
import Studio from './components/Pages/Studio'
import Explore from './components/Pages/Explore'
import UserGallery from './components/Pages/User_Gallery';


function App() {
  return (
    <div className="App"> 
    <Header/> 
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
    </Switch>
    </div>
  );
}

export default App;
