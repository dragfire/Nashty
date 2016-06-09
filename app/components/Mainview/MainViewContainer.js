import React, {Component} from  'react'

let socket;

export default class MainViewContainer extends Component {

    render() {
        console.log('Socket MVC', this.props.socket.id);
        return (
            <div className="container lighten-3">
                {this.props.children}
            </div>
        );
    }
}