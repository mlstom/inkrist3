import styled from "styled-components";
import { AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {MdOutgoingMail} from 'react-icons/md'
import { useStateContext } from "../context/StateContext";
const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:var(--org);
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  wdith:100%;
  justify-content:center;
  gap:10px;
  a {
    margin-left:10px;
    &:hover {
     transform:scale(1.1)
    }
  }
`;
const LeftText = styled.div`
  text-align: left;
`;
const Footer = () => {
  const {eng} = useStateContext()
  return (
    <FOOTER>
      <LeftText>
        © 2022 Built and Design by @inkrist
      </LeftText>
      <RightText>
        {!eng ? "Poseti nas na": "Reach out to me via"} 😉
        <a href="https://twitter.com">
          <AiOutlineTwitter style={{transform:"scale(2)"}} color="black" />
        </a>
        &nbsp;
        <a href="https://www.instagram.com/inkrist1989/">
        <AiOutlineInstagram style={{transform:"scale(2)"}} color="black" />
        </a>
        &nbsp;
        <a href="mailto:info@inkrist.net">
          <MdOutgoingMail style={{transform:"scale(2)"}} color="black"/>
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;
