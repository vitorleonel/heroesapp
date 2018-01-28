import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loginModal: false
        }

        this.handlerLoginModal = this.handlerLoginModal.bind(this)
    }

    handlerLoginModal() {
        this.setState({
            loginModal: !this.state.loginModal
        })
    }

    render() {
        return(
            <header>
                <nav className="navbar has-shadow">
                    <div className="container">

                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item">
                                <span className="title is-5">{this.props.title}</span>
                            </Link>
                        </div>

                        <div className="navbar-menu">
                            <div className="navbar-end">
                                <a href="javascript:;" className="navbar-item" onClick={this.handlerLoginModal}>Entrar</a>
                            </div>
                        </div>

                    </div>
                </nav>

                <Login isActive={this.state.loginModal} close={this.handlerLoginModal} />
            </header>
        )
    }

}

export default Navbar