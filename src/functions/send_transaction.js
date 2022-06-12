import { ethers } from 'ethers'
import create_contract from './create_contract'


const send_transaction=async(connected_account,reciver_address, amount,message)=>{
    const {ethereum} = window
    try 
    {
        if(!ethereum) return

        const contract=create_contract()
        const parsed_amount=ethers.utils.parseEther(amount)

        console.log(amount)
        console.log({
            from:connected_account,
            to:reciver_address,
            gaz:'0x5208',
            amount:parsed_amount._hex,
        })
        await ethereum.request({
            method:"eth_sendTransaction",
            params:[
                {
                    from:connected_account,
                    to:reciver_address,
                    gaz:'0x5208',
                    value:parsed_amount._hex,
                }
            ]
        })
        
        const transaction_hash=await  contract.addToBlockchain(
          reciver_address, parsed_amount, message
        );

    }catch(error){
            console.error(error)
    }
}
export default send_transaction;