import React from 'react';
import Header from '../header';
import Footer from '../footer';
import PageTitle from '../pageTitle';

export default class Faq extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <PageTitle name={'Faq'} />
        <Footer />
      </div>
    )
  }
}