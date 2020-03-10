import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      userInfo: {},
      followers: []
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
    .catch(err => console.log('Oops!', err))
  }

  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <UserCard userInfo={this.state.userInfo} />
      </div>
    )
  }
}

export default App;
