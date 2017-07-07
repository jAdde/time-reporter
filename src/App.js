import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import AppLogo from './components/AppLogo';


class App extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-inverse visible-xs">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <h3 className='navbar-header'>Välkommen</h3>
                </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                  <SideBar/>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row content">
              <div className="col-sm-3 sidenav hidden-xs">
                <h2>Välkommen</h2>
                <hr />
                  <SideBar />
                <br/>
              </div>
              <br/>
              <div className="col-sm-9">
              <AppLogo />
              </div>
              {this.props.children}
              </div>
            </div>
          </div>
    );
  }
}

export default App;
