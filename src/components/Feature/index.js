import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      
       <h1>El Mejor Servicio de TV en Puerto Rico</h1>
      
      <p>Descubre el plan ideal para ti.</p>
      <a href="tel:+1(939)545-4014" >
      <FeatureButton>Llame Hoy</FeatureButton>
      </a>
    </FeatureContainer>
  );
};

export default Feature;
