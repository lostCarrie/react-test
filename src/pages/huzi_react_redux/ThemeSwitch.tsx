import React, { Component } from 'react';
import storeContext from './storeContext';

class ThemeSwitch extends Component {
    state = {
        themeColor: '',
    }
    componentDidMount() {
        const { store } = this.context
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
        
    }

    _updateThemeColor = () => {
        const {store} = this.context;
        if (store) {
            let state = store.getState();
            this.setState({
                themeColor: state.themeColor,
            })
        }
    }
    _handleClick = (color: string) => {
        const { store } = this.context;
            store.dispatch({
                type: 'CHANGE_THEMECOLOR',
                themeColor: color
                });
    }
    render() {
        return (
            <div>
                <button style={{color: this.state.themeColor}} onClick={this._handleClick.bind(this,'red')}>red</button>
                <button style={{color: this.state.themeColor}} onClick={this._handleClick.bind(this,'blue')}>blue</button>
            </div>
        )
    }
}
ThemeSwitch.contextType = storeContext;
export default ThemeSwitch;