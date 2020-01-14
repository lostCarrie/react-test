import React, { Component } from 'react';
import storeContext from './storeContext';

class Header extends Component {
    
    
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
            <h1 style={{color: this.state.themeColor}}>《React 小书》</h1>
        )
    }
}
Header.contextType = storeContext;
export default Header;