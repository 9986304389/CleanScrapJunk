

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
import { setUser } from '../../components/store/profile/profileSlice';


export default function LoginScreen({ navigation }) {
  const { loading, error, get, fetchData, post } = useApi();
  const { domainname } = domain();
  const [imageData, setImageData] = useState(null);
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modelTitle, setModelTitle] = useState('');
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

    const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/login', data)

    if (response?.status === true) {
      // Dispatch action to store token in Redux store
      dispatch(setToken(response?.result[0].token));

      email = response?.result[0].email;
      // //Simulating fetching user data from an API
      const userData = {
        name: response?.result[0].name,
        phoneNumber: response?.result[0].phonenumber,
        email: response?.result[0].email,
        userType: response?.result[0].usertype,
        loginTime: new Date().toISOString(),
      };

      dispatch(setUser(userData));
       let jwtToken = response?.result[0].token;
      //navigation.navigate('Home')
      try {
        const queryParameters = {
          email: email, // Add your product code parameter value here

        };

        // Convert query parameters to string
        const queryString = new URLSearchParams(queryParameters).toString();
        // Construct the complete URL with query parameters
        const url = `https://clean-scrap-jnck-backend.vercel.app/api/getOTP?${queryString}`;
       
        const response = await get(url, jwtToken);
       
        if (response?.status == true) {
          navigation.navigate('OTP', { email_address: email })
        }
        else {
          setModelTitle('Get OTP Fail')
          // Call the alert 
          setColorTitle('red');
          setColorDescription('black');
          setResponseMessage(response?.message)
          showAlert();
        }

      } catch (error) {
        console.error('Error fetching initial data:', error);
        // Handle error if needed
      }

    }
    else {

      setModelTitle('Login Fail')
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
        title={modelTitle}
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
