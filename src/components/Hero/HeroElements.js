import styled from 'styled-components'
import ImgBg from '../../images/tvbg.jpg'

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 95vh;
  background-position: center;
  background-size: cover;
`

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #3269c2;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`

export const TelfInfo = styled.h1`
  position: absolute;
  left: 50px;
  margin-top: 120px;
  font-family: 'Kanit', sans-serif;
  font-size: 55px;
  color: #e69a17;

  @media (min-width: 300px) and (max-width: 800px) {
    position: absolute;
    left: 30px;
    margin-top: 140px;
    font-family: 'Kanit', sans-serif;
    font-size: 45px;
    color: #e69a17;
  }
`

export const LlamarText = styled.h1`
    position: absolute;
    left: 50px;
    margin-top: 50px;
    font-family: 'Kanit', sans-serif;
    font-size: 55px;
    color: #e69a17;

    @media (min-width: 300px) and (max-width: 800px) {
        margin-top: 100px;
        left: 30px;
        font-size: 45px;
    }
`;
