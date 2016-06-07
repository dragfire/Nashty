import React, {Component} from  'react'

export default class CollectionItem extends Component {
    render() {
        return (
            <a className="collection-item" href={this.props.href} id={this.props.id}>{this.props.children}</a>
        );
    }
}
