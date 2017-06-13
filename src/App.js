import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import AppLogo from './components/AppLogo';

let welcomeText = "Välkommen";

let menuBtn =
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>
      <h3 className='navbar-header'>{welcomeText}</h3>
    </div>;

interface myProps {}
interface myState {}

class App extends Component<myProps, myState> {

  render() {
    return (
        <div>
          <nav className="navbar navbar-inverse visible-xs">
            <div className="container-fluid">
              {menuBtn}
              <div className="collapse navbar-collapse" id="myNavbar">
                  <SideBar/>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row content">
              <div className="col-sm-2 sidenav hidden-xs">
                <h2>{welcomeText}</h2>
                <hr />
                  <SideBar />
                <br/>
              </div>
              <br/>
              <div className="col-lg-8">
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
