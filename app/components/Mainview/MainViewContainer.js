import React, {Component} from  'react'

let socket;

export default class MainViewContainer extends Component {
    constructor(){
        super();
        socket = this.props.socket;
        this.state = {left: false};
        socket.on('client left', function (data) {
            console.log('MainViewContainer::Client Left');
            this.setState({left: true});
        });
    }

    render() {
        console.log('Socket MVC', this.props.socket.id);
        return (
            <div className="container lighten-3">
                {this.state.left?(<div>Left</div>): this.props.children}
            </div>
        );
    }
}