import React, {Component} from 'react'

export default class CardReveal extends Component {
    render() {
        return (
            <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{this.props.title}
                                <i className="material-icons right">close</i>
                            </span>
                {this.props.children}
            </div>
        );
    }
}
