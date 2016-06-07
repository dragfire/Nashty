import React, {Component} from 'react'
// Card
class CardContent extends Component {
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

class CardReveal extends Component {
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



export default class Card extends Component{
    render(){
        return (
            <div className="card" style={{height: this.props.height}}>
                {this.props.children}
            </div>
        )
    }
}
