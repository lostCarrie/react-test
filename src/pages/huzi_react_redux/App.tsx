import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import storeContext from './storeContext';

function themeReducer(state: any, action: any) {
    if (!state) {
        return {
            themeColor: 'red',
        }
    }
    switch (action.type) {
        case 'CHANGE_THEMECOLOR':
            return {
                ...state,
                themeColor: action.themeColor,
            }
        default:
            return state;
    }
}

function createStore(reducer: any) {
    let state: any = null;
    const getState = () => state;
    const listeners: any[] = [];
    const subscribe = (listener: any) => {
        listeners.push(listener);
    }
    const dispatch = (action: any) => {
        state = reducer(state, action);
        listeners.map(listener => listener());
    }
    dispatch({});
    return { getState, dispatch, subscribe }
}
const store = createStore(themeReducer);

class App extends Component {
    render() {
        return (
            <storeContext.Provider value={{store}}>
                <div>
                    <Header />
                    <Content />
                </div>
            </storeContext.Provider>

        )
    }
}
export default App;