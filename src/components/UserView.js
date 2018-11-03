import React, { Component } from 'react'

export default class UserView extends Component {

    follow(){
        alert('Indisponivel no momento')
    }
    another(){
        this.props.another();
    }

    render() {
        return (
            <div className="user-info">
                <div className="avatar">
                    <img src={this.props.avatar} alt="user" />
                </div>
                <div className="user-name">
                    <h2>{this.props.name} {this.props.user[0].name.last}</h2>
                    <p className="email">{this.props.user[0].email}</p>
                    <span className="num">{this.props.user[0].cell}</span>
                </div>
                <div className="social-btn">
                    <button className="btn-f" onClick={this.follow.bind(this)}>Follow</button>
                    <button className="btn-m" onClick={this.follow.bind(this)}>Message</button>
                </div>
                <div className="user-desc">
                    <ul>
                        <li>
                            <span>Gender:</span> 
                            {this.props.user[0].gender}
                        </li>
                        <li>
                        <span>Age:</span> 
                            
                            {this.props.user[0].dob.age}
                        </li>
                        <li>
                        <span>City:</span> 
                            
                            {this.props.user[0].location.city}
                        </li>
                        <li>
                        <span>Street:</span> 
                            
                            {this.props.user[0].location.street}
                        </li>
                        <li>
                        <span>Nascionality:</span> 
                        
                        {this.props.user[0].nat}
                        </li>
                    </ul>
                    <button className="another" onClick={this.another.bind(this)}>
                        Another User
                    </button>
                </div>
            </div>
        )
    }
}
