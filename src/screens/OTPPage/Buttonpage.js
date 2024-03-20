import React from "react";
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

const Buttonpage = ({ onPressClear, onPressContinue, onPressResend }) => {
    return (
        // <View style={{ flexDirection: "row", left: 65 }}>
        //     <Pressable onPress={onPressClear}>
        //         <Text style={styles.reset}>Reset</Text>
        //     </Pressable>
        //     <Pressable onPress={onPressContinue}>
        //         <Text style={styles.continue}>Continue</Text>
        //     </Pressable>

        //     <Pressable onPress={onPressResend}
        //         style={{ top: 250 }}
        //     >
        //         <Text style={styles.resend}>Resend OTP</Text>
        //     </Pressable>

        // </View>
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <Pressable onPress={onPressClear} style={styles.button}>
                    <Text style={styles.buttonText}>Clear OTP</Text>
                </Pressable>

                <Pressable onPress={onPressContinue} style={styles.button}>
                    <Text style={styles.buttonText}>Continue</Text>
                </Pressable>
            </View>

            <Pressable onPress={onPressResend} style={styles.button}>
                <Text style={styles.buttonText}>Resend OTP</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
        paddingTop:50
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#347855',
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

// const styles = StyleSheet.create({
//     reset: {
//         borderWidth: 1.5,
//         borderColor: '#347855',
//         width: 130,
//         height: 50,
//         borderRadius: 10,
//         textAlign: "center",
//         paddingTop: 15,
//         top: 150,
//         right: 15,
//         color: '#347855',
//         fontWeight: "500"

//     },
//     continue: {
//         borderWidth: 1,
//         borderColor: '#347855',
//         width: 130,
//         height: 50,
//         borderRadius: 10,
//         textAlign: "center",
//         paddingTop: 15,
//         top: 150,
//         left: 15,
//         backgroundColor: '#347855',
//         color: 'white',
//         fontWeight: "500"
//     },
//     resend: {
//         left: -190,
//         borderWidth: 1,
//         borderColor: '#347855',
//         width: 130,
//         height: 50,
//         borderRadius: 10,
//         textAlign: "center",
//         paddingTop: 15,
//         backgroundColor: '#347855',
//         color: 'white',
//         fontWeight: "500",
//     }
// })


export default Buttonpage;