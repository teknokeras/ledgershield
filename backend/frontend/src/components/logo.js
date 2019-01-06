import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});


function Logo (props){
	const { classes } = props;

	return(
        <Paper className={classes.paper} elevation={0}>
			<a href='/'>
				<img src={'/static/ledgershield_logo.png'} style={{width:'80%', height:'auto'}} />
			</a>
        </Paper>
  	);

}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
