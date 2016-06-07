import React, {Component} from  'react'

export default class MainViewContainer extends Component {
    render() {
        return (
            <div className="container lighten-3">
                {this.props.children}
            </div>
        );
    }
}