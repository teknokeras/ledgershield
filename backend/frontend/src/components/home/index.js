import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Logo from '../logo';
import Menu from './menu';
import Header from './header';
import Description from './description';
import Converter from './converter';
import LiveRates from './liverates';
import Features from './features';
import WorldMap from './world_map';
import NeedHelp from './need_help';
import Video from './video';

import Footer from '../footer';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  background: {
    backgroundImage: 'url(/static/knigh2t-01.png)',
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'top right',
    height: '100%',
    width: '100%'
  },
  card: {
    maxWidth: '50%',
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
});

function Home(props) {
  const { classes, data } = props;
  return (
    <div>
      <div className={classes.background}>
        <Header />
        <Description />
        <Converter/>
        <LiveRates data={data}/>
        <Features />
        <WorldMap/>
        <Video/>
        <NeedHelp />
        <Footer />
      </div>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);