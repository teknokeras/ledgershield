import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  under: {
    position: 'relative',
    left: '0',
    bottom: '0',
    height: 170,
    width: '100%'
  },
  over: {
    position: 'absolute',
    top: '50px',
    left: '650px',
    fontWeight: 'bold',
    fontSize: 36,
    color: 'white'
  },
  
});

class PageTitle extends React.Component{
  render(){
    const { classes } = this.props;
    return(
      <div style={{position: "relative", marginBottom: 250, height: 100, width: '100%'}}>
        <img src="/static/rectangle_20.png" className={classes.under}/>
        <font className={classes.over}>{this.props.name}</font>
      </div>
    );
  }
}

export default withStyles(styles)(PageTitle);

