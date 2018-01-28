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
                <div className="card-image" onClick={this.handlerShowSingleHero}>
                    <figure className="image is-4by3">
                        <img src={this.props.hero.thumbnail.path + '.' + this.props.hero.thumbnail.extension} alt="Placeholder image" />
                    </figure>
                </div>

                <div className="card-content">
                    <div className="content">
                        <p className="title is-5">{this.props.hero.name}</p>
                        <span className="subtitle">
                            <div><strong>{this.props.hero.stories.available}</strong> histórias</div>
                            <div><strong>{this.props.hero.series.available}</strong> séries</div>
                            <div><strong>{this.props.hero.comics.available}</strong> histórias em quadrinhos</div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Hero)