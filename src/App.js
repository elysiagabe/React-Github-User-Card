import React from 'react';
import axios from 'axios';
// Styles
import './App.css';
// Components
import UserCard from './components/UserCard';
import Followers from './components/Followers';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      userInfo: {},
      followers: [],
      query: ''
    }
  }

  componentDidMount() {
    // gets user's info & sets to state
    axios.get('https://api.github.com/users/priyadarshy')
      .then(response => {
        //console.log(response);
        this.setState({
          userInfo: response.data
        });
      })
      .catch(err => console.log('Oops! Problem getting user info', err))

    // get user's followers & sets their info to state
    axios.get('https://api.github.com/users/priyadarshy/followers')
      .then(response => {
        //console.log(response.data)
        let userFollowers = response.data;
        userFollowers.map(follower => {
          axios.get(`https://api.github.com/users/${follower.login}`)
            .then(response => {
              //console.log('These are followers:', response.data)
              this.setState({
                followers: [...this.state.followers, response.data]
              })
              //console.log("This is followers state", this.state.followers)
            })
            .catch(err => console.log('Oops! Problem getting follower info:', err))
        })
      })
      .catch(err => console.log('Oops! Problem fetching user\'s followers', err))
  }

  handleInputChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  fetchUser = e => {
    e.preventDefault();
        // gets user's info & sets to state
        axios.get(`https://api.github.com/users/${this.state.query}`)
        .then(response => {
          //console.log(response);
          this.setState({
            userInfo: response.data
          });
        })
        .catch(err => console.log('Oops! Problem getting user info', err))
  
      // get user's followers & sets their info to state
      axios.get(`https://api.github.com/users/${this.state.query}/followers`)
        .then(response => {
          //console.log(response.data)
          let userFollowers = response.data;
          userFollowers.map(follower => {
            axios.get(`https://api.github.com/users/${follower.login}`)
              .then(response => {
                //console.log('These are followers:', response.data)
                this.setState({
                  followers: [...this.state.followers, response.data]
                })
                //console.log("This is followers state", this.state.followers)
              })
              .catch(err => console.log('Oops! Problem getting follower info:', err))
          })
        })
        .catch(err => console.log('Oops! Problem fetching user\'s followers', err))
  }
 

  render() {
    return (
      <div className="App">
        <input value={this.state.query} onChange={this.handleInputChange}/>
        <button onClick={this.fetchUser}>Search</button>
        <UserCard userInfo={this.state.userInfo} />
        <Followers followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
