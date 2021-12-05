import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from "react-router-dom"
import { home } from "../strings"
import { faGithub, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"

class MessageButtons extends Component {
    render() {
        return (
            <div className="message-buttons">
                <Link to="/message" className="button message-button animated" data-animation="message"
                    onClick={this.props.clickListener}>
                    {home.message}
                </Link>
                <span>
                    <a className="icon-button animated" href="#"
                        target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="icon-button animated" href="#"
                        target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="icon-button animated" href="#"
                        target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </span>
            </div>
        )
    }
}

export default MessageButtons