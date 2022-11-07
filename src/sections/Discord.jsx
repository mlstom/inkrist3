import React,{useState} from 'react'
import styled from 'styled-components'
import { useStateContext } from '../context/StateContext'

import Paypal from './Paypal';

const Main = styled.div`
min-height:100vh;
width:100vw;
background-color:var(--background);
display:flex;
flex-direction:column;
gap:30px;
justify-content:center;
align-items:center;
padding:20px 0px;
`

const Discord = () => {
    const { eng } = useStateContext()
    const [mail, setmail] = useState()
    return (
        <Main>
            <div class="card">
                <div class="content">
                    <div class="front">
                        <div style={{ position: 'relative' }}>
                            {!eng ? <p style={{ fontSize: '22px', margin: 0 }}>
                                <span>POSTANITE CLAN NAŠEG TIMA </span>
                                <span style={{ backgroundColor: '#03446A', color: 'white', padding: '3px 10px', borderRadius: '5px' }}> 30€</span>
                            </p> : <p style={{ fontSize: '22px', margin: 0 }}>
                                <span>BECOME A MEMBER OF OUR TEAM </span>
                                <span style={{ backgroundColor: '#03446A', color: 'white', padding: '3px 10px', borderRadius: '5px' }}> 30€</span>
                            </p>}
                        </div>
                    </div>
                    <div class="back">
                        {!eng ? <p>
                            PET NAČINA ONLINE ZARADE, I BIZNIS MODELA IZ PRVE RUKE SA KOJIMA SMO MI DOŠLI DO NAŠE ZARADE
                            <br />
                            <span style={{ backgroundColor: '#FFC439', padding: '3px 10px' }}>I TO SVE ZA SAMO 30€</span>
                        </p> : <p>
                            FIVE MODERN WAYS TO MAKE MONEY ONLINE, AND FIRST HAND BUSINESS ADVICE ON HOW WE MADE OUR MONEY 
                            <br />
                            <span style={{ backgroundColor: '#FFC439', padding: '3px 10px' }}>AND ALL OF THAT FOR ONLY 30€</span>
                        </p>}
                    </div>
                </div>
            </div>
            <input text='email' style={{padding:'3px 10px'}} value={mail} placeholder='example@inkrist.net' onChange={(e)=>setmail(e.target.value)} autoComplete='none'/>
            
           {!mail?<p>Morate imati imejl kako biste pristupili plaćanju</p> :<Paypal mail={mail} />}
        </Main>
    )
}

export default Discord