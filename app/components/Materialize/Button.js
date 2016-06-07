import React, {Component} from  'react'

export default class Button extends Component {
    render() {
        return (
            <a className="collection-item" id={this.props.sid}>Socket ID: {this.props.sid}</a>
        );
    }
}