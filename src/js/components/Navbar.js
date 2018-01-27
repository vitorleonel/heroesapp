import React, { PureComponent } from 'react'

class Navbar extends PureComponent {

    render() {
        return(
            <nav className="navbar has-shadow">
                <div className="container">

                    <div className="navbar-brand">
                        <a href="/" className="navbar-item">
                            <span className="title is-5">{this.props.title}</span>
                        </a>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <a href="" className="navbar-item">Entrar</a>
                        </div>
                    </div>

                </div>
            </nav>
        )
    }

}

export default Navbar