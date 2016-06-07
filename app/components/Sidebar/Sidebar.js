import React, {Component} from  'react'

//Sidebar
export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar navbar outline teal accent-4 z-depth-2">
                <CardPanel>NASHTY</CardPanel>
                <NavButtons/>
                <button className="waves-effect waves-light btn pink accent-3">Logout</button>
                <Card />
            </div>
        );
    }
}