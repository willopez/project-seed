import React, { Component } from 'react';
import Link from 'next/link';
import {
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap';

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
      <Navbar
        toggleable
        className="navbar navbar-dark bg-dark navbar-expand-md sticky-top "
        style={{ marginBottom: 10 }}
      >
        <Link prefetch href="/">
          <NavbarBrand href="/">Static Project Seed</NavbarBrand>
        </Link>
        <NavbarToggler right onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link prefetch href="/">
                <NavLink className="text-light" href="/">
                  Home
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link prefetch href="/about">
                <NavLink className="text-light" href="#">
                  About
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
