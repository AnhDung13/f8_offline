export const requestLogin = () => {
  return async (data) => {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  };
};

export const requestProfile = (accessToken)=>{
  return async ()=>{
    const res = 
  }
}

export const fetchAuth = (email, password) =>{
  return async (dispatch)=>{
    const token = await requestLogin({email, password});
    if(token){
      localStorage.setItem('user_token', JSON.stringify(token))
    }
  }
}