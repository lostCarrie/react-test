import React, { Component } from 'react';
import { CommentItems } from './App';

interface CommentProps {
    commentItem: CommentItems;
}

interface CommentState {
    timeDiff: number;
}

class Comment extends Component<CommentProps, CommentState> {
    static defaultProps = {
        commentItem: {},
    }

    constructor(props: CommentProps) {
        super(props);
        this.state = {
            timeDiff: 0,
        }
    }

    componentWillMount() {
        setInterval(this.calTimeDiff, 5000);
    }

    calTimeDiff () {
        // const { commentItem } = this.props; 
        // if (commentItem) {
        //     const last: any = commentItem.date;
        //     const now: any = new Date();
        //     const timeDiff: number = (now - last);
        //     this.setState({timeDiff});
        // }
    }
    render (){
        const { commentItem } = this.props;
        const { timeDiff } = this.state;
        if (JSON.stringify(commentItem) === '{}') {
            return null;
        }
        const {username, content, date} = commentItem;
        return (
            <div>
                <span>用户名：{ username }</span>
                <span>评论内容：{ content }</span>
                <div>发布时间：{ timeDiff }min以前</div>
            </div>
        )
    }
}

export default Comment;