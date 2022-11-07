import HeroSection from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import styled from "styled-components";
import Discord from "../sections/Discord";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top:50px;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      <Discord />
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;