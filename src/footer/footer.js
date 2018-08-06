import React from 'react';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="bs-bose-footer">
    			<ul className="bs-footer-links">
    				<li><a href="#"><strong>Policies</strong></a></li>
    				<li><a href="#"><strong>Privacy</strong></a></li>
    			</ul>

    			<div className="bs-footer-logo-details">
    				<img src="/src/images/footer-logo.png" alt="Bose" title="Bose" />
    				<p>&copy; Bose Corporation 2018</p>
    			</div>
    		</footer>
        );
    }
}
