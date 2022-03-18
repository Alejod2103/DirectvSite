import React from 'react';
import './Internet.css'
import { InternetContainer, InternetBtn } from './InternetStyles';

const Internet = () => {
    return (
      <InternetContainer>

          <h1>Agrega internet ilimitado con fibra por $29.99 adicionales al mes</h1>
          
          <a href="tel:+1(939)545-4014">
          <InternetBtn>Llamar Ahora</InternetBtn>
          </a>

      </InternetContainer>
    );
  };
  
  export default Internet;