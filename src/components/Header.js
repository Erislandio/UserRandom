import React, { Component } from 'react'
import IconMenu from './header/IconMenu';
import Menu from './header/Menu';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
    }

    handleOpenMenu(){
        this.setState({open: !this.state.open})
    }
    
    render() {
        return (
            <div className="header">
                <h1 className="user-random">
                User Random
                </h1>
                <IconMenu change={this.handleOpenMenu} open={this.state.open}/>
                <Menu open={this.state.open} avatar={this.props.avatar}/>
            </div>
        )
    }
}
