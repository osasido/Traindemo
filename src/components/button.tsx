import React,{FC} from "react";
import {Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../constants";
interface InputProps {
    title?: string;
    onPress: () => void;
    secureTextEntry?: boolean;
}
const { height,width } = Dimensions.get("screen");
const App : FC <InputProps> = (props) => {
    return(
        <TouchableOpacity style = {styles.container} onPress={props.onPress}>
            <Text style = {styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.current,
        allignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        width: width/1.2,
        activeOpacity: 0.8,
        height: 50,
    },
    text:{
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf:'center'
    }

})