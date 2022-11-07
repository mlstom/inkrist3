import { useEffect, useRef, lazy } from "react";
import styled from "styled-components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Tube from "../assets/3dtube.png";
import Cone from "../assets/3dtriangle.png";
import Capsule from "../assets/3dcapsule.png";



import Develope from "../assets/Develope.svg";
import Support from "../assets/Support.svg";
import Design from '../assets/Design.svg'
import { useStateContext } from "../context/StateContext";
const TextBlock = lazy(() => import("../components/TextBlock"));

const ServiceSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-center:center;
  justifycontent:flex-start;
  position:relative;
  padding-top: 20rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;

  position: absolute;
  top: 0;
  left: 0;
  bottom:0;
  
  width: 100vw;
  height: 110vh;
  z-index:-1;

  background-color:black;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  
  margin-top: 1rem;
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

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  margin: 3rem 10rem;
  position:relative;
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  /* z-index: 10; */
`;


const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 48em)");
    const element = ref.current
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById('services'),
        start: 'top top',
        end: 'bottom bottom',
        pin: element,
        pinReparent: true,
      }
    })

    const line = document.getElementById('line')

    t1.fromTo(
      line, {
      height: '15rem'
    },
      {
        height: '3rem',
        duration: 0.7,
        scrollTrigger: {
          trigger: line,
          start: 'top top+=200',
          end: 'bottom top+=220',
          scrub: true,
        }
      }
    )

    revealRefs.current.forEach((el, index) => {
      if (mq.matches) {
        t1.to(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center",
              end: "bottom bottom-=100",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      } else {
        t1.to(
          el.childNodes[0],

          {
            x: 300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center",
              end: "bottom bottom-=50",
              scrub: true,
              snap: true,
              //
              toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=200",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      }
    });

  }, [])
  const {eng} = useStateContext()
  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title className="title">{!eng?"Čime se mi bavimo": "What We Do"}</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Design"
          title={!eng?<h1>Pravimo zapanjujuce dobar dizajn</h1>:<h1>We build award winning Designs</h1>}
          subText={
            !eng?<h5>
            Pomažemo klijentima da dizajnom privuku više kupaca
            </h5>:
            <h5>
              We help clients to build great design to attract more customers
            </h5>
          }
        />
        <OBJ>
          <img src={Tube} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <Rb>
          <img src={Design} />
        </Rb>
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Suport"
          title={!eng?<h1>Pružamo podršku u bilo kom trenutku</h1>:<h1>We provide support for your digital presence</h1>}
          subText={!eng?
            <h5>
              Jednom kada je tvoj sajt live, bićemo tu da ispratimo njegov rad svakog trenutko jer nam <br /> tvoj biznis puno znači
            </h5>:
            <h5>
            Once your system is online, we will stay on hand to help you use
            it and provide technical support and maintenance <br /> your
            business
          </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <Rb>
          <img src={Support} />
        </Rb>
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Develope"
          title={!eng?<h1>Naši web sajtovi imaju vrhunske performanse </h1>:<h1>We Develope high quality Web & App</h1>}
          subText={!eng?
            <h5>
              Naši sajtovi koriste najnovikju tehnologiju zbog čega se i razlikujemo od drugih
            </h5>:
             <h5>
             We build appropriate solution to develope your website & app with
             best tools available
           </h5>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <Rb>
          <img src={Develope} />
        </Rb>
      </Content>
    </ServiceSection>
  );
};

export default Services;