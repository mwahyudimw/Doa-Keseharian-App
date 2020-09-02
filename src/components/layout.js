import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
	render() {
		const { location, title, children } = this.props;
		const rootPath = `${__PATH_PREFIX__}/`;
		const blogPath = `${__PATH_PREFIX__}/blog/`;
		let header;

		if (location.pathname === rootPath || location.pathname === blogPath) {
			header = (
				<h1
					style={{
						...scale(1.5),
						marginBottom: rhythm(1.5),
						marginTop: 0
					}}
				>
					<Link
						style={{
							boxShadow: `none`,
							textDecoration: `none`,
							color: `inherit`
						}}
						to={location.pathname === blogPath ? `/blog/` : `/`}
					>
						{title}
					</Link>
				</h1>
			);
		} else {
			header = (
				<h3
					style={{
						fontFamily: `Montserrat, sans-serif`,
						marginTop: 0
					}}
				>
					<Link
						style={{
							boxShadow: `none`,
							textDecoration: `none`,
							color: `inherit`
						}}
						to={`/blog/`}
					>
						{title}
					</Link>
				</h3>
			);
		}
		return (
			<Wrapper>
				<div
					style={{
						marginLeft: `auto`,
						marginRight: `auto`,
						maxWidth: rhythm(24),
						padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
					}}
				>
					<header style={{ fontFamily: 'montserrat' }}>{header}</header>
					<div style={{ width: '100%', height: 'auto', background: '#fff', borderRadius: '10px', boxShadow: '0 0 5px gray', padding: '50px', fontFamily: 'montserrat' }}>
						<main style={{ fontFamily: 'montserrat', }}>{children}</main>
					</div>
				</div>
				<Footer style={{ fontFamily: 'montserrat', color: '#fff' }}>
					© {new Date().getFullYear()} Doa App, By Silontong Dakwah
				</Footer>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`min-height: 100vh;`;

const Footer = styled.footer`
	text-align: center;
	margin: 24px;
`;

export default Layout;
