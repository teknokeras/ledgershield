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

class WorldMap extends React.Component{
  render(){
        const { classes } = this.props;
    return(
      <Grid container id="header" style={{marginTop: 70, marginLeft: 50, marginRight: 20}}>
        <Grid item xs={5}>
          <div>
            <font style={{fontSize: '3pc'}}>We make tracking </font><font style={{color: '#1C90F7', fontSize: '3pc'}}>virtually impossible.</font>
          </div>
          <div style={{marginTop: 25}}>
            <font style={{color: 'grey', fontSize: '1.5pc'}}>Using tumbler or altcoins does not make you save! LedgerShield stays ahead of the tracking companies to keep you protected</font>
          </div>
          <div>
            <button className={classes.exchangeButton}>EXCHANGE YOUR COINS SAFELY</button>
          </div>
          <div style={{marginTop: 25, marginLeft: 10}}>
            Need more information? See out <font style={{color: '#1C90F7'}}>FAQ page</font>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src="/static/map-with-arrow.png"/>
        </Grid>
      </Grid>
    );
  }
}


export default withStyles(styles)(WorldMap);
