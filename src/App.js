import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'

//page component
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Service from './pages/services/Services'
import Search from './pages/search/Search'

//stypes
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/services/:id">
            <Services />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
