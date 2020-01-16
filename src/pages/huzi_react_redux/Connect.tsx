import React, { Component } from 'react';
import storeContext from './storeContext';

//FIXME: 更改mapStateToProps类型
const connect = (mapStateToProps: any, mapDispatchToProps?: any) => (WrappedComponent: React.ComponentClass<any>) => {
    class Connect extends Component {
        state = {
            allProps: {}
        }

        componentDidMount() {
            const { store } = this.context;
            this._updateStoreData();
            store.subscribe(() => this._updateStoreData());
        }

        _updateStoreData = () => {
            const { store } = this.context;
            const stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};
            const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {};
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props,
                }
            })
        }

        render () {
            return (
                <WrappedComponent {...this.state.allProps} />
            )
        }
    }
    Connect.contextType = storeContext;
    return Connect;
}

export default connect;