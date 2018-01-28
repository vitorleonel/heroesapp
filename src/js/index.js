import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch  } from 'react-router-dom'

import App from './components/App'
import '@styles/app.scss'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <App />
        </Switch>
    </HashRouter>,

    document.getElementById('app')
)