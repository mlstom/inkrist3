import React from "react";
import styled from "styled-components";

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  /* z-index: 10; */
 
`;

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../assets/${svg}`).default;
  return (
    <Rb id="svgBlock">
      <img src={SvgIcon} alt="Services" />
    </Rb>
  );
};

export default SvgBlock;