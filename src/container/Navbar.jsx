import React,{ Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="navbar-fixed">
                    <nav>
                  <div className="nav-wrapper blue">
                    <a className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
        )
    }
}

export default Navbar;
