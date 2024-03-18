

import React, { useState, useEffect } from "react";
import useApi from '../../apiCalls/ApiCalls';
import domain from "../../domain";
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
  Image
} from "react-native";
import { Button, SocialIcon, Icon } from "react-native-elements";
import CustomAlert from '../../components/alert/Alert';
import { setToken } from '../../components/store/auth/authSlice';
import { useDispatch, Provider } from 'react-redux';
import store from '../../store/mainreduxstore';
export default function LoginScreen({ navigation }) {
  const { loading, error, get, fetchData, post } = useApi();
  const { domainname } = domain();
  const [imageData, setImageData] = useState(null);
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [color_title, setColorTitle] = useState('');
  const [color_description, setColorDescription] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const showAlert = () => {
    setIsVisible(true);
  };

  const hideAlert = () => {
    setIsVisible(false);
  };


  const onLoginPress = async () => {

    
    let data = {
      "phonenumber": phonenumber,//9986304389
      "password": password//kavitha
    }
    console.log(data)
    const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/login', data)
    console.log("Token", response.result[0].token)
    // Dispatch action to store token in Redux store
    dispatch(setToken(response?.result[0].token));
    if (response?.status === true) {
      //call the otp screen
      navigation.navigate('Home')
    }
    else {
      setColorTitle('red');
      setColorDescription('black');
      setResponseMessage(response?.message)
      showAlert();
    }
  };


  return (

    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Login</Text>
            <Text style={styles.label_text}>Phone Number</Text>
            <TextInput
              onChangeText={setPhoneNumber}
              placeholder="Phone Number"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <View>
              <Text style={styles.label_text}>Password</Text>
              <TextInput
                onChangeText={setPassword}
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={togglePasswordVisibility}
              >
                <Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  type="feather"
                  size={20}
                  color="#808080"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.passwordContainer}>
              <Button
                containerStyle={styles.forgotpassword}
                type="clear"
                onPress={() => navigation.navigate('ResetPassword')}
                title="forgot Password ?"
                titleStyle={styles.buttonText}
              />
            </View>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Login"
              titleStyle={styles.buttonTextLogin}
            />

            <Button
              containerStyle={styles.fbLoginButton}
              type="clear"
              onPress={() => navigation.navigate('SignUp')}
              title="Don't have an account? Sign Up"
              titleStyle={styles.buttonText}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <CustomAlert
        isVisible={isVisible}
        title="Login Fail"
        description={responseMessage}
        buttonText={showButton ? "OK" : ""}
        onPress={hideAlert}
        onClose={hideAlert}
        btnisVisible={false}
        color_title={color_title}
        color_description={color_description}
      />
    </KeyboardAvoidingView>

  );
}
