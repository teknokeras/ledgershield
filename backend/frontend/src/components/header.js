import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Logo from './logo';
import Menu from './menu';

export default class Header extends React.Component{
  render(){
    return(
      <Grid container spacing={24} id="header">
        <Grid item xs={3}>
          <Logo/>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <Menu />
        </Grid>
      </Grid>
    );
  }
}


