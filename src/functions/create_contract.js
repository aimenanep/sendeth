import { contract_abi,contract_address } from '../utils/constant'
import { ethers } from 'ethers'


const create_contract=()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract=new ethers.Contract(contract_address, contract_abi, signer)
    return contract
}

export default create_contract;