import React from 'react';
import './Footer.scss';
import {ReactComponent as LogoBookmark} from '../../images/logo-bookmark.svg';
import {ReactComponent as IconFB} from '../../images/icon-facebook.svg';
import {ReactComponent as IconTwtr} from '../../images/icon-twitter.svg';

export default function Footer() {
	return (
		<footer>
			<div className="navigation">
				<a className="brand" href="./">
					<LogoBookmark className="logo" alt="logo-bookmark" />
				</a>
				<a className="navlink" href="/">Features</a>
				<a className="navlink" href="/">Pricing</a>
				<a className="navlink" href="/">Contact</a>
			</div>
			
			<div className="social-links">
				<a href="./">
					<IconFB className="icon-fb" alt="icon-fb" />
				</a>
				<a href="./">
					<IconTwtr className="icon-twtr" alt="icon-twtr" />
				</a>
			</div>

			{/* <p class="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="#">Your Name Here</a>.
    	</p> */}
		</footer>
	)
}