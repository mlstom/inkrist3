import React,{useState} from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import { v4 as uuidv4 } from 'uuid';
import { client } from '../client';

const Paypal = ({mail}) => {
  const [uspesno, setuspesno] = useState(false)
  return (
    <div style={{width:'250px'}}>
      {uspesno && <p style={{color:'green'}}>Uspesno ste platili, u toku dana ce vam stici mejl sa daljim koracima</p>}
    <PayPalButton
        amount="30"
        shippingPreference="NO_SHIPPING" 
        onSuccess={async(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          console.log(details,data)
          const doc = {
            _key: uuidv4(),
            _type: "mail",
            email:mail
          }
          client.create(doc).then(() => {
              setuspesno(true)
              setTimeout(()=>{
                  setuspesno(false)
              },2000)
          });
        }}
        options={{
          clientId: "AfEaKUcAEDfP0xgTOtJTlFuvcNAIwpFVdj4TyBRpBFoxj47RBLcB8OicU2z0EvYs80IZWUs9PmKJN4vR",
          currency:"EUR"
        }}
      />
    </div>
  )
}

export default Paypal