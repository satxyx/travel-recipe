import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import MainPage from './pages/MainPage'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components'



// When we visit '/' we want to see the HomePage
// When we visit '/explore' we want to see the MainPage
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/explore" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
