import React, { Component } from "react"
import { home } from "../strings"
import ReactGA from "react-ga"
import ArrowLink from "./ArrowLink"
import MessageButtons from "./MessageButtons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Home extends Component {

    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    render() {
        return (
            <div id="home-wrapper" className="section-wrapper">
                <h1>
                    Pon Le,<br />
                    <span>Freelance Software Engineer.</span><br />
                </h1>
                <p id="subtitle">
                    <span className="tag"><FontAwesomeIcon icon="map-marker-alt" />{home.location}</span>
                    <span className="tag">ThreeJS</span>
                    <span className="tag">ReactJS</span>
                    <span className="tag">NodeJS</span>
                    <span className="tag">Artificial Intelligence</span>
                    <span className="tag">BlockChain</span>
                </p>
                <MessageButtons clickListener={this.props.clickListener} />
                <ArrowLink to="/work" id="work-button" animation="work" clickListener={this.props.clickListener}
                    text={home.work} />
                <ArrowLink to="/services" id="services-button" animation="services"
                    clickListener={this.props.clickListener} text={home.services} />
                <ArrowLink to="/about" id="about-button" animation="about" clickListener={this.props.clickListener}
                    text={home.about} />
                <br />
                {/* <ArrowLink to="/privacy" id="privacy-policy-button" animation="privacy"
                    clickListener={this.props.clickListener} text={home.privacy} /> */}
            </div>
        )
    }
}

export default Home