import React, {Component} from  'react'
import {Link} from 'react-router'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>NASHTY Chat Integration</h1>
                <Link to="/inbox">Inbox</Link>
            </div>
        );
    }
}