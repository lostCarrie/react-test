import React, { Component } from 'react';
import Comment from './Comment';
import { CommentItems } from './App';

interface CommentListProps {
    comments: CommentItems[],
}

class CommentList extends Component<CommentListProps> {
    static defaultProps:CommentListProps = {
        comments: [],
    }
    render (){
        if( this.props.comments.length === 0 ) {
            return null;
        }
        return (
            <div>
                {this.props.comments.map(item => (
                    <div key={item.id}>
                        <Comment commentItem={item} />
                    </div>
                ))}
            </div>
            
        )
    }
}

export default CommentList;