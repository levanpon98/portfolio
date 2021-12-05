import React, { Component } from "react"
import BackButton from "./BackButton"
import WorkItem from "./WorkItem"

import project1 from '../../../assets/project1.png'
import project11 from '../../../assets/project1-1.png'

import project2 from '../../../assets/project2.png'
import project21 from '../../../assets/project2-1.png'
import project22 from '../../../assets/project2-2.png'

import project3 from '../../../assets/project3.png'


import ReactGA from "react-ga"
import { work } from "../strings"
import MessageButtons from "./MessageButtons"
import WorkItemMeta from "./WorkItemMeta"

class Work extends Component {

    onScroll(event) {
        if (event.deltaX === 0)
            event.currentTarget.scrollLeft += event.deltaY
    }

    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search)
        this.grid.addEventListener("wheel", this.onScroll)
    }

    componentWillUnmount() {
        this.grid.removeEventListener("wheel", this.onScroll)
    }

    render() {
        const vanishingPoint = "Vanishing Point Studio"
        const vanishingPointLink = "https://vanishingpoint.studio/"

        const manaMoanaAwards = [{
            name: "Best Awards Finalist",
            link: "https://bestawards.co.nz/digital/small-scale-websites/storybox/mana-moana-digital-ocean-1/"
        }]
        const gameChangeAwards = [{
            name: "Webby Awards Honoree",
            link: "https://winners.webbyawards.com/2020/websites/features-design/best-individual-editorial-feature-media-company/120146/game-change"
        }]
        const livingFlowerwallAwards = [{
            name: "Best Awards Finalist",
            link: "https://bestawards.co.nz/digital/small-scale-websites/vanishing-point/the-living-flowerwall/"
        }]

        return (
            <div id="work-wrapper" className="section-wrapper">
                <div>
                    <BackButton hasHistory={!this.props.isAppearing} clickListener={this.props.clickListener} />
                </div>
                <div id="work-content">
                    <h2>{work.headline}.</h2>
                    <p className="intro">{work.intro}</p>
                    <div id="grid" ref={element => this.grid = element}>
                        <WorkItem title="ThreeJS Speed" description="The First Project of ThreeJS"
                            tags={["Three.js", "GLTF", "React", "SASS", "Webpack", "Babel"]} large={true} webp={project1}
                            jpg={project1} jpgHover={project11} webpHover={project11}
                            link="https://threejs-speed.netlify.app/" 
                           awards={[]} />
                        <WorkItem title="ELSA Speak" description="Your personal AI-powered English speaking coach"
                            tags={["ReactJS", "Nodejs", "NextJS", "Redux", "Redux-Toolkit", "Webpack"]} large={true} webp={project22}
                            jpg={project22} jpgHover={project2} webpHover={project2}
                            link="https://elsaspeak.com/en/"
                            clientLink={vanishingPointLink} awards={[]} />
                        <WorkItem title="VNUHCM" description="Vietnam National University, Ho Chi Minh City"
                            tags={["Javascript", "PHP", "JQuery", "CSS"]}
                            large={true} webp={project3} jpg={project3} jpgHover={project3} webpHover={project3}
                            link="https://vnuhcm.edu.vn/" 
                            clientLink={vanishingPointLink} awards={[]} />
                        
                        <div className="cell large">
                            <MessageButtons clickListener={this.props.clickListener} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work