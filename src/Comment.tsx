import React, { Component } from 'react';
import { CommentItems } from './App';

interface CommentProps {
    commentItem: CommentItems;
}

class Comment extends Component<CommentProps> {
    static defaultProps = {
        commentItem: {},
    }
    render (){
        const { commentItem } = this.props;
        if (JSON.stringify(commentItem) === '{}') {
            return null;
        }
        const {username, content} = commentItem;
        return (
            <div>
                <span>用户名：{ username }</span>
                <span>评论内容：{ content }</span>
            </div>
        )
    }
}

export default Comment;