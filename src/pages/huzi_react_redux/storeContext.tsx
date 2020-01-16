import React from 'react';

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
export const store = createStore(themeReducer);

const storeContext = React.createContext({store});

export default storeContext;