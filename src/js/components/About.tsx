import React, { Component } from "react"
import BackButton from "./BackButton"
import ReactGA from "react-ga"
import { about, home } from "../strings"
import webp from "../../../assets/63470127afc864963dd9.jpg"
import jpg from "../../../assets/63470127afc864963dd9.jpg"
import MessageButtons from "./MessageButtons"
import ArrowLink from "./ArrowLink"

type Props = {
    isAppearing: boolean,
    clickListener: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

class About extends Component<Props> {

    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    render() {
        return (
            <div id="about-wrapper" className="section-wrapper">
                <div>
                    <BackButton hasHistory={!this.props.isAppearing} clickListener={this.props.clickListener} />
                </div>
                <div id="about-content">
                    <h2>{about.headline}.</h2>
                    <p>{about.aboutText1}</p>
                    <div className="picture-buttons">
                        <picture>
                            <source srcSet={webp} type="image/webp" />
                            <img src={jpg} />
                        </picture>
                        <MessageButtons clickListener={this.props.clickListener} />
                    </div>
                    <p>{about.aboutText2}</p>
                    <p>{about.aboutText3}</p>
                    <ArrowLink to="/services" animation="services" text={home.services}
                        clickListener={this.props.clickListener} />
                    <p>{about.aboutText4}</p>
                </div>
            </div>
        )
    }
}

export default About