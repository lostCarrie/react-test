import React, { Component } from 'react';
import { CommentInputState } from './CommentInput';

class Comment extends Component<CommentInputState> {
    static defaultProps = {
        comment: {},
    }
    constructor(props: <CommentInputState>) {
        super(props);
    }
    render (){
        const {username, content} = this.props.comment;
        return (

            <div>
                <span>{ username }</span>
                <span>{ content }</span>
            </div>
        )
    }
}

export default Comment;