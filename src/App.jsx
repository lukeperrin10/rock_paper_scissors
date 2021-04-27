import React from "react";
import HomePageFeatures from "./components/HomePageFeatures";
import SinglePlayer from "./components/SinglePlayer"
import Footer from './components/Footer'
import Header from './components/Header'
import { Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/Home" component={HomePageFeatures}></Route>
        <Route data-cy="singleplayer" exact path="/SinglePlayer" component={SinglePlayer}></Route>
       
      </Switch>

      <Footer />
    </>
  );
};

export default App;