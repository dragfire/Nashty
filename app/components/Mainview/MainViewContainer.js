import React, {Component} from  'react'
import {Router} from 'react-router'

let socket;
let sokcetid;

export default class MainViewContainer extends Component {
    constructor() {
        super();
        this.state = {left: false};
    }

    componentDidMount() {
        socket = this.props.socket;
        socket.on('client left', data => {
            console.log('MainViewContainer::Client Left');
            this.setState({left: true});
        });
        
        socket.on('admin:admin assigned', function (data) {
            
        })
    }

    componentWillReceiveProps(newProps) {
        this.setState({left: false});
    }



    render() {
        console.log('Socket MVC', this.props.socket.id);
        return (
            <div className="container lighten-3">
                {this.state.left ? (<div><h1>Left</h1></div>) : this.props.children}
            </div>
        );
    }
}