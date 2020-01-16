import React, { Component } from 'react';
import connect from './Connect';


interface themeSwitchProps {
    themeColor: string;
    onSwitchColor: (color: string) => any;
}

class ThemeSwitchCom extends Component<themeSwitchProps> {
    
    _handleClick = (color: string) => {
        const { onSwitchColor } = this.props;
        if (onSwitchColor) {
            onSwitchColor(color);
        }
    }
    render() {
        return (
            <div>
                <button style={{color: this.props.themeColor}} onClick={this._handleClick.bind(this,'red')}>red</button>
                <button style={{color: this.props.themeColor}} onClick={this._handleClick.bind(this,'blue')}>blue</button>
            </div>
        )
    }
}

const mapStateToProps = (state: any): any => {
    return {
        themeColor: state.themeColor,
    };
}


const mapDispatchToProps = (dispatch: any): any => {
    return {
        onSwitchColor: (color: string) => {
            dispatch({type: 'CHANGE_THEMECOLOR', themeColor: color});
        }
    }
}
const ThemeSwitch = connect(mapStateToProps,mapDispatchToProps)(ThemeSwitchCom);
export default ThemeSwitch;