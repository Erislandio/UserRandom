import React, { Component } from 'react'

export default class IconMenu extends Component {
    constructor(props) {
        super(props)
        
    }

    change(){
        this.props.change()
    }

    
    render() {
        return (
            <div className={(this.props.open ? 'change ' : ' ') + ' container'} onClick={this.change.bind(this)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        )
    }
}
