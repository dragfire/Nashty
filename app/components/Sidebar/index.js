import React, {Component} from  'react'
import {Collection, CollectionItem} from '../Materialize/Collection'
import CardPanel from  '../Materialize/CardPanel'
import {Card, CardContent, CardReveal} from '../Materialize/Card'

//Sidebar
export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar navbar outline teal accent-4 z-depth-2">
                <CardPanel>NASHTY</CardPanel>
                <Collection>
                    <CollectionItem id="SocketId" href="#">Inbox</CollectionItem>
                    <CollectionItem id="SocketId" href="#">Users Online</CollectionItem>
                    <CollectionItem id="SocketId" href="#">Settings</CollectionItem>
                </Collection>
                <button className="waves-effect waves-light btn pink accent-3">Logout</button>
                <Card height="400px">
                    <CardContent title="Admins Online">
                        <Collection>
                            <CollectionItem id="SocketId" href="#">Inbox</CollectionItem>
                            <CollectionItem id="SocketId" href="#">Users Online</CollectionItem>
                            <CollectionItem id="SocketId" href="#">Settings</CollectionItem>
                        </Collection>
                    </CardContent>
                    <CardReveal title="Clients Online">
                        <Collection>
                            <CollectionItem id="SocketId" href="#">Inbox</CollectionItem>
                            <CollectionItem id="SocketId" href="#">Users Online</CollectionItem>
                            <CollectionItem id="SocketId" href="#">Settings</CollectionItem>
                        </Collection>
                    </CardReveal>
                </Card>
            </div>
        );
    }
}