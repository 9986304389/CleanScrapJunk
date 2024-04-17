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
    TouchableHighlight,
    ScrollView,
    Modal
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, SocialIcon, Icon } from "react-native-elements";


const appId = "1047121222092614";

export default function SignUP() {


    // const [selectedValue, setSelectedValue] = useState(null);

    // const handleValueChange = (value) => {
    //     setSelectedValue(value);
    //     onSelect(value);
    // };

    // const options = [
    //     { label: 'Option 1', value: 'option1' },
    //     { label: 'Option 2', value: 'option2' },
    //     { label: 'Option 3', value: 'option3' },
    // ];

    const { loading, error, get, fetchData, post } = useApi();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordreenter, setPasswordReenter] = useState('');
    const [showPasswordReEnter, setShowPasswordReenter] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const options = [
        { label: 'Chennai', value: 'Chennai' },
        { label: 'Coimbatore', value: 'Coimbatore' },
        { label: 'Trichy', value: 'Trichy' },
        { label: 'Madurai', value: 'Madurai' },
    ];

    const handleValueChange = (value) => {
        setLocation(value);
        setModalVisible(false);
    };

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
                    "password": password,
                    "location": location,
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
                            <Text style={styles.label_text}>GST Number</Text>
                            <TextInput
                                // onChangeText={setEmail}
                                placeholder="GST No."
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
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
                            {/* <Text style={styles.label_text}>Select Your City</Text>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={handleValueChange}
                                style={styles.loginFormTextInput}
                            >
                                {options.map((option, index) => (
                                    <Picker.Item key={index} label={option.label} value={option.value} style={{fontSize:'12px', borderRadius:'0%'}} />
                                ))}
                            </Picker> */}
                            <Text style={styles.label_text}>Select Your City</Text>
                            <TouchableHighlight
                                style={styles.touchableHighlight}
                                onPress={() => setModalVisible(true)}
                                underlayColor="#f0f0f0"
                            >
                                <Text style={styles.selectedValueText}
                                    onChangeText={setLocation}>
                                    {location ? location : 'Select a city'}
                                </Text>
                            </TouchableHighlight>

                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(false);
                                }}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        {options.map((option, index) => (
                                            <TouchableHighlight
                                                key={index}
                                                style={styles.optionItem}
                                                underlayColor="#f0f0f0"
                                                onPress={() => handleValueChange(option.value)}
                                            >
                                                <Text style={styles.optionText}>{option.label}</Text>
                                            </TouchableHighlight>
                                        ))}
                                    </View>
                                </View>
                            </Modal>
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
