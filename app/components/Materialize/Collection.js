import React, {Component} from  'react'

export default class Collection extends Component {
    render() {
        return (
            <div className="collection">
                {this.props.children}
            </div>
        )
    }
}