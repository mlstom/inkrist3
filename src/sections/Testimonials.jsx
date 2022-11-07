import React, { lazy } from "react";
import styled from "styled-components";
import avatar4 from '../assets/avatar-4.jpg'
import avatar1 from '../assets/avatar-1.jpg'
import avatar2 from '../assets/avatar-2.jpg'
import avatar3 from '../assets/avatar-3.jpg'

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { useStateContext } from "../context/StateContext";

const Card = lazy(() => import("../components/Card"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--org);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
const {eng} = useStateContext()
  return (
    <Section id='preporuke'>
      <Title>{!eng ? "Nekoliko toplih preporuka!" : "Few good words about us!"}</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="Ikrist mi je pomogao da napravim sajt kakav sam samo mogla da sanjam da cu ikada imati"
            name="Ana"
            image={avatar1}
          />

          <Card
            text="Najbolji momci koje sam i lično upoznao, sve pohvale."
            name="Miloš"
            image={avatar2}
          />

          <Card
            text="Ne samo da su bili tu dok se sajt podizao nego su idalje tu da pomognu kad nešto ne štima"
            name="Marija"
            image={avatar3}
          />

          <Card
            text="Radim za stranu kompaniju, hitno mi je trebala pomoć koju su mi oni omogućili."
            name="Petar"
            image={avatar4}
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;