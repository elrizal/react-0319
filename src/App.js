import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FriendCard from './components/FriendCard/index';
import friends from "./friends.json";
import Wrapper from './components/Wrapper/index';
import Form from './components/Form/Login';
import SearchResultContainer from './components/SearchResultContainer/SearchResultContainer';


class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      friends
    };

    removeFriend = friendId => {
      // Filter this.state.friends for friends with an id not equal to the id being removed
      const friends = this.state.friends.filter(friend => friend.id !== friendId);
      // Set this.state.friends equal to the new friends array
          const shuffleList = friends.sort(()=> 0.5 - Math.random());
      this.setState({ friends });
    };

  render() {
    return (
      <div className="App">
      <Navbar />
        <header className="App-header">
        <h1>Testing</h1>
        </header>
      <div class="jumbotron">
        <h1 className="display-3">Jumbo heading</h1>
        <p className="lead">Jumbo helper text</p>
        <hr class="my-2"/>
        <p>More info</p>
        <p className="lead">
          <Form/>
        </p>
      </div>

        <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      {/* This must be an anon function:  */}
      <span className="remove" onClick={() => friends.removeFriend(friends.id)}> </span>
          </div>
    );
  }
}

export default App;
