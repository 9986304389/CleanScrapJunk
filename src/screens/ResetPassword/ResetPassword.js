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


export default function RestPassword({ navigation }) {
    const onLoginPress = () => { navigation.navigate('OTPPage') };
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


    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Forgot{'\n'}Password</Text>
                        <Text style={styles.label_text}>Email</Text>
                        <TextInput
                            placeholder="email"
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
                            title="Reset"
                        />

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
