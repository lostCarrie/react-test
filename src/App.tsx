import React, { Component } from 'react';
import CommentInput, { CommentInputState } from './CommentInput';
import CommentList from './CommentList';



export interface CommentItems extends CommentInputState {
  id: number;
}

interface AppProps{
  comments: Array<CommentItems>;
}

interface AppState{
  comments: CommentItems[];
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
    if (username === '' || content === '') {
      alert("请输入用户名或内容")
    } else {
      comments.push({username: username, content: content, id: comments.length});
      this.setState({
        comments: comments,
      })
    }
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
