const connect_wallet=async()=>{
    const { ethereum } = window;

    console.log(ethereum)
    if(ethereum) {
        console.log('detected');
  
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          return  accounts[0] 
          
        } catch (error) {
          console.log('Error connecting...');
          return -1
        }
  
      } else {
        alert('No wallet  detected');
        return -1
      }
}


export default connect_wallet;