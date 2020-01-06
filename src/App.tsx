import React, { Component } from 'react';
import CommentInput, { CommentInputState } from './CommentInput';
import CommentList from './CommentList';

interface AppProps{
  comments: Array<CommentInputState>;
}

interface AppState{
  comments: Array<CommentInputState>;
}

class App extends Component<AppProps, AppState> {
  static defaultProps:AppProps = {
    comments: [],
  }
  constructor(props: AppProps) {
    super(props);
    this.state = {
      comments: [],
    }
  }
  handleSubmit = (username: string, content: string) => {
    var { comments } = this.state;
    comments.push({username: username, content: content});
    this.setState({
      comments: comments,
    })
  }

  render () {
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmit} />
        <CommentList comments={this.state.comments} /> 
      </div>
    )
  }
}

export default App;
