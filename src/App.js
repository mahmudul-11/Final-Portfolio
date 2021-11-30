import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import HomePage from './Components/HomePage/HomePage';
import Navigation from './Components/Navigation/Navigation';
import ProjectSection from './Components/ProjectSection/ProjectSection';

function App() {
  return (
    <div className='new-div'>
      <BrowserRouter>
        <Navigation></Navigation>

        <Switch>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/blog'>
            <Blogs />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>





    </div >
  );
}

export default App;
