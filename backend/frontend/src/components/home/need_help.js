import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  exchangeButton: {
    width: '78%',
    backgroundColor: '#F79510',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16',
    height: '50px',
    marginTop: '30px',
    marginLeft: '5px'
  }
});

class NeedHelp extends React.Component{
  render(){
    const { classes } = this.props;
    return(
      <Grid container id="header" style={{marginTop: 70, marginLeft: 50, marginRight: 20}}>
        <Grid item xs={7}>
          <div>
            <font style={{fontSize: '3pc'}}>Need Help?</font>
          </div>
          <div style={{marginTop: 25}}>
            <font style={{color: 'grey', fontSize: '1.5pc'}}>Our help center is able to answer any questions regarding your transaction.</font>
          </div>
        </Grid>
        <Grid item xs={3}>
            <button className={classes.exchangeButton}>EXCHANGE YOUR COINS SAFELY</button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NeedHelp);
