import React, {useState, useCallback, useMemo} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import WelcomePage from './pages/WelcomePage';
import Grid from '@mui/material/Grid'

const App = () => {
  const [allWeather, setAllWeather] = useState({})
  const [charData, setCharData] = useState({})
  const [forecastList, setForecastList] = useState({})

  const onSetAllWeather = useCallback((weatherCity) => {
      setAllWeather(allWeather => {
        return ({ ...allWeather, ...weatherCity })
        
        })
    },[setAllWeather])

    const onSetCharData = useCallback((dataAux) => {
      setCharData((charData) => ({ ...charData, ...dataAux}))
    },[setCharData])

    const onSetForecastList = useCallback((forecastItemListAux) => {
      setForecastList((forecastList) => ({ ...forecastList, ...forecastItemListAux}))
    },[setForecastList])

    const actions = useMemo(()=> (
      {
        onSetAllWeather,
        onSetCharData,
        onSetForecastList
      }
    ), [onSetAllWeather, onSetCharData, onSetForecastList])

    const data = useMemo(() => (
      {
        allWeather,
        charData,
        forecastList
      }
    ), [allWeather,charData,forecastList])

  return (
    <Grid container
      justifyContent={'center'}
      direction={'row'}
    >
      <Router>
        <Switch>
          <Route path={"/main"}>
            <MainPage data={data} actions={actions} />
          </Route>
          <Route path={"/city/:country/:city"}>
            <CityPage datos={data} actions={actions} />
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
