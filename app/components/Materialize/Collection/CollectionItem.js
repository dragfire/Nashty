import React, {Component} from  'react'
import {Link} from 'react-router'

export default class CollectionItem extends Component {
    render() {
        //console.log('CI:', this.props);
        let CItem = this.props.to
            ? ( <Link {...this.props} className="collection-item">
                    {this.props.children}
                </Link> )
            : ( <a {...this.props} className="collection-item">
                    {this.props.children}
                </a> );
        return (
            CItem
        );
    }
}