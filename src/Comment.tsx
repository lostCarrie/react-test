import React, { Component } from 'react';
import { CommentItems } from './App';

interface CommentProps {
    commentItem: CommentItems;
    onDelete: (id: number) => void;
}

interface CommentState {
    timeString: string;
}

class Comment extends Component<CommentProps, CommentState> {
    static defaultProps = {
        commentItem: {},
        onDelete: () => {},
    }
    _timer: NodeJS.Timer | null = null;
    constructor(props: CommentProps) {
        super(props);
        this.state = {
            timeString: '',
        }
    }
    componentWillMount() {
        this._calTimeDiff();
        this._timer = setInterval(this._calTimeDiff, 5000);
    }

    componentWillUnmount() {
        if (this._timer) {
            clearInterval(this._timer);
        }
    }
    _calTimeDiff = () => {
        const { commentItem } = this.props;
        if (commentItem) {
            const last: any = commentItem.date;
            const now: any = new Date();
            const timeDiff: number = (now - last) / 1000;
            const timeString: string = timeDiff > 60 ? `${Math.round(timeDiff / 1000)}min以前` : `${Math.round(Math.max(timeDiff, 1))}s以前`;
            this.setState({ timeString });
        }
    }
    handleDelete = (id: number) => {
        this.props.onDelete(id);
    }

    render() {
        const { commentItem } = this.props;
        const { timeString } = this.state;
        if (JSON.stringify(commentItem) === '{}') {
            return null;
        }
        const { username, content, id } = commentItem;
        return (
            <div>
                <div>
                    <span>用户名：{username}</span>
                    <span>评论内容：{content}</span>
                    <span>发布时间：{timeString}</span>
                </div>
                <div>
                    <button onClick={() => {this.handleDelete(id)}}>删除</button>
                </div>
            </div>
        )
    }
}

export default Comment;