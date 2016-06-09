import React, {Component} from  'react'
import {Link} from 'react-router'

export default class CollectionItem extends Component {
    render() {
        return (
            <Link {...this.props} className="collection-item"  id={this.props.id} to={this.props.href} >{this.props.children}</Link>
        );
    }
}
