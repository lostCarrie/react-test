import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch';
import storeContext from './storeContext';

class Content extends Component {
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
    render() {
        return (
            <div>
                <div style={{color: this.state.themeColor}}>React 小书内容</div>
                <ThemeSwitch />
            </div>
        )
    }
}
Content.contextType = storeContext;
export default Content;