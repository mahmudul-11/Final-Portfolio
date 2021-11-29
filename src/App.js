import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navigation from './Components/Navigation/Navigation';
import ProjectSection from './Components/ProjectSection/ProjectSection';

function App() {
  return (
    <div className='new-div'>
      <BrowserRouter>

        <Navigation></Navigation>
        <Banner></Banner>
        <ProjectSection></ProjectSection>
      </BrowserRouter>





    </div>
  );
}

export default App;
