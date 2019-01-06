import React from 'react';

import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	root: {
    	flexGrow: 1,
    	marginTop: '20px',
    	textAlign: 'right'
  	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}
});

var navItemStyle ={
	lineHeight: '1.5',
	paddingTop: '0.5 rem',
	paddingRight: '1 rem',
	paddingBottom: '0.75 rem',
	paddingLeft: '1 rem',
	position: 'relative',
	display: 'block',
	flexGrow: 0,
	flexShrink: 0,
	color: 'white',
	fontWeight: 'bold',
	fontSize: '13px',
	background: 'transparent',
	marginLeft: '50px'
};

var navLinkStyle ={
	lineHeight: '1.5',
	paddingTop: '0.5 rem',
	paddingRight: '1 rem',
	paddingBottom: '0.75 rem',
	paddingLeft: '1 rem',
	position: 'relative',
	display: 'block',
	flexGrow: 0,
	flexShrink: 0,
	color: 'white',
	fontWeight: 'bold',
	fontSize: '13px',
	background: 'transparent',
	marginLeft: '50px'
};

function Menu (props){
	const { classes } = props;

	return(
        <div class="navbar-start" style={{marginTop: 40}}>
			<NavLink to="/" style={navItemStyle}>
				Home
			</NavLink>
			<NavLink to="/how" style={navItemStyle}>
				How It Works
			</NavLink>
			<div class="navbar-item has-dropdown is-hoverable">
				<a style={navLinkStyle}>
				  About Us
				</a>
				<div class="navbar-dropdown is-boxed">
					<NavLink to="/about" class="navbar-item">
						About Us
					</NavLink>
					<NavLink to="/faq" class="navbar-item">
						FAQ
					</NavLink>
				</div>
			</div>
			<NavLink to="/help" style={navItemStyle}>
				Help Center
			</NavLink>
			<NavLink to="/media" style={navItemStyle}>
				Media
			</NavLink>
	    </div>
  	);

}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);