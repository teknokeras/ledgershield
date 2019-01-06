import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class Description extends React.Component{
  render(){
    return(
      <Grid container id="title" style={{marginTop: 20}}>
        <Grid item xs={5}>
          <Paper elevation={0} style={{padding: 20}}>
            <font size="7">                
              Which coins do you want to 
            </font>
            &nbsp;
            &nbsp;
            &nbsp;
            <font size="7" color="#006BEE">                
              exchange?
            </font>
          </Paper>
          <Paper elevation={0} style={{padding: 20}}>
            <font size="3" color="#90919E">                
              Trade your coins in three simple steps 
            </font>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}


