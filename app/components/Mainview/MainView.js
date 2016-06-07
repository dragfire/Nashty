import React, {Component} from 'react'
//MainView
export default class MainView extends Component{
    render() {
        return (
            <div className="mainView outline">
                {this.props.children}
            </div>
        );
    }
}
