import React, { Component } from 'react'
import Http from '@scripts/services/Http'
import Hero from './Hero'

class Heroes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            heroes: [],
            currentPage: 0,
            loadMore: false
        }
    }

    componentWillMount() {
        this.handlerGetHeroes()
    }

    handlerGetHeroes(offset = 0) {
        Http.get('v1/public/characters', {
            params: {
                offset
            }
        }).then(response => {
            if(response.status !== 200) {
                return
            }

            let newHeroes = this.state.heroes

            response.data.data.results.forEach(hero => {
                newHeroes.push(hero)
            })

            this.setState({
                heroes: newHeroes,
                currentPage: response.data.data.offset,
                loadMore: response.data.data.results.length >= 20
            })
        })
    }

    render() {
        const heroes = this.state.heroes.map(hero => {
            return (
                <div className="column is-4" key={hero.id}>
                    <Hero hero={hero} />
                </div>
            )
        })

        let loadMore = null

        if(this.state.loadMore && this.state.heroes.length > 0) {
            loadMore = <button className="button is-dark" onClick={() => this.handlerGetHeroes(this.state.currentPage + 20)}>Carregar mais</button>
        }

        return (
            <section className="section" id="heroes">
                <div className="columns is-multiline">
                    {heroes}
                </div>

                {loadMore}
            </section>
        )
    }

}

export default Heroes