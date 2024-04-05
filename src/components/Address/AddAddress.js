import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'
import { useSelector } from "react-redux";
const AddAddress = () => {
    const jwtToken = useSelector((state) => state.auth.token);
    const { loading, error, get, fetchData, post, remove } = useApi();
    const user = useSelector((state) => state.profile.user);
    const [address_line1, setaddress_line1] = useState("");
    const [address_line2, setaddress_line2] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [postal_code, setpostal_code] = useState("");
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };

    const add_Address = async () => {

        let data = {
            "customer_id": user?.phoneNumber,
            "address_line1": address_line1,
            "address_line2": address_line2,
            "city": city,
            "state": state,
            "postal_code": postal_code,
            "name": user?.name
        }

        const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/AddressAddAndEdit', data, jwtToken)

        if (response?.status === true) {

            setModelTitle('Add Address successfully')
            // Call the alert 
            setColorTitle('green');
            setColorDescription('black');
            setResponseMessage(response?.message)
            showAlert();
        }
        else {
            setModelTitle('Add Address fail')
            // Call the alert 
            setColorTitle('red');
            setColorDescription('black');
            setResponseMessage(response?.message)
            showAlert();
        }
    }
    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.containerView}>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}

                <View style={styles.loginFormView}>
                    <Text style={styles.logoText}>Add Your Address</Text>
                    {/* <Text style={styles.label_text}>Door No. / Plot No.</Text> */}
                    {/* <TextInput
                        onChangeText={setaddress_line1}
                        placeholder="Door No. / Plot No."
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    /> */}
                    <Text style={styles.label_text}>Address line 1</Text>
                    <TextInput
                        onChangeText={setaddress_line1}
                        placeholder="Address line 1"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                    <Text style={styles.label_text}>Address line 2</Text>
                    <TextInput
                        onChangeText={setaddress_line2}
                        placeholder="Address line 2"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />

                    <Text style={styles.label_text}>City</Text>
                    <TextInput
                        onChangeText={setcity}
                        placeholder="City"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                    <Text style={styles.label_text}>State</Text>
                    <TextInput
                        onChangeText={setstate}
                        placeholder="State"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                    <Text style={styles.label_text}>Pincode</Text>
                    <TextInput
                        onChangeText={setpostal_code}
                        placeholder="Pincode"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                </View>

                <TouchableOpacity style={styles.submitAddressBtn} onPress={async () => await add_Address()}>
                    <Text style={styles.submitAddressText}>
                        Submit your address
                    </Text>
                </TouchableOpacity>

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
                {/* </TouchableWithoutFeedback> */}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default AddAddress;