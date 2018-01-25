import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="red darken-3">
                <div >
                <ul>
                    <li><Link to="/beginning">Beginning</Link></li>
                    <li><Link to="/middle">Middle</Link></li>
                    <li><Link to="/end">End</Link></li>
                    <li><Link to="/epilog">Epilogue</Link></li>
                </ul>
    </div>
  </nav>
      </div>
    )
  }
}

export default Navbar;