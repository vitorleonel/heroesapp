import React, { Component } from 'react'
import Hero from './Hero'

class Heroes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            heroes: [
                {
                    id: 1,
                    name: 'aas'
                },
                {
                    id: 2,
                    name: 'bbs'
                },
                {
                    id: 3,
                    name: 'ccs'
                }
            ]
        }
    }

    render() {
        const heroes = this.state.heroes.map((hero, index) => {
            return (
                <div className="column is-4" key={index}>
                    <Hero hero={hero} />
                </div>
            )
        })

        return (
            <section className="section" id="heroes">
                <div className="columns">
                    {heroes}
                </div>
            </section>
        )
    }

}

export default Heroes