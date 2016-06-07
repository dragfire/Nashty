import React, {Component} from 'react'

export default class Card extends Component{
    render(){
        return (
            <div className="card" style={{height: this.props.height}}>
            </div>
        )
    }
}
