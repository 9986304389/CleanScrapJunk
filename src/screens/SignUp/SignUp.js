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
import * as Facebook from "expo-facebook";

const appId = "1047121222092614";

export default function SignUP() {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordreenter, setPasswordReenter] = useState('');
    const [showPasswordReEnter, setShowPasswordReenter] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPasswordReenter(!showPasswordReEnter);
    };


    const onLoginPress = () => { };

    const onSignUp = async () => {
        Alert.alert(
            `Please use our React Native Starer Kit instead. You can download it for free at https://instamobile.io`
        );
        // try {
        //   await Facebook.initializeAsync({
        //     appId,
        //   });
        //   const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        //     permissions: ["public_profile", "email"],
        //   });
        //   if (type === "success") {
        //     const response = await fetch(
        //       `https://graph.facebook.com/me?access_token=${token}`
        //     );
        //     Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        //   }
        // } catch ({ message }) {
        //   Alert.alert(`Facebook Login Error: ${message}`);
        // }
    };

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Create Your {'\n'}Account</Text>
                        <Text style={styles.label_text}>Full Name</Text>
                        <TextInput
                            placeholder="Full Name"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Email</Text>
                        <TextInput
                            placeholder="Email"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Phnone Number</Text>
                        <TextInput
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
    );
}
