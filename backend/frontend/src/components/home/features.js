import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

class Features extends React.Component{
  render(){
    const { classes } = this.props;
    return(
      <Grid container xs={20} style={{paddingTop: 20, marginLeft: 50, marginTop: 100, marginRight: 50}}>
        <Grid container spacing={24}>
          <Grid item xs={10}>
            <Paper elevation1>
              <div style={{textAlign: 'center', paddingTop: 30}}>
                <font style={{fontSize: '3pc'}}>Why should I trade on </font><font style={{color: '#1C90F7', fontSize: '3pc'}}>Ledger Shield?</font>
              </div>
              <div style={{textAlign: 'center', marginTop: 50, paddingBottom: 50}}>
                <Grid container xs={10} style={{display: 'inline-flex'}} spacing={24}>
                  <Grid item xs={4}>
                    <Grid container xs={12} style={{justifyContent: 'center'}}>
                      <Grid item xs={3}>
                        <Paper elevation={0}>
                          <img src="/static/123-easy-new.png"/>
                        </Paper>
                      </Grid>
                      <Grid item xs={3} style={{paddingTop: 10}}>
                        <font style={{fontWeight: 'bold', fontSize: 20, paddingTop: 5, marginTop: 10}}>Easy</font>
                      </Grid>
                    </Grid>
                    <div style={{textAlign: 'left', paddingTop: 10}}>
                      <font style={{color: 'grey'}}>
                        Exchange coins with total anonymity in just three steps!
                      </font>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container xs={12} style={{justifyContent: 'center'}}>
                      <Grid item xs={3}>
                        <Paper elevation={0}>
                          <img src="/static/anonymous-new.png"/>
                        </Paper>
                      </Grid>
                      <Grid item xs={3} style={{paddingTop: 10}}>
                        <font style={{fontWeight: 'bold', fontSize: 20, paddingTop: 5, marginTop: 10}}>Anonymous</font>
                      </Grid>
                    </Grid>
                    <div style={{textAlign: 'left'}}>
                      <font style={{color: 'grey'}}>
                        No account or ID required. No coin from other users. Logs held for 48hrs.
                      </font>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container xs={12} style={{justifyContent: 'center'}}>
                      <Grid item xs={3}>
                        <Paper elevation={0}>
                          <img src="/static/secure-new.png"/>
                        </Paper>
                      </Grid>
                      <Grid item xs={3} style={{paddingTop: 10}}>
                        <font style={{fontWeight: 'bold', fontSize: 20}}>Secure</font>
                      </Grid>
                    </Grid>
                    <div style={{textAlign: 'left'}}>
                      <font style={{color: 'grey'}}>
                      Tor user-friendly with our own onion link. No JavaScript in our platform.
                      </font>
                    </div>
                  </Grid>      
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Features);

