const getToken = async () => {
    try {
      const local = localStorage.getItem("ioasys");
      const json = JSON.parse(local);
      const token = json.token
      const refreshToken = json.refreshToken;
  
      return {
        token,
        refreshToken,
      };
      
    } catch (err) {
      throw new Error(err);
    }
  };
  
  export default getToken;