import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SingleUser from './components/SingleUser/SingleUser';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home"> 
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/details">
          <Details></Details>
        </Route>
        <Route path="/user/:userId">
          <SingleUser></SingleUser>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
