import React,{useRef,useEffect} from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import Logo from '../assets/logobeo.png'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Margin = styled.div`
 margin-top:200px;
 display:flex;
 align-items:flex-end;
`
const Image = styled.img`
width:70px;
height:70px;
`
const Flex = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
`
const Header = () => {
    const { pokaziMenu, setPokaziMenu, kontakt, setkontakt } = useStateContext()

    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)

    useEffect(() => {

        const element = ref.current
        const mg = window.matchMedia('max-width:800px')
        if(mg.matches){
            gsap.to(element,{
                position:'fixed',
                top:"0",
                left:"0",
                right:'0',
                padding:"0 2.5rem",
                borderRadius:"0 0 50px 50px",
                duration:1,
                ease:"power1.out",
    
                scrollTrigger:{
                    trigger:element,
                    start:"bottom+=200 top",
                    end:"+=100",
                    scrub:false,
                    markers:false
                }
            })
        }else{
            gsap.to(element,{
                position:'fixed',
                top:"0",
                left:"0",
                right:'0',
                borderRadius:"0 0 50px 50px",
                duration:1,
                ease:"power1.out",
    
                scrollTrigger:{
                    trigger:element,
                    start:"bottom+=300 top",
                    end:"+=250",
                    scrub:"true",
                }
            })
        }
       
    }, [])
    const scrollTo = (e,id) => {
        e.preventDefault()
        const element = document.getElementById(id);
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      };
    const {eng,seteng}=useStateContext();
    return (
        <div className='heder' ref={ref}>
            <div className='heder-meni'>
                <div className='logo'>
                    <Image src={Logo} />
                    <p>Inkrist</p>
                </div>
                <Flex>
                    <p className={!eng ? 'aktv' : 'dektv'} onClick={()=>seteng(!eng)}>Srp</p>
                    <p className={eng ? 'aktv' : 'dektv'} onClick={()=>seteng(!eng)}>Eng</p>
                </Flex>
                <div className='meni'>
                    <a href='#home' onClick={(e)=>scrollTo(e,'home')}
                    >
                        <p className='meni-text'>Home</p>
                    </a>
                    <a href='#about' onClick={(e)=>scrollTo(e,'about')} 
                    >
                        <p className='meni-text'>About</p>
                    </a>
                    <a href='#preporuke' onClick={(e)=>scrollTo(e,'preporuke')}
                    >
                        <p className='meni-text'>{!eng ?"Preporuke" : "Testimonials"}</p>
                    </a>
                    <a href='#contact' onClick={(e)=>scrollTo(e,'contact')}
                       
                    >
                        <div className='kontaktbtn' ><span>{!eng ?"Kontakt" : "Contact"}</span></div>
                    </a>

                </div>
                <div className='menifon'>
                    <AnimatePresence>
                        {!pokaziMenu ? <motion.p key='pomagac' style={{width:'40px', height:'40px'}} initial={{ opacity: 0 }} whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} animate={{ opacity: 1 }} exit={{ opacity: 0, rotate: 275 }} transition={{ duration: 0.5 }} onClick={() => setPokaziMenu(true)}><HiOutlineMenuAlt4 /> </motion.p> : <div className='menuwraper'>
                            <motion.div key='promena' initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} exit={{ opacity: 0, scaleX: 0, transition: { duration: 0.5, ease: "easeInOut" }, }} transition={{ duration: 0.5 }} className='fonlinkcont'>
                                <p style={{width:'40px', height:'40px'}} onClick={() => setPokaziMenu(false)}><AiOutlineClose /></p>
                                <h3>Menu</h3>
                                <a
                                href='#home' onClick={(e)=>{scrollTo(e,'home');setPokaziMenu(false)}}
                                  
                                >
                                    <p className='meni-text'>Home</p>
                                </a>
                                <a
                                href='#about' onClick={(e)=>{scrollTo(e,'about');setPokaziMenu(false)}}
                                    
                                >
                                    <p className='meni-text'>About</p>
                                </a>
                                <a 
                                    href='#preporuke' onClick={(e)=>{scrollTo(e,'preporuke');setPokaziMenu(false)}}
                                    
                                >
                                    <p className='meni-text'>{!eng ?"Preporuke" : "Testimonials"}</p>
                                </a>

                                <Margin>
                                    <a href='#contact' onClick={(e)=>{scrollTo(e,'contact');setPokaziMenu(false)}}
                                        
                                    >
                                        <div className='kontaktbtn' onClick={() => setkontakt(true)}><span>{!eng? 'Kontakt': "Conctact"}</span></div>
                                    </a>
                                </Margin>
                            </motion.div>
                        </div>}
                    </AnimatePresence>
                </div>
            </div>
        </div >
    )
}


export default Header