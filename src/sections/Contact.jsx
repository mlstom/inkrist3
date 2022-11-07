import styled from "styled-components";
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { useState } from "react";
import { client } from "../client";
import { useStateContext } from "../context/StateContext";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  overflow:hidden;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
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

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    resize:none;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
const A = styled.a`
&:hover{
  transform:scale(1.1)
}
`

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  const [ime, setime] = useState('')
  const [email, setemail] = useState('')
  const [poruka, setporuka] = useState('')
  const [fields, setfields] = useState(false)
  const [uspesno, setuspesno] = useState(false)
  const handlePotvrda = (e) => {
    e.preventDefault()
    if (ime && email && poruka) {
      const doc = {
        _type: "poruke",
        ime,
        email,
        poruka
      }
      client.create(doc).then(() => {
        setuspesno(true);

        setTimeout(
          () => {
            setuspesno(false);
          },
          2000,
        );
      });
    } else {
      setfields(true);

      setTimeout(
        () => {
          setfields(false);
        },
        2000,
      );
    }
  }
  const {eng} = useStateContext()
  return (
    <ContactSection id="contact">
      <Title>{!eng ? "Budimo u kontaktu" : "Get in touch"}</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <A href="https://www.facebook.com/">
          <AiOutlineFacebook style={{ transform: "scale(2)" }} />
        </A>
        <a href="https://twitter.com/">
          <AiOutlineTwitter style={{ transform: "scale(2)" }} />
        </a>
        <a href="https://www.instagram.com/inkrist1989">
          <AiOutlineInstagram style={{ transform: "scale(2)" }} />
        </a>
      </Icons>
      {fields && <p style={{color:'red',marginBottom:'30px'}}>Morate da popunite sva polja</p>}
      {uspesno && <p style={{color:'green',marginBottom:'30px'}}>Uspešno ste poslali poruku</p>}
      <Form>
        <Row>
          <input name="name" type="text" placeholder="name" value={ime} onChange={(e) => setime(e.target.value)} />
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="email"
          />
        </Row>
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder={!eng?"tvoja poruka" : "your message"}
          value={poruka}
          onChange={(e) => setporuka(e.target.value)}
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button
            onClick={(e)=>handlePotvrda(e)}
          >
            {!eng?"Potvrdi" : "Submit"}
            
          </button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;