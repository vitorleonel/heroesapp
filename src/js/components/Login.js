import React, { Component } from 'react'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handlerResetForm = this.handlerResetForm.bind(this)
    }

    handleInputChange(event) {
        let change = {}
        change[event.target.name] = event.target.value

        this.setState(change)
    }

    handlerResetForm() {
        this.setState({
            email: '',
            password: ''
        })

        this.props.close()
    }

    render() {
        return (
            <div className={!this.props.isActive ? 'modal' : 'modal is-active'}>
                <div className="modal-background" />

                <div className="modal-card" style={{maxWidth: '400px'}}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">Entre com seus dados</p>
                        <button className="delete" aria-label="close" onClick={this.handlerResetForm} />
                    </header>

                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label">E-mail</label>

                            <div className="control">
                                <input type="text" name="email" className="input" value={this.state.email} onChange={this.handleInputChange} placeholder="digite seu e-mail" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Senha</label>

                            <div className="control">
                                <input type="password" name="password" className="input" value={this.state.password} onChange={this.handleInputChange} placeholder="digite sua senha" />
                            </div>
                        </div>
                    </section>

                    <footer className="modal-card-foot">
                        <button className="button is-success">Entrar</button>
                        <button className="button" onClick={this.handlerResetForm}>Cancelar</button>
                    </footer>
                </div>
            </div>
        )
    }

}

export default Login