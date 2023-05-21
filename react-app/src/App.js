import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/GamesPages/Homepage";
import GameDeveloperForm from "./components/GamesPages/GameDeveloperForm";
import GameDeveloperPage from "./components/GamesPages/GameDeveloperPage";
import SingleGameDetailsPage from "./components/GamesPages/SingleGameDetailsPage";
import GameDeveloperImages from "./components/GamesPages/GameDeveloperImages";
import GameDeveloperPortal from "./components/GamesPages/GameDeveloperPortal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path='/games/:gameId'>
            <SingleGameDetailsPage />
          </Route>
          <Route exact path='/developer'>
            <GameDeveloperPage />
          </Route>
          <Route exact path="/developer/form">
            <GameDeveloperForm />
          </Route>
          <Route exact path="/developer/portal">
            <GameDeveloperPortal />
          </Route>
          <Route exact path="developer/images">
            <GameDeveloperImages />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
