import { View, Text, Button, ScrollView, ActivityIndicator, TouchableWithoutFeedback, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from "react-native";
import { Icon } from "react-native-paper";
import styles from "./styles";
import { useSelector, useDispatch } from 'react-redux'
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert';
import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function AddProducts(props) {
    const { navigation, route } = props;
    const { loading, error, get, fetchData, post, remove } = useApi();
    const jwtToken = useSelector((state) => state.auth.token);
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [productName, setProductName] = useState('');
    const [rate, setRate] = useState('');
    const [size, setSize] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuntity] = useState('');
    const [productcode, setProductCode] = useState('');
    const [loadingSpinner, setLoadingSpinner] = useState(false);


    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Add Offer's",
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold',

            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: 20 }}>
                    <FontAwesome name="arrow-left" size={20} color="black" style={{ fontWeight: '100' }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const onLoginPress = async () => {
        setLoadingSpinner(true);


        try {
            let data = {
                "product_name": productName,
                "rate": rate,
                "size": size,
                "quantity": quantity,
                "product_code": productcode,
                "description": description,
            }

            const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/Addofferandeditoffer', data, jwtToken)

            if (response?.status === true) {
                setLoadingSpinner(false);

                setModelTitle('Add offer successfully');
                setColorTitle('green');
                setColorDescription('black');
                setResponseMessage(response?.message)
                showAlert();
            }
            else {
                setLoadingSpinner(false);

                setModelTitle('Unable to add the offer')
                // Call the alert 
                setColorTitle('red');
                setColorDescription('black');
                setResponseMessage(response?.message)
                showAlert();
            }

        } catch (err) {
            console.error('add data:', error);
            setLoadingSpinner(false);

        }
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

                        <Text style={styles.logoText}>Add Offer Products</Text>
                        <Text style={styles.label_text}>Product Name</Text>
                        <TextInput
                            onChangeText={setProductName}
                            placeholder="Product Name"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Rate</Text>
                        <TextInput
                            onChangeText={setRate}
                            placeholder="Rate"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Size</Text>
                        <TextInput
                            onChangeText={setSize}
                            placeholder="Size"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Quantity</Text>
                        <TextInput
                            onChangeText={setQuntity}
                            placeholder="Size"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Descrption</Text>
                        <TextInput
                            onChangeText={setDescription}
                            placeholder="Description"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Product Code</Text>
                        <TextInput
                            onChangeText={setProductCode}
                            placeholder="Description"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                disabled={loadingSpinner}
                                style={styles.loginButton}
                                onPress={() => onLoginPress()}
                            >
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                                    Add Product
                                </Text>
                            </TouchableOpacity>
                        </View>
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
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}