import react from "react";
import { View , Text , StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export const NotificationPage = () =>{
    return(
        <View>
            <View style={styles.todaycontainer}>
                <Text style={{fontSize:18,fontWeight:"700",left:18}}>Today</Text>
                <View style={styles.paymentcontainer}>
                    <View style={styles.iconcontainer}>
                       <AntDesign name="shoppingcart" size={44} color="black" style={styles.icon}/>
                    </View>
                    <View style={styles.datacontainer}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.dataheader}>Payment Succesfull</Text>
                            <TouchableOpacity
                            style={styles.deleteicon}
                            >
                                <Text><AntDesign name="delete" size={24} color="black" /></Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.data}>Dummy Dat Dummy Data Dummy Data Dummy Data Dummy Data Dummy Data</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    todaycontainer:{
        top:100,   
    },
    paymentcontainer:{
        borderWidth:1,
        width:350,
        top:13,
        left:25,
        borderRadius:10,
        flexDirection:"row",
        height:100,
        borderColor:'#f0f5f1'
    },
    iconcontainer:{
        backgroundColor:'#f0f5f1',
        height:70,
        top:14,
        width:60,
        left:15 ,
        borderRadius:5     
    },
    icon:{
        top:12,
        left:5
    },
    datacontainer:{
        paddingLeft:25,
        top:10
        
    },
    dataheader:{
        fontSize:15,
        fontWeight:"700"
    },
    data:{
         paddingRight:70 ,
         top:5      
    },
    deleteicon:{
        left:85
    }
})
