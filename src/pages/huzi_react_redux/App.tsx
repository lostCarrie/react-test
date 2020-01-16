import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import storeContext, { store } from './storeContext';

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