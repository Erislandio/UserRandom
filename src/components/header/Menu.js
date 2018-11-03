import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props) {
        super(props)
        
    }
    
    render() {
        const url = this.props.avatar;
        return (
            <div className={(this.props.open ? 'open ' : ' ') + ' menu '} >
            <div className="logo">
                <img src={url} />
            </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Duvidas</li>
                    </ul>
                </nav>
                <div className="social">
                    <ul>
                        <li>
                            Facebook
                        </li>

                        <li>
                            insta
                        </li>
                        <li>
                            Youtube
                        </li>

                        <li>
                            Twitter
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
