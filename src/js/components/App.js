import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import config from '@config'

import Navbar from './Navbar'
import Heroes from '@scripts/containers/Heroes/Heroes'

class App extends Component {

    render() {
        return(
            <div>
                <Navbar title={config.app.title} />

                <div className="container">
                    <Route path="/" component={ Heroes } exact />
                </div>
            </div>
        )
    }

}

export default App