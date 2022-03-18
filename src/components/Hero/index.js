import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>DirecTV PR</HeroH1>
          <HeroP>El mejor servicio de Tv en Puerto Rico</HeroP>
          <a href="tel:+1(813)551-1017" >
          <HeroBtn>Llama Ahora</HeroBtn>
          </a>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
