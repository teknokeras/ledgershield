import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Logo from './logo';
import Menu from './menu';

const styles = theme => ({
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class Footer extends React.Component{
	render(){
		    const { classes } = this.props;

		return(
			<div style={{marginTop: 70}}>
				<Divider/>
			      	<Grid container spacing={24} id="header">
				        <Grid item xs={3}>
				          	<Logo/>
        <Paper className={classes.paper} elevation={0}>
				          		<font style={{color: 'grey', fontSize: '1pc'}}>© LedgerShield 2018</font>
				          	</Paper>
				        </Grid>
				        <Grid item xs={3}>
				        </Grid>
				        <Grid item xs={6}>
				          	<Menu />
				        </Grid>
			      	</Grid>			
      		</div>
      	)
	}
}

export default withStyles(styles)(Footer);
