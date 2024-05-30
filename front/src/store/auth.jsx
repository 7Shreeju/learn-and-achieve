import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export  const Authprovider = ({children}) =>{

    const [token, setToken ] = useState(localStorage.getItem("token"));
    const [token1, setToken1 ] = useState(localStorage.getItem("tokenotp"));
    const [user, setUser] = useState("");
   
    const storeTokenInLSotp = (serverToken1) => {
        setToken1(serverToken1);
        return localStorage.setItem('tokenotp',serverToken1);
    };

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);
    };
    let isLoggedIn = !!token;
    // logout functionality
    const LogoutUser =() =>{
        setToken("");
        return localStorage.removeItem('token');
    };

    const Destroyotpuser =() =>{
        setToken1("");
        return localStorage.removeItem('tokenotp');
    };

    //authentication jwt - to fetch login data 
    const userAuthentication = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            });
            if(response.ok){
                const data = await response.json();
                console.log(data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error Fetching data");
        }
    };

    //to fetch services in list page 
    // const getServices = async () => {
    //     try {
    //         const response = await fetch("http://localhost:5000/api/data/service",{
    //             method:"GET",
    //         });
    //         if(response.ok){
    //             const data = await response.json();
    //             console.log(data.msg);
    //             setServices(data.msg);
    //         }
    //     } catch (error) {
    //         console.log(`services ${error}`);
    //     }
    // }

    useEffect(() => {
        // getServices();
        userAuthentication();
    },[]);

    return (
        <AuthContext.Provider value={{isLoggedIn, storeTokenInLS,storeTokenInLSotp, user, Destroyotpuser,LogoutUser  }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}