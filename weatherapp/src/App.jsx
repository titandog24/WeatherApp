import React, {useState, useMemo} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import WelcomePage from './pages/WelcomePage';
import Grid from '@mui/material/Grid'

const App = () => {
  const [allWeather, setAllWeather] = useState({})

  const onSetAllWeather = useMemo(() => ((weatherCity) => {
      setAllWeather(allWeather => {
        return ({ ...allWeather, ...weatherCity })
        
        })
    }),[setAllWeather])

  return (
    <Grid container
      justifyContent={'center'}
      direction={'row'}
    >
      <Router>
        <Switch>
          <Route path={"/main"}>
            <MainPage allWeather={allWeather} onSetAllWeather={onSetAllWeather} />
          </Route>
          <Route path={"/city/:country/:city"}>
            <CityPage allWeather={allWeather} onSetAllWeather={onSetAllWeather} />
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
