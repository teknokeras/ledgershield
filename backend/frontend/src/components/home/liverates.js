import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Bitcoin from './rates/bitcoin';
import BitcoinCash from './rates/bitcoin_cash';
import Ethereum from './rates/ethereum';
import Monero from './rates/monero';
import Ripple from './rates/ripple';

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  exchangeButton: {
    width: '78%',
    backgroundColor: '#F79510',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16',
    height: '50px',
    marginTop: '10px',
    marginLeft: '5px'
  }
});

class LiveRates extends React.Component{
  render(){
    const { classes, data } = this.props;
    return(
      <Grid container xs={20} style={{paddingTop: 20, marginLeft: 50, marginTop: 100}}>
        <Grid item xs={2}><Bitcoin data={data}/></Grid>
        <Grid item xs={2}><Ethereum data={data}/></Grid>
        <Grid item xs={2}><Ripple data={data}/></Grid>
        <Grid item xs={2}><BitcoinCash data={data}/></Grid>
        <Grid item xs={2}><Monero data={data}/></Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(LiveRates);

