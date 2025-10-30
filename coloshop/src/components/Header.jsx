import React from "react";
import TopNavbar from './Top-Navbar.jsx';
import Navbar from './Navbar.jsx';


class Header extends React.Component {
  render() {
    return <header>
        {/* <h1>Welcome to ColoShop</h1> */}
        <TopNavbar />
        <Navbar />
    </header>
    }
}

export default Header;