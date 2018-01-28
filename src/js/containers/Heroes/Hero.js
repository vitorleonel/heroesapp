import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Hero extends Component {

    constructor(props) {
        super(props)

        this.handlerShowSingleHero = this.handlerShowSingleHero.bind(this)
    }

    handlerShowSingleHero() {
        this.props.history.push('/heroes/' + this.props.hero.id)
    }

    render() {
        return (
            <div className="card">
                <div className="card-image" style={{cursor: 'pointer'}} onClick={this.handlerShowSingleHero}>
                    <figure className="image is-4by3">
                        <img src={this.props.hero.thumbnail.path + '.' + this.props.hero.thumbnail.extension} alt={this.props.hero.name} />
                    </figure>
                </div>

                <div className="card-content">
                    <div className="content">
                        <p className="title is-5">{this.props.hero.name}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Hero)