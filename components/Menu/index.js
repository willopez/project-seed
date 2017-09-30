import React, { Component } from 'react';
import Link from 'next/link';
import { Nav, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import MenuLink from '../MenuLink';

export default class Menu extends Component {
  state = {
    isOpen: false
  };

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar toggleable className="navbar navbar-dark navbar-expand-md">
        <Link prefetch href="/">
          <NavbarBrand className="masthead-brand" href="/">
            Project
          </NavbarBrand>
        </Link>
        <NavbarToggler right onClick={this.toggleNavbar} />
        <Collapse
          className="justify-content-end"
          isOpen={this.state.isOpen}
          navbar
        >
          <Nav navbar className="nav-masthead">
            <Link prefetch href="/" passHref>
              <MenuLink>HOME</MenuLink>
            </Link>
            <Link prefetch href="/about" passHref>
              <MenuLink>ABOUT</MenuLink>
            </Link>
            <Link prefetch href="/contact" passHref>
              <MenuLink>CONTACT</MenuLink>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
