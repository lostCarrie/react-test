import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch';
import connect from './Connect';

interface ContentProps {
    themeColor: string;
}
class ContentCom extends Component<ContentProps> {

    render() {
        return (
            <div>
                <div style={{color: this.props.themeColor}}>React 小书内容</div>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state: any):any => {
    return {
        themeColor: state.themeColor,
    }
}

const Content = connect(mapStateToProps)(ContentCom);
export default Content;