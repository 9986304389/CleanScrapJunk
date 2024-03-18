import React from "react";
import { View,Text,Pressable ,StyleSheet} from "react-native";

const Buttonpage = () =>{
    return(
        <View style={{flexDirection:"row",left:65}}>
            <Pressable>
                <Text style={styles.reset}>Reset</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.continue}>Continue</Text>
            </Pressable>
           
                <Pressable
                style={{top:250}}
                >
                    <Text style={styles.resend}>Resend OTP</Text>
                </Pressable>
           
        </View>
    );
}

const styles = StyleSheet.create({
    reset:{
        borderWidth:1.5,
        borderColor:'#347855',
        width:130,
        height:50,
        borderRadius:10,
        textAlign:"center",
        paddingTop:15,
        top:150, 
        right:15,
        color:'#347855',
        fontWeight:"500"
        
    },
    continue:{
        borderWidth:1,
        borderColor:'#347855',
        width:130,
        height:50,
        borderRadius:10,
        textAlign:"center",
        paddingTop:15,
        top:150,
        left:15,
        backgroundColor:'#347855',
        color:'white',
        fontWeight:"500"
    },
    resend:{
        left:-190,
        borderWidth:1,
        borderColor:'#347855',
        width:130,
        height:50,
        borderRadius:10,
        textAlign:"center",
        paddingTop:15,
        backgroundColor:'#347855',
        color:'white',
        fontWeight:"500",
    }
})
export default Buttonpage;