import React from 'react';
import Header from '../header';
import Footer from '../footer';
import PageTitle from '../pageTitle';

export default class About extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <PageTitle name={'About Us'} />
        <Footer />
      </div>
    )
  }
}