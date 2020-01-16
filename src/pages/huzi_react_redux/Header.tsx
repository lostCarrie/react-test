import React, { Component } from 'react';
import connect from './Connect';

interface headerProps {
    themeColor: string;
}
class HeaderCom extends Component<headerProps>{
    
    render() {
        return (
            <h1 style={{color: this.props.themeColor}}>《React 小书》</h1>
        )
    }
}
const mapStateToProps = (state: any): any => {
    return {
        themeColor: state.themeColor,
    };
}

const Header = connect(mapStateToProps)(HeaderCom);

export default Header;