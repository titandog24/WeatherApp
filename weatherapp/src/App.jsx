import React, {useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import WelcomePage from './pages/WelcomePage';
import Grid from '@mui/material/Grid'

const App = () => {

  const initialValue =  {
      allWeather: {},
      charData: {},
      forecastList: {}
  }

  const reducer = (state, action) => {

    switch (action.type) {
      case 'SET_ALL_WEATHER':
        const weatherCity = action.payload
        const newAllWeather = { ...state.allWeather, ...weatherCity }
        return { ...state, allWeather: newAllWeather }

      case 'SET_CHAR_DATA':
        const charData = action.payload
        const newCharData = { ...state.charData, ...charData }
        return { ...state, charData: newCharData }

      case 'SET_FORECAST_LIST_ITEM':
        const forecastList = action.payload
        const newForcastList = { ...state.forecastList, ...forecastList }
        return { ...state, forecastList: newForcastList }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <Grid container
      justifyContent={'center'}
      direction={'row'}
    >
      <Router>
        <Switch>
          <Route path={"/main"}>
            <MainPage data={state} actions={dispatch} />
          </Route>
          <Route path={"/city/:country/:city"}>
            <CityPage datos={state} actions={dispatch} />
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
