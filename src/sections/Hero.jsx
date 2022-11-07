import React from 'react'
import styled, { keyframes } from "styled-components";

import pinkBlob from "../assets/blobPink.png";
import orangeBlob from '../assets/OrrangeBlop.png'
import orangeBlob2 from '../assets/blop orange2.png'
import orangeBlob22 from "../assets/blob orange2.png";
import whiteBlob from "../assets/blob white.png";
import arrow from "../assets/Arrow Right.svg";
import Mobile from "../assets/mobile.svg";
import { useStateContext } from '../context/StateContext';

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const OrangeBlob2 = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
  
`;
const OrangeBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--orange);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;

const CTA = styled.button`
  background-color: var(--white);
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  a{
    color: #0a0b10;
    display:flex;
    justify-content:center;
    align-items:center;

  }
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
const Hero = () => {
  const scrollTo = (e,id) => {
    e.preventDefault()
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const {eng}= useStateContext()
  return (
    <HomeSection id="hero">
      <Blobs>
        <OrangeBlob>
          <img src={orangeBlob} alt="" width="400" height="400" />{" "}
        </OrangeBlob>
        <WhiteBlob>
          <img src={whiteBlob} alt="" width="400" height="400" />
        </WhiteBlob>
        <OrangeBlob2>
          <img src={orangeBlob2} alt="" width="400" height="400" />
        </OrangeBlob2>
      </Blobs>

      <MainContent id="home">
        <Lb id="leftBlock">
          <Topic>
            <Circle />
            <span>We Build Web</span>
          </Topic>
          <Title>{!eng? "Predji na internet" : "Transforming your digital presence"}</Title>
          <SubText>
            {!eng ? "Pusti druge da rade za tebe." : "we help fast growing companies build award winning websites"}
          </SubText>
          <CTA>
            <a href='#contact' onClick={(e)=> scrollTo(e,'contact')}>
              {!eng ? "Kontakt" : "Get in touch"} &nbsp;
              <img src={arrow} alt="cta" width="100" height="100" />
            </a>
          </CTA>
        </Lb>

        <MobileSvg
          src={Mobile}
          alt="Mobile Svg"
          srcset=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  )
}

export default Hero