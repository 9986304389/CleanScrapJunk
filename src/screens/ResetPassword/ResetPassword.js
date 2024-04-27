import React, { useState } from "react";

import styles from "./style";
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    TouchableOpacity
} from "react-native";
import { Button, SocialIcon, Icon } from "react-native-elements";
import useApi from '../../apiCalls/ApiCalls';


export default function RestPassword({ navigation }) {
    const { loading, error, get, fetchData, post } = useApi();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordreenter, setPasswordReenter] = useState('');
    const [showPasswordReEnter, setShowPasswordReenter] = useState(false);
    const [phoneNumber, setPhonenumber] = useState("");

    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPasswordReenter(!showPasswordReEnter);
    };

    const onLoginPress = async () => {
        //api call
       
        try {
            let data = {

                "phonenumber": phoneNumber,
                "password": password,

            }

            const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/resetPassword', data)

            if (response?.status === true) {
                Alert.alert("Reaset Password successfully ")
            }
            else {
                Alert.alert(`${response.message}`)
            }

        } catch (err) {

            console.log("err",err)
        }

    };


    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Forgot{'\n'}Password</Text>
                        <Text style={styles.label_text}>Phone Number</Text>
                        <TextInput
                            onChangeText={setPhonenumber}
                            placeholder="Phone Number"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Password</Text>
                        <TextInput
                            onChangeText={setPassword}
                            placeholder="Password"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeIconContainer1}
                            onPress={togglePasswordVisibility}
                        >
                            <Icon
                                name={showPassword ? 'eye-off' : 'eye'}
                                type="feather"
                                size={20}
                                color="#808080"
                            />

                        </TouchableOpacity>
                        {/* <Text style={styles.label_text}>ReEnterPassword</Text>
                        <TextInput
                            onChangeText={setPasswordReenter}
                            placeholder="ReEnterPassword"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                            secureTextEntry={!showPasswordReEnter}
                        /> */}
                        <TouchableOpacity
                            style={styles.eyeIconContainer2}
                            onPress={togglePasswordVisibility2}
                        >
                            <Icon
                                name={showPasswordReEnter ? 'eye-off' : 'eye'}
                                type="feather"
                                size={20}
                                color="#808080"
                            />
                        </TouchableOpacity>
                        <Button
                            buttonStyle={styles.loginButton}
                            onPress={() => onLoginPress()}
                            title="Reset"
                        />

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
