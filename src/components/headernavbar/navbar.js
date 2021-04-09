import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return(
            <div className='navbar'>
                {
                    this.props.navbarLinks.map(link => {
                        return (
                            <a className={`navbar__link ${link.active ? 'green-text' : ''}`}key={index} onClick={() => this.props.changeNavbarActive(link._id)}>
                                {link.title}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const{ headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;