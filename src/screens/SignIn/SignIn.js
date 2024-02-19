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
import { MaterialCommunityIcons } from '@expo/vector-icons';

const appId = "1047121222092614";

export default function LoginScreen({ navigation }) {
  const onLoginPress = () => { navigation.navigate('Home') };

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
