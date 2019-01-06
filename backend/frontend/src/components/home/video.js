import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  under: {
    position: 'relative',
    left: '0',
    bottom: '0',
  },
  over: {
    position: 'absolute',
    top: '-80px',
    left: '350px'
  },
  
});

class Video extends React.Component{
  render(){
    const { classes } = this.props;
    return(
      <div style={{position: "relative", marginTop: 150}}>
        <img src="/static/rectangle_20.png" className={classes.under}/>
        <img src="/static/video.png" className={classes.over}/>
      </div>
    );
  }
}

export default withStyles(styles)(Video);

