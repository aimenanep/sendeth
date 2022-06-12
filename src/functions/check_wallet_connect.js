const check_wallet_connect = async () => {
    const { ethereum } = window;
    
    try {
      if (!ethereum) return false 

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        // setCurrentAccount(accounts[0]);
        console.log("account is connected")
        return true
        // getAllTransactions();
      } else {
        console.log("No accounts found");
        return false
      }
    } catch (error) {
      console.log(error);
      return false
    }
  };
export default check_wallet_connect;  