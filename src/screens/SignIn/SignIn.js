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
import * as Facebook from "expo-facebook";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const appId = "1047121222092614";

export default function LoginScreen({ navigation }) {
  const { loading, error, get } = useApi();
  const{domainname}=domain();
  const onLoginPress = () => { navigation.navigate('Home') };
  const [imageData, setImageData] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  useEffect(() => {
    const domain_name = `${domainname}/api/getAllProducts?product_code=CS7`;
    fetch(domain_name)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.result[0].image_url; // Assuming you want the first product's image
        const domainName = 'https://clean-scrap-jnck-backend.vercel.app';
        const trimmedImageUrl = imageUrl.replace('/var/task/', '');
        // Concatenate your domain name with the modified image URL
        const finalImageUrl = domainName + '/' + trimmedImageUrl;
        setImageData(finalImageUrl);
      })
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  console.log(imageData)
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Login</Text>
            <Text style={styles.label_text}>Phone Number</Text>
            <TextInput
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
          {/* <View style={styles.container}>
            {imageData && (
              <Image
                source={{ uri: imageData }}
                style={styles.image}
              />
            )}
          </View> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}
