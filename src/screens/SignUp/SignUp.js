import React, { useState, useEffect } from "react";
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
    Modal,
    ActivityIndicator

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
    const [gstnumber, setGstnumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordReenterError, setPasswordReenterError] = useState('');
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [locationQuery, setLocationQuery] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const options = [
        { label: 'Mumbai|Maharashtra', value: 'Mumbai|Maharashtra' },
        { label: 'Delhi|Delhi', value: 'Delhi|Delhi' },
        { label: 'Bangalore|Karnataka', value: 'Bangalore|Karnataka' },
        { label: 'Hyderabad|Telangana', value: 'Hyderabad|Telangana' },
        { label: 'Ahmedabad|Gujarat', value: 'Ahmedabad|Gujarat' },
        { label: 'Chennai|Tamil Nadu', value: 'Chennai|Tamil Nadu' },
        { label: 'Kolkata|West Bengal', value: 'Kolkata|West Bengal' },
        { label: 'Amritsar|Punjab', value: 'Amritsar|Punjab' },
        { label: 'Bhopal|Madhya Pradesh', value: 'Bhopal|Madhya Pradesh' },
        { label: 'Chandigarh|Chandigarh', value: 'Chandigarh|Chandigarh' },
        { label: 'Faridabad|Haryana', value: 'Faridabad|Haryana' },
        { label: 'Ghaziabad|Uttar Pradesh', value: 'Ghaziabad|Uttar Pradesh' },
        { label: 'Jamshedpur|Jharkhand', value: 'Jamshedpur|Jharkhand' },
        { label: 'Jaipur|Rajasthan', value: 'Jaipur|Rajasthan' },
        { label: 'Kochi|Kerala', value: 'Kochi|Kerala' },
        { label: 'Lucknow|Uttar Pradesh', value: 'Lucknow|Uttar Pradesh' },
        { label: 'Nagpur|Maharashtra', value: 'Nagpur|Maharashtra' },
        { label: 'Patna|Bihar', value: 'Patna|Bihar' },
        { label: 'Raipur|Chhattisgarh', value: 'Raipur|Chhattisgarh' },
        { label: 'Surat|Gujarat', value: 'Surat|Gujarat' },
        { label: 'Visakhapatnam|Andhra Pradesh', value: 'Visakhapatnam|Andhra Pradesh' },
        { label: 'Agra|Uttar Pradesh', value: 'Agra|Uttar Pradesh' },
        { label: 'Ajmer|Rajasthan', value: 'Ajmer|Rajasthan' },
        { label: 'Kanpur|Uttar Pradesh', value: 'Kanpur|Uttar Pradesh' },
        { label: 'Mysore|Karnataka', value: 'Mysore|Karnataka' },
        { label: 'Srinagar|Jammu and Kashmir', value: 'Srinagar|Jammu and Kashmir' },
        { label: 'Etawah|Uttar Pradesh', value: 'Etawah|Uttar Pradesh' },

        { label: 'Rourkela|Odisha', value: 'Rourkela|Odisha' },

        { label: 'Rajahmundry|Andhra Pradesh', value: 'Rajahmundry|Andhra Pradesh' },

        { label: 'Bathinda|Punjab', value: 'Bathinda|Punjab' },

        { label: 'Hajipur|Bihar', value: 'Hajipur|Bihar' },
        { label: 'Rothak|Haryana', value: 'Rothak|Haryana' },
        { label: 'Hosur|Tamil Nadu', value: 'Hosur|Tamil Nadu' },
        { label: 'Gandhinagar|Gujarat', value: 'Gandhinagar|Gujarat' },
        { label: 'Junagadh|Gujarat', value: 'Junagadh|Gujarat' },
        { label: 'Udaipur|Rajasthan', value: 'Udaipur|Rajasthan' },
        { label: 'Salem|Tamil Nadu', value: 'Salem|Tamil Nadu' },
        { label: 'Jhansi|Uttar Pradesh', value: 'Jhansi|Uttar Pradesh' },
        { label: 'Madurai|Tamil Nadu', value: 'Madurai|Tamil Nadu' },
        { label: 'Vijayawada|Andhra Pradesh', value: 'Vijayawada|Andhra Pradesh' },
        { label: 'Meerut|Uttar Pradesh', value: 'Meerut|Uttar Pradesh' },
        { label: 'Bikaner|Rajasthan', value: 'Bikaner|Rajasthan' },
        { label: 'Cuttack| Odisha', value: 'Cuttack| Odisha' },
        { label: 'Nashik|Maharashtra', value: 'Nashik|Maharashtra' },
        { label: 'Banswara|Rajasthan', value: 'Banswara|Rajasthan' },
        { label: 'Bhadreswar|West Bengal', value: 'Bhadreswar|West Bengal' },
        { label: 'Chilakaluripet|Andhra Pradesh', value: 'Chilakaluripet|Andhra Pradesh' },

        { label: 'Datia|Madhya Pradesh', value: 'Datia|Madhya Pradesh' },

        { label: 'Gangtok|Sikkim', value: 'Gangtok|Sikkim' },

        { label: 'Kalyani| West Bengal', value: 'Kalyani| West Bengal' },

        { label: 'Kapurthala|Punjab', value: 'Kapurthala|Punjab' },
        { label: 'Kasganj|Uttar Pradesh', value: 'Kasganj|Uttar Pradesh' },
        { label: 'Nagda|Madhya Pradesh', value: 'Nagda|Madhya Pradesh' },
        { label: 'Sujangarh|Rajasthan', value: 'Sujangarh|Rajasthan' },

    ];
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
        setLocationQuery(''); // Clear search query when modal is opened
    }, [modalVisible]);

    const handleValueChange = (value) => {
        setLocation(value);
        setModalVisible(false);
    };

    const handleSearch = (text) => {
        setLocationQuery(text);
        const filtered = options.filter(option =>
            option.label.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredOptions(filtered);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPasswordReenter(!showPasswordReEnter);
    };


    const onLoginPress = async () => {

        //spinner show 
        setLoadingSpinner(true);

        try {

            if (passwordreenter == password) {
                let data = {
                    "name": name,
                    "email": email,
                    "phonenumber": phonenumber,
                    "password": password,
                    "location": location,
                    "gst": gstnumber
                }

                const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/usersiginup', data)

                if (response?.status === true) {
                    Alert.alert("user Profile created ")
                    //spinner show 
                    setLoadingSpinner(false);
                }
                else {
                    Alert.alert(`user Profile not created ${response.message}`)
                    //spinner show 
                    setLoadingSpinner(false);
                }
            }
            else {
                Alert.alert("Password and reenter password not macth")
                //spinner show 
                setLoadingSpinner(false);
            }
        } catch (err) {

        }
    };


    const validatePassword = (password) => {
        const errors = [];

        // Check length
        if (password.length < 8) {
            errors.push("Password must be at least 8 characters long");
        }

        // Check for lowercase letter
        if (!/[a-z]/.test(password)) {
            errors.push("Password must contain at least one lowercase letter");
        }

        // Check for uppercase letter
        if (!/[A-Z]/.test(password)) {
            errors.push("Password must contain at least one uppercase letter");
        }

        // Check for numeric digit
        if (!/\d/.test(password)) {
            errors.push("Password must contain at least one numeric digit");
        }

        // Check for special character
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errors.push("Password must contain at least one special character");
        }

        return errors;
    };

    const handlePasswordChange = (text) => {
        const errors = validatePassword(text);
        setValidationErrors(errors);
    };


    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        {loadingSpinner && ( // Conditionally render ActivityIndicator when loading is true
                            <View style={styles.spinnerContainer}>
                                <ActivityIndicator size="100" color="#347855" />
                            </View>
                        )}
                        <View style={styles.loginFormView}>
                            <Text style={styles.logoText}>Create Your {'\n'}Account</Text>
                            <Text style={[styles.label_text, { flexDirection: 'row', alignItems: 'center' }]}>
                                Full Name
                                <Text style={{ color: 'red', fontSize: 25, marginLeft: 10, }}>*</Text>
                            </Text>

                            <TextInput
                                onChangeText={(text) => {
                                    setName(text);
                                    if (!text) {
                                        setNameError('Name is required');
                                    } else {
                                        setNameError('');
                                    }
                                }}
                                placeholder="Full Name"
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                            />
                            {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                            <Text style={styles.label_text}>Email
                                <Text style={{ color: 'red', fontSize: 25, marginLeft: 10, }}>*</Text>
                            </Text>
                            <TextInput
                                onChangeText={(text) => {
                                    setEmail(text);
                                    if (!text) {
                                        setEmailError('Email is required');
                                    } else {
                                        setEmailError('');
                                    }
                                }}

                                placeholder="Email"
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                            />
                            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                            <Text style={styles.label_text}>Phnone Number
                                <Text style={{ color: 'red', fontSize: 25, marginLeft: 10, }}>*</Text>
                            </Text>
                            <TextInput
                                onChangeText={(text) => {
                                    setPhoneNumber(text);
                                    if (!text) {
                                        setPhoneNumberError('Phonennumber is required');
                                    } else {
                                        setPhoneNumberError('');
                                    }
                                }}
                                placeholder="Phone Number"
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                            />
                            {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
                            <Text style={styles.label_text}>Password
                                <Text style={{ color: 'red', fontSize: 25, marginLeft: 10, }}>*</Text>
                            </Text>
                            <TextInput
                                onChangeText={(text) => {
                                    handlePasswordChange(text)
                                    setPassword(text);
                                    if (!text) {
                                        setPasswordError('Password is required');
                                    } else {
                                        setPasswordError('');
                                    }
                                }}
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
                            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                            {validationErrors.map((error, index) => (
                                <Text key={index} style={{ color: 'red', marginLeft: 10, }}>{error}</Text>
                            ))}
                            <Text style={styles.label_text}>ReEnterPassword
                                <Text style={{ color: 'red', fontSize: 25, marginLeft: 10, }}>*</Text>
                            </Text>
                            <TextInput
                                onChangeText={(text) => {
                                    setPasswordReenter(text);
                                    if (!text) {
                                        setPasswordReenterError('Password is required');
                                    } else {
                                        setPasswordReenterError('');
                                    }
                                }}

                                placeholder="ReEnterPassword"
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                                secureTextEntry={!showPasswordReEnter}
                            />
                            {validationErrors?.length == '0' ? <TouchableOpacity
                                style={styles.eyeIconContainer2}
                                onPress={togglePasswordVisibility2}
                            >
                                <Icon
                                    name={showPasswordReEnter ? 'eye-off' : 'eye'}
                                    type="feather"
                                    size={20}
                                    color="#808080"
                                />
                            </TouchableOpacity> : null}
                            {passwordReenterError ? <Text style={styles.errorText}>{passwordReenterError}</Text> : null}
                            <Text style={styles.label_text}>GST Number</Text>
                            <TextInput
                                onChangeText={setGstnumber}
                                placeholder="GST No."
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                            />

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
                                        <TextInput
                                            onChangeText={(text) => handleSearch(text)}
                                            placeholder="Search City"
                                            placeholderTextColor="#c4c3cb"
                                            style={styles.searchInput}
                                        />
                                        <ScrollView style={{ minHeight: 200 }}>
                                            {filteredOptions.map((option, index) => (
                                                <TouchableHighlight
                                                    key={index}
                                                    style={styles.optionItem}
                                                    underlayColor="#f0f0f0"
                                                    onPress={() => handleValueChange(option.value)}
                                                >
                                                    <Text style={styles.optionText}>{option.label}</Text>
                                                </TouchableHighlight>
                                            ))}
                                        </ScrollView>
                                    </View>
                                </View>
                            </Modal>
                            <Button
                                disabled={loadingSpinner}
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
