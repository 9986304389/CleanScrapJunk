import React, { useState } from "react";
import useApi from '../../apiCalls/ApiCalls';
import styles from "./style";
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { Button, SocialIcon, Icon } from "react-native-elements";


const appId = "1047121222092614";

export default function SignUP() {
    const { loading, error, get, fetchData, post } = useApi();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordreenter, setPasswordReenter] = useState('');
    const [showPasswordReEnter, setShowPasswordReenter] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPasswordReenter(!showPasswordReEnter);
    };


    const onLoginPress = async () => {


        try {

            if (passwordreenter == password) {
                let data = {
                    "name": name,
                    "email": email,
                    "phonenumber": phonenumber,
                    "password": password
                }
             
                const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/usersiginup', data)

                if (response?.status === true) {
                    Alert.alert("user Profile created ")
                }
                else {
                    Alert.alert(`user Profile not created ${response.message}`)
                }
            }
            else {
                Alert.alert("Password and reenter password not macth")
            }
        } catch (err) {

        }
    };


    return (
        <ScrollView>
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Create Your {'\n'}Account</Text>
                        <Text style={styles.label_text}>Full Name</Text>
                        <TextInput
                            onChangeText={setName}
                            placeholder="Full Name"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Email</Text>
                        <TextInput
                            onChangeText={setEmail}
                            placeholder="Email"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Phnone Number</Text>
                        <TextInput
                            onChangeText={setPhoneNumber}
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
                        <Text style={styles.label_text}>ReEnterPassword</Text>
                        <TextInput
                            onChangeText={setPasswordReenter}
                            placeholder="ReEnterPassword"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                            secureTextEntry={!showPasswordReEnter}
                        />
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
                            title="Sign Up"
                        />

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}
