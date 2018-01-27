import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Heroes from '@scripts/containers/Heroes/Heroes'

class App extends Component {

    render() {
        return(
            <div>
                <Navbar title="Heroes" />

                <div className="container">
                    <Route path="/" component={ Heroes } exact />
                </div>
            </div>
        )
    }

}

export default App