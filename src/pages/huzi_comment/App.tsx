import React, { Component } from 'react';
import CommentInput, { CommentInputState } from './CommentInput';
import CommentList from './CommentList';
import wrapWithLoadData from './wrapWithLoadData';



export interface CommentItems extends CommentInputState {
  id: number;
  date: number;
}

interface AppProps{
  data: Array<CommentItems>;
  saveData: (data: Array<CommentItems>) => void;
}

interface AppState{
  comments: CommentItems[];
}

class CommentApp extends Component<AppProps, AppState> {
  static defaultProps:AppProps = {
    data: [],
    saveData: () => {},
  }
  constructor(props: AppProps) {
    super(props);
    this.state = {
      comments: props.data || [],
    }
  }

  handleSubmit = (username: string, content: string) => {
    var { comments } = this.state;
    if (username === '' || content === '') {
      alert("请输入用户名或内容")
    } else {
      sessionStorage.setItem('username', username);
      comments.push({username: username, content: content, id: comments.length, date: +new Date()});
      this.props.saveData(comments);
      this.setState({comments});
    }
  }

  handleDelete = (index: number) => {
    const { comments } = this.state;
    comments.splice(index, 1);
    this.setState({comments});
    this.props.saveData(comments);
  }

  render () {
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmit} />
        <CommentList comments={this.state.comments} onDelete={this.handleDelete}/> 
      </div>
    )
  }
}

const App = wrapWithLoadData(CommentApp, 'comments');
export default App;
