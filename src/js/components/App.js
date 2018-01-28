import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import config from '@config'

import Navbar from './Navbar'
import Heroes from '@scripts/containers/Heroes/Heroes'
import Hero from '@scripts/containers/Hero/Hero'

class App extends Component {

    render() {
        return(
            <div>
                <Navbar title={config.app.title} />

                <div className="container">
                    <Route path="/" exact component={ Heroes } />
                    <Route path="/heroes/:hero" component={ Hero } />
                </div>
            </div>
        )
    }

}

export default App