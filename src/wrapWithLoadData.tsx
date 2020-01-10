import React, { Component } from 'react';

export default (WrappedComponent: React.ComponentClass<any>, name: string) => {

    interface SessionStorageState {
        data: string | object | null;
    }

    class SessionStorageAction extends Component<any, SessionStorageState> {
        constructor(props: any) {
            super(props);
            this.state = {
                data: null,
            }
        }

        componentWillMount() {
            let data = sessionStorage.getItem(name);
            try {
                this.setState({data: JSON.parse(data as string)});
            } catch (e) {
                this.setState({data});
            }
        }

        saveData(data: string | object) {
            try {
                sessionStorage.setItem(name, JSON.stringify(data));
            } catch (e) {
                sessionStorage.setItem(name, data as string);
            }
        }

        render() {
            return (
                <WrappedComponent data={this.state.data} saveData={this.saveData} {...this.props}/>
            )
        }
    }

    return SessionStorageAction;
}