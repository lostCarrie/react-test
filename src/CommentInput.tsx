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
        const { onSubmit } = this.props;
        const { username, content } = this.state;
        if ( onSubmit ) {
            onSubmit( username, content);
        }
    }

    render () {
        const { username, content } = this.state;
        return (
            <div>
                <div>
                    <span>用户名：</span>
                    <input value={username} onChange={this.handleContentChange} name="username" />
                </div>
                <div>
                    <span>用户评论：</span>
                    <textarea value={content} onChange={this.handleContentChange} name="content" />
                </div>
                <button onClick={this.handleSubmit}>提交</button>
            </div>
        )
    }
}

export default CommentInput;