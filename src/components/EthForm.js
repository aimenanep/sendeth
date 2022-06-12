import React,{useState} from 'react'
import eth from "../assets/img/eth.svg"
import check_wallet_connect from './../functions/check_wallet_connect';
import connect_wallet from './../functions/connect_wallet';
import send_transaction from './../functions/send_transaction';
import Input from './Input'


export default function EthForm() {


    const [reciver_address, set_reciver_address] = useState("")
    const [amount, set_amount] = useState("")
    const [message, set_message] = useState("")
    const [connected_account, set_connected_account] = useState("")

    const send_to_blockchain=async()=>{
      const wallet_is_connected=await check_wallet_connect();

      if(!wallet_is_connected)
      {
        const wallet=await connect_wallet();
        if(wallet!=-1)
          {
            set_connected_account(wallet);
          }
      }
        

      connected_account && send_transaction(connected_account,reciver_address, amount,message)
    }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center">
        <div className="p-9 bg-blue-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
            <div className="text-center">
                <img  src={eth} className="w-[100px] mx-auto mb-3" />
                <h1 className="text-white text-2xl uppercase font-bold text-center"> Send Etherium</h1>
                <p className='text-white'>All over the world</p>
                {/* <TextField
                    helperText="Please enter your name"
                    id="demo-helper-text-misaligned"
                    label="Adress To"
                    variant="filed"

                    InputProps={{
                        style:{
                            background:"rgba(0,0,0,.15)",color:"#fff",
                            border:"none"
                        }
                    }}
                    /> */}
            </div>
            <div className="mb-3">
                    <Input 
                        label="Adress to"
                        placeholder="reciver address"
                        onKeyUp={(e)=>set_reciver_address(e.target.value)}
                    />
            </div>
            <div className="mb-3">
                    <Input 
                        label="Amount"
                        placeholder="how much do you want to send"
                        onKeyUp={(e)=>set_amount(e.target.value)}
                    />
            </div>
            <div className="mb-3">
                    <Input 
                        label="Message"
                        placeholder="Note for the transaction"
                        onKeyUp={(e)=>set_message(e.target.value)}
                    />
            </div>
            <div className="my-5">
            <button 
                className="bg-white w-full hover:bg-[#2aa0ea] text-gray-800 text-center font-bold p-3 rounded inline-flex items-center justify-center uppercase"
                onClick={(e)=>send_to_blockchain()}    
            >
            <img  src={eth} className="w-4 h-4 mr-2" style={{filter:"invert(1)"}} />
                {/* <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
                <span>Send to the blockchain</span>
            </button>
            </div>
            
        </div>

    </div>
    </>
  )
}
