import React, {Component} from 'react'

export default class CardPanel extends Component {
    render() {
        return (
            <div
                className={"card-panel"+ (this.props.color?' '+this.props.color: '')+(this.props.accent?' '+this.props.accent:'')+(this.props.textColor?' '+this.props.textColor:'')}>
                {this.props.children}
            </div>
        );
    }
}

