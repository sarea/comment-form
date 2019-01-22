import React, { Component } from 'react';
import CommentForm from './components/commentForm'
import ShowComments from './components/showComments'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { comments: []}

  // this function will be called once the CommentForm submit a comment 
  handleSubmit = (newComment) => {
    this.setState((state) => ({
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      comments: [...state.comments, newComment]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CommentForm onCommentSubmitted={this.handleSubmit}/>
        <br />
        <ShowComments commentsList={this.state.comments}/>
      </div>
    );
  }
}

export default App;
