import './App.css';
import Header from './common/Header';
import {Auth0Provider} from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';
import Home from './home/Home';
import './assets/main.css'
import Signup from './signup/Signup';
import Profile from './profile/Profile';

function App() {
  return (
    <Auth0Provider 
      domain="tutorialedge.eu.auth0.com"
      clientId="7du6r7ds9332ptig4fjisui8oa "
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
      >
      <Router>
        <div className="App container mx-auto">
          <Header/>

          <Switch>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route define path="/">
              <Home/>
            </Route>

          </Switch>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
