import React,{useState, useEffect, FC} from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import AppStack from "./appStack";
import AuthStack from "./authStack";

const MainNav: FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User| null > (null);
  
    useEffect(()=>{
        auth().onAuthStateChanged(userState=>{
            setUser(userState);
            if(loading){
                setLoading(false);
            }
        });

    },[]);
    if (loading) return null;
return(
    
    <NavigationContainer>
        {user !== null ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>

)

}

export default MainNav