import React from 'react'
import ReactDOM from 'react-dom'

import '@styles/app.scss'

ReactDOM.render(
    <div>
        <nav className="navbar has-shadow">
            <div className="navbar-brand">
                <a href="" className="navbar-item">
                    <span className="title is-5">Hello, World!</span>
                </a>
            </div>
        </nav>
    </div>,
    document.getElementById('app')
)