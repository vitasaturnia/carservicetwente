import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from '../images/logo.svg';
import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';
import '../scss/styles.css'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <h4 className="logotext"></h4>

    <div className="container has-text-centered ">

    <div className="logo-mobile">
            <Link to="/">
              <img alt="Figurit Homepage" src={logoMobile} />
            </Link>

      </div>

      <MenuMobile active={this.state.menuActive} />

      <Hamburger toggleMenu={this.toggleMenu} />





      </div>

      </div>














  );
  }
}

export default Header;
