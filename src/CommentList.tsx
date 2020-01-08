import React, { Component } from 'react';
import Comment from './Comment';
import { CommentItems } from './App';

interface CommentListProps {
    comments: CommentItems[],
    onDelete: (id: number) => void;
}

class CommentList extends Component<CommentListProps> {
    static defaultProps:CommentListProps = {
        comments: [],
        onDelete: () => {},
    }
    
    handleDelete = (id: number) => {
        this.props.onDelete(id);
    }

    render (){
        if( this.props.comments.length === 0 ) {
            return null;
        }
        return (
            <div>
                {this.props.comments.map((item,i) => (
                    <div key={i}>
                        <Comment commentItem={item} onDelete={this.props.onDelete}/>
                    </div>
                ))}
            </div>
            
        )
    }
}

export default CommentList;