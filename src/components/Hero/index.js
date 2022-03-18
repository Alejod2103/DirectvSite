import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Hero.css';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  TelfInfo,
  LlamarText
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
         <a href="tel:+1(813)551-1017" className="Number">
         <LlamarText>Llama Ahora</LlamarText>
        <TelfInfo>939-545-4014</TelfInfo>
        </a>
        <HeroItems>
          <HeroH1>TV DIRECTO LATINO</HeroH1>
          <HeroP>El mejor servicio de Tv en Puerto Rico</HeroP>
          <a href="tel:+1(939)545-4014" >
          <HeroBtn>Llama Ahora</HeroBtn>
          </a>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
