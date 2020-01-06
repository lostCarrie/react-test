import React, { Component } from 'react';
import Comment from './Comment';
import { CommentInputState } from './CommentInput';

interface CommentListProps {
    comments: Array<CommentInputState>,
}

class CommentList extends Component<CommentListProps> {
    static defaultProps:CommentListProps = {
        comments: [],
    }
    render (){
        return (
            <div>
                {this.props.comments.map(comment => (
                    <div>
                        <Comment />
                    </div>
                ))}
            </div>
            
        )
    }
}

export default CommentList;