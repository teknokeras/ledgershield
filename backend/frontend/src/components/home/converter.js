import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
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

class Converter extends React.Component{
    constructor(props){
    super(props);

    this.state = {
      deposit: 'BTC',
      receive: 'ETH'
    }
  }

  handleChange = (event) =>{
    this.setState({ [event.target.name]: event.target.value });
  }

  render(){
    const { classes } = this.props;
    return(
      <Grid container id="converter">
        <Grid container xs={8} style={{paddingLeft: 20, marginTop: 20}}>
          <Grid item xs={8}>
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="deposit" style={{color: '#006BEE', fontSize: '20px'}}>Deposit</InputLabel>
                <Select
                  value={this.state.deposit}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'deposit',
                    id: 'deposit',
                  }}
                  style={{width: '200px'}}
                >
                  <MenuItem value={'BTC'}>
                    <img src="/static/bitcoin_logo.png"/>
                    &nbsp;&nbsp;
                    Bitcoin
                  </MenuItem>
                  <MenuItem value={'ETH'}>
                    <img src="/static/eth_logo.png"/>
                    &nbsp;&nbsp;
                    Ethereum
                  </MenuItem>
                  <MenuItem value={'XRP'}>
                    <img src="/static/ripple_logo.png"/>
                    &nbsp;&nbsp;
                    Ripple
                  </MenuItem>
                  <MenuItem value={'BCH'}>
                    <img src="/static/bitcoin_cash_logo.png"/>
                    &nbsp;&nbsp;
                    Bitcoin Cash
                  </MenuItem>
                  <MenuItem value={'XMR'}>
                    <img src="/static/monero_logo.png"/>
                    &nbsp;&nbsp;
                    Monero
                  </MenuItem>
                </Select>
              </FormControl>
              <img src="/static/Exchange_icon.png" style={{margin: '20px', paddingTop: '15px'}}/>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="receive" style={{color: '#006BEE', fontSize: '20px'}}>Receive</InputLabel>
                <Select
                  value={this.state.receive}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'receive',
                    id: 'receive',
                  }}
                  style={{width: '200px'}}
                >
                  <MenuItem value={'BTC'}>
                    <img src="/static/bitcoin_logo.png"/>
                    &nbsp;&nbsp;
                    Bitcoin
                  </MenuItem>
                  <MenuItem value={'ETH'}>
                    <img src="/static/eth_logo.png"/>
                    &nbsp;&nbsp;
                    Ethereum
                  </MenuItem>
                  <MenuItem value={'XRP'}>
                    <img src="/static/ripple_logo.png"/>
                    &nbsp;&nbsp;
                    Ripple
                  </MenuItem>
                  <MenuItem value={'BCH'}>
                    <img src="/static/bitcoin_cash_logo.png"/>
                    &nbsp;&nbsp;
                    Bitcoin Cash
                  </MenuItem>
                  <MenuItem value={'XMR'}>
                    <img src="/static/monero_logo.png"/>
                    &nbsp;&nbsp;
                    Monero
                  </MenuItem>
                </Select>
              </FormControl>
            </form>
          </Grid>
          <Grid item xs={8}>
            <button className={classes.exchangeButton}>EXCHANGE YOUR COINS SAFELY</button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Converter);

