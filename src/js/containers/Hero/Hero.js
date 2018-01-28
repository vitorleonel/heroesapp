import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Http from '@scripts/services/Http'

class Hero extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hero: null
        }
    }

    componentWillMount() {
        this.handlerGetHero()
    }

    handlerGetHero() {
        Http.get('v1/public/characters/' + this.props.match.params.hero).then(response => {
            if(response.status !== 200) {
                return
            }

            this.setState({
                hero: response.data.data.results[0]
            })
        })
    }

    render() {
        let hero = null

        if(this.state.hero) {
            hero = (
                <div className="columns">

                    <div className="column is-4">
                        <figure className="image">
                            <img src={this.state.hero.thumbnail.path + '.' + this.state.hero.thumbnail.extension} alt={this.state.hero.name} />
                        </figure>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-header">
                                <span className="card-header-title">{this.state.hero.name}</span>
                            </div>

                            <div className="card-content">
                                <div className="columns">
                                    <div className="column"><strong>{this.state.hero.stories.available}</strong> história(s)</div>
                                    <div className="column"><strong>{this.state.hero.series.available}</strong> série(s)</div>
                                    <div className="column"><strong>{this.state.hero.comics.available}</strong> histórias em quadrinho(s)</div>
                                </div>

                                <hr/>

                                <p>{this.state.hero.description ? this.state.hero.description : 'Sem descrição!'}</p>
                            </div>

                            <div className="card-footer">
                                <Link to="/" className="card-footer-item">Voltar</Link>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }

        return (
            <section className="section" id="hero">
                {hero}
            </section>
        )
    }

}

export default Hero