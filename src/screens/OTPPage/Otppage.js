import React, { useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";
import Buttonpage from "./Buttonpage";

export default function OTPPage() {

    const handleBack = () => {
    };
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);
    const input6Ref = useRef(null);

    const focusNextInput = (nextInput) => {
        nextInput.current.focus();
    };


    return (
        <View style={styles.container}>
            {/* <View style={{ flexDirection: "row", top: 75, right: 200 }}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>⟵ <Text style={{ fontWeight: "800", fontSize: 22 }}> Enter The Otp Code</Text> </Text>
                </TouchableOpacity>
            </View> */}
            <View style={{ top: 150 }}>
                <Text style={{ fontStyle: "normal", fontWeight: "600" }}>An 6 Digits code has been send to ......9999</Text>
                <Text style={{ left: 80 }}>.....@gmail.com</Text>
            </View>
            <View style={styles.otp}>
                <TextInput
                    ref={input1Ref}
                    style={styles.otpInput}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(text) => {
                        if (text.length === 1) {
                            focusNextInput(input2Ref);
                        }
                    }} // Handle OTP input
                />
                <TextInput
                    ref={input2Ref}
                    style={styles.otpInput}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(text) => {
                        if (text.length === 1) {
                            focusNextInput(input3Ref);
                        }
                    }} // Handle OTP input
                />
                <TextInput
                    ref={input3Ref}
                    style={styles.otpInput}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(text) => {
                        if (text.length === 1) {
                            focusNextInput(input4Ref);
                        }
                    }} // Handle OTP input
                />
                <TextInput
                    ref={input4Ref}
                    style={styles.otpInput}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(text) => {
                        if (text.length === 1) {
                            focusNextInput(input5Ref);
                        }
                    }} // Handle OTP input
                />
                <TextInput
                    ref={input5Ref}
                    style={styles.otpInput}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(text) => {
                        if (text.length === 1) {
                            focusNextInput(input6Ref);
                        }
                    }} // Handle OTP input
                />
                <TextInput
                    ref={input6Ref}
                    style={styles.otpInput}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(text) => console.log(text)} // Handle OTP input
                />
            </View>
            <View style={{ top: -50 }}>
                <Buttonpage />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 20,
    },
    backButtonText: {
        color: 'black'
    },
    otpInput: {
        borderWidth: 2,
        borderColor: '#CCC',
        backgroundColor: '#CCC',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 35,
        borderRadius: 5,
        marginRight: 20,
        textAlign: "center",
        color: 'black'
    },
    otp: {
        flexDirection: "row",
        marginTop: 260,
        marginLeft: 25
    },

});
