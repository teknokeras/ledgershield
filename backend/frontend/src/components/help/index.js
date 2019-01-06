import React from 'react';
import Header from '../header';
import Footer from '../footer';
import PageTitle from '../pageTitle';

export default class Help extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <PageTitle name={'Help'} />
        <Footer />
      </div>
    )
  }
}