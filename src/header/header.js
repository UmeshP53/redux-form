import React from 'react';

export default class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bs-navbar">
                <img src="/src/images/footer-logo.png" alt="Bose" title="Bose" className="bs-left-logo" />
                <a className="navbar-brand bs-nav-link" href="https://www.bose.com/">
                    <img className="img-fluid bs-logo" src="/src/images/logo.png" alt="Bose" title="Bose" />
                </a>
            </nav>
        );
    }
}
