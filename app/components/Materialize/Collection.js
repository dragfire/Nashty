import React, {Component} from  'react'

export class CollectionItem extends Component {
    render() {
        return (
            <a className="collection-item" href={this.props.href} id={this.props.id}>{this.props.text}</a>
        );
    }
}

export default class Collection extends Component {
    render() {
        return (
            <div className="collection">
                {this.props.children}
            </div>
        )
    }
}