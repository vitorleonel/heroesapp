import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Moments from '@scripts/containers/Moments/Moments'

class App extends Component {

    render() {
        return(
            <div>
                <Navbar title="Moments" />

                <div className="container">
                    <Route path="/" component={ Moments } exact />
                </div>
            </div>
        )
    }

}

export default App