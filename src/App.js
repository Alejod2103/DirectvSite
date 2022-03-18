import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router >
      <GlobalStyle />
      {/*
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      */}
      <Switch>
      <Route path='/'>
        <Hero />
        <Products heading='Nuestros Paquetes' data={productData} />
        <Feature />
      </Route>

      <Route exact path='/about'>
        <Products heading='Nuestros Paquetes' data={productData} />
      </Route>
      </Switch>

      <Footer />
    </Router>

    </>


  );
}

export default App;
