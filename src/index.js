import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import { createPromise } from './redux/middleware/promise'
import reducers from './redux/reducers'

import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

let composeArg = window.__REDUX_DEVTOOLS_EXTENSION__ ? 
                compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(createPromise())) :
                applyMiddleware(createPromise())
                
const store = createStore(
  reducers,
  composeArg
)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store} >
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
