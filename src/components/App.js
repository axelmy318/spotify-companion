import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import queryString from 'query-string'

import { setCode, fetchToken } from '../redux/actions/User'

import Container from './Container'
import Login from './Login'

function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const values = queryString.parse(location.search)
  console.log(values)
  const user = useSelector(state => state.User)

  if(values.code){
    dispatch(setCode(values.code))
    history.push('/')
  }
  //Making sure the user has authorized spotify to give data
  //user.code ? history.push('/') : history.push('/login')

  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <Container />
      </Route>
    </Switch>
  );
}

export default App;
