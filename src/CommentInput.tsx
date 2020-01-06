import React, { Component } from 'react';

interface CommentInputProps {
    onSubmit: (username: string, content: string) => void;
}

export interface CommentInputState {
    username: string;
    content: string;
}


class CommentInput extends Component<CommentInputProps, CommentInputState> {
    static defaultProps = {
        onSubmit: () => {},
    }

    constructor(props: CommentInputProps) {
        super(props);
        this.state = {
            username: '',
            content: '',
        };
    }

    handleContentChange = (e: any) => {
        console.log(e.target);
        if ( e.target.name === 'username') {
            this.setState({
                        username: e.target.value,
                    });
        }
        if ( e.target.name === 'content') {
            this.setState({
                        content: e.target.value,
                    });
        }
        
    }

    handleSubmit = () => {
        const { username, content } = this.state;
        if ( this.props.onSubmit ) {
            this.props.onSubmit( username, content);
        }
    }

    render () {
        return (
            <div>
                <div>
                    <span>用户名：</span>
                    <input value={this.state.username} onChange={this.handleContentChange} name="username" />
                </div>
                <div>
                    <span>用户评论：</span>
                    <textarea value={this.state.content} onChange={this.handleContentChange} name="content" />
                </div>
                <button onClick={this.handleSubmit}>提交</button>
            </div>
        )
    }
}

export default CommentInput;