import React, {Component} from "react"
import {Collection, CollectionItem} from "../Materialize/Collection"
import CardPanel from "../Materialize/CardPanel"
import {Card, CardContent, CardReveal} from "../Materialize/Card"

let socket;
//Sidebar
export default class SideBar extends Component {
    constructor(props) {
        super(props);
        console.log('Socket Sidebar', this.props.socket);
        socket = this.props.socket;
        this.state = {data: {admins: [], clients: [], inboxCount: 0}};
        this.joinAdmin();
        socket.on('admin joined', data => {
            console.log('Admin joined', data);
            this.setState({
                data: {
                    admins: data.admins,
                    clients: this.state.data.clients,
                    inboxCount: this.state.data.inboxCount
                }
            });
            socket.emit('room:refresh status', {room: 'hayum'});
        });

        socket.on('client joined', data => {
            console.log('Client joined', data);
            this.state.data.inboxCount++;
            this.setState({
                data: {
                    admins: this.state.data.admins,
                    clients: data.clients,
                    inboxCount: this.state.data.inboxCount
                }
            });
            socket.emit('room:refresh status', {room: 'hayum'});
        });

        socket.on('admin left', data => {
            console.log('Admin left', data);
            this.setState({
                data: {
                    admins: data.admins,
                    clients: this.state.data.clients,
                    inboxCount: this.state.data.inboxCount
                }
            });
        });

        socket.on('client left', data => {
            console.log('Client left', data);
            this.setState({
                data: {
                    admins: this.state.data.admins,
                    clients: data.clients,
                    inboxCount: --this.state.data.inboxCount
                }
            });
        });

        socket.on('room:got refresh status', data => {
            this.setState({data: {admins: data.admins, clients: data.clients, inboxCount: this.state.data.inboxCount}});
        });
    }

    joinAdmin() {
        socket.emit('join admin', {role: 'admin', site: 'hayum'});
    }

    handleOnlineStatus(data) {
        console.log('Data', data);
    }

    render() {
        console.log('Sidebar Data', this.state.data);
        this.state.data.admins = this.state.data.admins || [];
        this.state.data.clients = this.state.data.clients || [];
        let OnlineAdmins = this.state.data.admins.map(admin => {
            admin = Object.keys(admin)[0];
            console.log('Admin', admin);
            return (
                <CollectionItem id={admin} key={Math.random()} href={"#"+admin}> {admin}</CollectionItem>
            )
        });

        let OnlineClients = this.state.data.clients.map(client => {
            client = Object.keys(client)[0];
            return (
                <CollectionItem id={client} key={Math.random()} href={"#"+client}> {client}</CollectionItem>
            )
        });

        let style = {
            color: 'red', fontWeight: 'bold'
        };

        return (
            <div className="sidebar navbar outline teal accent-4 z-depth-2">
                <CardPanel>NASHTY DASHBOARD</CardPanel>
                <Collection>
                    <CollectionItem href="/inbox" activeStyle={style}>Inbox
                        {this.state.data.inboxCount ? (
                            <span className="new badge"> {this.state.data.inboxCount}</span>) : ''}
                    </CollectionItem>
                    <CollectionItem href="/home" activeStyle={style}>Home</CollectionItem>
                    <CollectionItem href="/chat" activeStyle={style}>Chat</CollectionItem>
                </Collection>
                <button className="waves-effect waves-light btn pink accent-3">Logout</button>
                <Card height="400px">
                    <CardContent title="Clients Online">
                        <Collection>
                            {OnlineClients}
                        </Collection>
                    </CardContent>
                    <CardReveal title="Admins Online">
                        <Collection>
                            {OnlineAdmins}
                        </Collection>
                    </CardReveal>
                </Card>
            </div>
        );
    }
}