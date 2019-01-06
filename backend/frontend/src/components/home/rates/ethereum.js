import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Ethereum extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      priceUsd: null,
      change24: null,
      isUp: null
    }
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).

    const {data} = nextProps;

    if(data == null){
      return null;
    }

    const SYMBOL = 'ETH';

    const jsonData = JSON.parse(data);

    let newData = null;

    for (let index in jsonData){
      const coin = jsonData[index];
      if (coin.symbol == SYMBOL){
        newData = coin;
        break;
      }
    }

    if(newData == null){
      return null;
    }

    let changeUp = false;
    if (newData.percent_change_24h > 0.00){
      changeUp = true;
    }

    const newState = {priceUsd: newData.price_usd.toFixed(2), change24: newData.percent_change_24h.toFixed(1), isUp: changeUp};

    return newState;
  }

  displayChange = () =>{
    if(this.state.isUp){
      return (<font style={{color: 'green'}}>{this.state.change24}%</font>);
    }else{
      if(!this.state.isUp){
        return (<font style={{color: 'red'}}>{this.state.change24}%</font>); 
      }else{
        return (<font style={{color: 'grey'}}>N/A</font>); 
      }
    }
  }

  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <Grid container xs={12}>
          <Grid item xs={2}>
            <Paper elevation={0}>
              <img src="/static/eth_logo.png"/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <div><font style={{fontWeight: 'bold'}}>Ethereum</font></div>
            <div><font style={{color: 'grey'}}>${this.state.priceUsd}</font></div>
          </Grid>
          <Grid item xs={4}>
            <div><font style={{color: 'grey'}}>24H</font></div>
            <div>{this.displayChange()}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Ethereum);

