import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import WelcomePage from './pages/WelcomePage';
import Grid from '@mui/material/Grid'

const App = () => {
  return (
    <Grid container
      justifyContent={'center'}
      direction={'row'}
    >
      <Router>
        <Switch>
          <Route path={"/main"}>
            <MainPage />
          </Route>
          <Route path={"/city/:country/:city"}>
            <CityPage />
          </Route>
          <Route exact path={"/"}>
            <WelcomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>

    </Grid>
  );
}

export default App;
