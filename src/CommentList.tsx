import React, { Component } from 'react';
import Comment from './Comment';
import { CommentItems } from './App';

interface CommentListProps {
    comments: CommentItems[],
    onDelete: (index: number) => void;
}

class CommentList extends Component<CommentListProps> {
    static defaultProps:CommentListProps = {
        comments: [],
        onDelete: () => {},
    }
    
    handleDelete = (index: number) => {
        this.props.onDelete(index);
    }

    render (){
        
        return (
            <div>
                {this.props.comments.map((item,i) => (
                    <Comment commentItem={item} onDelete={this.props.onDelete} key={i} index={i} />
                ))}
            </div>
            
        )
    }
}

export default CommentList;