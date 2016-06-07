import React, {Component} from  'react'
import {CardPanel, Card, Collection, CollectionItem} from '../Materialize'
//Sidebar
export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar navbar outline teal accent-4 z-depth-2">
                <CardPanel>NASHTY</CardPanel>
                <Collection>
                    <CollectionItem id="SocketId">SocketId</CollectionItem>
                    <CollectionItem id="SocketId">SocketId</CollectionItem>
                    <CollectionItem id="SocketId">SocketId</CollectionItem>
                </Collection>
                <button className="waves-effect waves-light btn pink accent-3">Logout</button>
            </div>
        );
    }
}