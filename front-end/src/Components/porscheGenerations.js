import { render } from "@testing-library/react";
import react, { Component } from "react";
import "./generations.css"
import data from '../data/porscheData'


class PorscheGenerations extends Component {

    constructor() {
        super();
        this.state = {
            porscheInfo: data.porsches
        }
    }

    render() {
        let allGensArr = this.state.porscheInfo.map((porsche) => {
            return (
                <div className="porsche-generation-container" >
                    <div>{porsche.generation}</div>
                    <div>{porsche.years}</div>
                    <img src={porsche.img} alt="Image of the porsche genration" />
                    <div>{porsche.description}</div>
                </div>
            )
        })

        return (
            <div>
                <img src="https://www.topgear.com/sites/default/files/news-listicle/image/2015/09/p13_0019_a4_rgb.jpg?w=1654&h=930" />
                <p className="generations-intro">Born in 1963, the Porsche 911 has become a legend. An iconic design that is constantly evolving. With over one million cars sold, the Porsche 911 is the most successful selling sports car in the world. Beyond sales success however, its cultural impact is even broader. Modified by private teams and by the factory itself for racing, rallying, and other forms of automotive competition. It is among the most successful competition cars. Add dozens of technological firsts and 55 years of development and improvements and it is clear this is a special car. In the 1999 international poll to determine the Car of the Century, the 911 came fifth. It is one of two in the top five that had remained continuously in production.</p>
                {allGensArr}
            </div>
        )
    }
}

export default PorscheGenerations