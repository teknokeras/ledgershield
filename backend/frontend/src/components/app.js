import React from 'react';
import { Route, Link } from 'react-router-dom';
import Sockette from 'sockette';

import Home from './home/index';
import How from './how/index';
import About from './about/index';
import Help from './help/index';
import Media from './media/index';
import Faq from './faq/index';

const SERVER = "localhost";

export default class App extends React.Component{

  constructor(props){
    super(props);

    const ws = new Sockette('ws://'+SERVER+'/ws/coinrates/', {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: e => this.onOpen(e),
      onmessage: e => this.onMessage(e),
      onreconnect: e => this.onReconnect(e),
      onmaximum: e => this.onMaximum(e),
      onclose: e => this.onClose(e),
      onerror: e => this.onError(e)
    });

    this.state = {
      socket: ws,
      data: null
    }
  }

  onOpen = (e) =>{
    console.log('Connected!', e);
  }

  onMessage = (e) =>{
    this.setState({data: e.data});
  }

  onReconnect = (e) =>{
    console.log('Reconnecting...', e)
  }

  onMaximum = (e) =>{
    console.log('Stop Attempting!', e)
  }

  onClose = (e) =>{
    console.log('Closed!', e)
  }

  onError = (e) =>{
    console.log('Error:', e)
  }

  componentDidMount(){
    fetch('http://'+SERVER+'/coin/prices/')
      .then(response => response.json())
      .then(data => this.setState({data: JSON.stringify(data)}));
  }

	render(){
		return(
      <div>
        <Route exact path="/" render={(props) => <Home {...props} data={this.state.data} />} />
        <Route path="/how" component={How} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/help" component={Help} />
        <Route path="/media" component={Media} />
      </div>
    )
	}
}


