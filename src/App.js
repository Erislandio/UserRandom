import React, { Component } from 'react';

import './App.css';
import UserView from './components/UserView';
import Loader from './components/Loader'
import Header from './components/Header'

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state ={
      name: '',
      avatar: '',
      user: [],
      loading: true
    }

    this.anotherUser = this.anotherUser.bind(this);
    

  }

  anotherUser(){
    setTimeout(fetch('https://randomuser.me/api')
    .then(res => {
      return res.json();
    }).then(user => {
      console.log(user.results);

      this.setState({
        name: user.results[0].name.first,
        avatar: user.results[0].picture.large,
        user: user.results,
        loading: false
      })

    }), 1000)
    
  }
  

  componentDidMount(){
   this.anotherUser();
    
  }

  render() {
   return (
     this.state.loading ? (<Loader />) 
     : (<div className="content">
        <Header avatar={this.state.avatar}/>
        <UserView avatar={this.state.avatar} name={this.state.name} user={this.state.user} another={this.anotherUser}/>
        </div>
     )
   )
  }
}

export default App;
