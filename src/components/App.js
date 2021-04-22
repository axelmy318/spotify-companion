import { Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import queryString from 'query-string'

import { fetchToken, fetchTokenPending } from '../redux/actions/User'

import Container from './Container'
import Login from './Login'

function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  const values = queryString.parse(history.location.search)

  if(values.code){
    dispatch(fetchTokenPending())
    dispatch(fetchToken(values.code))
    history.push('/')
  }

  return (
    <>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Container />
        </Route>
      </Switch>
    </>
  );
}

export default App;
