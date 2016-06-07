import React, {Component} from 'react'

export default class CardContent extends Component {
    render() {
        return (
            <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{this.props.title}
                                <i className="material-icons right">more_vert</i>
                            </span>
                {this.props.children}
            </div>
        );
    }
}
