
import React, { useRef, useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, BackHandler } from "react-native";
import Buttonpage from "./Buttonpage";
import { useSelector, useDispatch } from 'react-redux'
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../../components/alert/Alert';
export default function OTPPage({ route, navigation }) {

    const { phoneNumber } = route.params;
    const [buttonPressCount, setButtonPressCount] = useState(0);
    const jwtToken = useSelector((state) => state.auth.token);
    const { loading, error, get, fetchData, post } = useApi();
    const [isVisible, setIsVisible] = useState(false);
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [otp, setOTP] = useState(Array(6).fill(''));

    // Hide the first digits of the phone number
    const hiddenPhoneNumber = phoneNumber.substring(0, phoneNumber.length - 4).replace(/./g, '.');

    // Extract the last four digits of the phone number
    const lastFourDigits = phoneNumber.substring(phoneNumber.length - 4);
    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };

    const inputRefs = Array(6).fill(null).map((_, i) => useRef(null));

    // Function to focus on next input
    const focusNextInput = (index) => {
        if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    // Function to handle OTP input
    const handleOTPInput = (text, index) => {
        const newOTP = [...otp];
        newOTP[index] = text;
       
        setOTP(newOTP);

        // Move to the next input field after entering a digit
        if (text.length === 1) {
            focusNextInput(index);
        }
    };

    // Function to clear OTP
    const clearOTP = () => {
        setOTP(Array(6).fill(''));
        inputRefs[0].current.focus();
    };


    const validate_OTP = async () => {
        const concatenatedOTP = otp.join('');
        
        if (concatenatedOTP.length == 6) {
            try {
                const queryParameters = {
                    phonenumber: phoneNumber,
                    otp: concatenatedOTP

                };
                // Convert query parameters to string
                const queryString = new URLSearchParams(queryParameters).toString();
                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/verifyOTP?${queryString}`;
                
                const response = await get(url, jwtToken);
              

                if (response?.status == true) {

                    navigation.navigate('Home')
                }
                else {
                    setButtonPressCount(prevCount => prevCount + 1);
                    if (buttonPressCount === 2) {
                        // If button has been pressed 3 times, navigate to home page
                        navigation.navigate('SignIn'); // Replace 'Home' with your actual screen name
                    }
                    else {
                        setModelTitle('Verify OTP Fail')
                        // Call the alert 
                        setColorTitle('red');
                        setColorDescription('black');
                        setResponseMessage(response?.message)
                        showAlert();
                    }
                }

            } catch (error) {
                console.error('Error fetching initial data:', error);
                // Handle error if needed
            }

        }
    }

    const resend_OTP = () => {

    }

    return (
        <View style={styles.container}>
            <View style={{ top: 50 }}>
                <Text style={{ fontStyle: "normal", fontWeight: "200", fontSize: 20 }}>An 6 Digits code has been sent to</Text>
                <Text style={{ fontStyle: "normal", fontWeight: "200", fontSize: 20, textAlign: "center" }}>your phone number{hiddenPhoneNumber}{lastFourDigits}</Text>
            </View>
            <View style={styles.otp}>

                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={inputRefs[index]}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleOTPInput(text, index)}
                    />
                ))}
            </View>

            <View>
                <Buttonpage onPressClear={clearOTP} onPressContinue={validate_OTP} onPressResend={resend_OTP} />
            </View>
            <CustomAlert
                isVisible={isVisible}
                title={modelTitle}
                description={responseMessage}
                buttonText={showButton ? "OK" : ""}
                onPress={hideAlert}
                onClose={hideAlert}
                btnisVisible={false}
                color_title={color_title}
                color_description={color_description}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpInput: {
        borderWidth: 2,
        borderColor: '#ccc',
        backgroundColor: '#ffff',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        width: 48,
        borderRadius: 10,
        marginRight: 10,
        textAlign: "center",
        color: 'black',
        elevation: 1, // Adjust the elevation to change the intensity of the shadow
        shadowOffset: { width: 0, height: 2 },
        // For iOS
        shadowColor: '#000',
        shadowRadius: 50,
        fontSize: 22
    },
    otp: {
        flexDirection: "row",
        marginTop: 100,
        marginLeft: 25
    },

});
