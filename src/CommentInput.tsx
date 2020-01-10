import React, { Component } from 'react';
import wrapWithLoadData from './wrapWithLoadData';


interface CommentInputProps {
    data: string;
    saveData: (data: string) => void;
    onSubmit: (username: string, content: string) => void;
}

export interface CommentInputState {
    username: string;
    content: string;
}


class Input extends Component<CommentInputProps, CommentInputState> {
    static defaultProps = {
        onSubmit: () => {},
    }
    textarea:HTMLTextAreaElement | null = null;
    constructor(props: CommentInputProps) {
        super(props);
        this.state = {
            username: props.data || '',
            content: '',
        };
    }

    componentDidMount() {
        if (this.textarea) {
            this.textarea.focus(); 
        }
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

    handleUsernameBlur = (e: any) =>{
        this.props.saveData(e.target.value);
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
                    <input value={username} onChange={this.handleContentChange} name="username" onBlur={this.handleUsernameBlur} />
                </div>
                <div>
                    <span>用户评论：</span>
                    <textarea value={content} onChange={this.handleContentChange} name="content"  ref={(textarea) => this.textarea = textarea}/>
                </div>
                <button onClick={this.handleSubmit}>提交</button>
            </div>
        )
    }
}

const CommentInput = wrapWithLoadData(Input, 'username');
export default CommentInput;