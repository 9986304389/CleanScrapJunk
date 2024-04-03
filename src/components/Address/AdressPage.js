import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'
import styles from "./styles";

export function AdressPage(props) {

    const { navigation, route } = props;
    const { loading, error, get, fetchData, post, remove } = useApi();
    const jwtToken = useSelector((state) => state.auth.token);
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    const [allMyAddress, setAllMyAddress] = useState([]);
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


    useEffect(() => {

        const fetchData = async () => {
            console.log("htt")
            try {
                const queryParameters = {
                    customer_id: phoneNumber, // Add your product code parameter value here

                };

                // Convert query parameters to string
                const queryString = new URLSearchParams(queryParameters).toString();
                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getAddressByUser?${queryString}`;

                const response = await get(url, jwtToken);


                if (response?.status == true) {
                    setAllMyAddress(response.result)
                }
                else {
                    setModelTitle('Get address fail')
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
        fetchData()
    }, [allMyAddress])

    const deleteAddress = async (customer_id, address_id) => {
        try {
            const queryParameters = {
                customer_id: customer_id, // Add your product code parameter value here
                address_id: address_id

            };
            console.log(queryParameters)
            // Convert query parameters to string
            const queryString = new URLSearchParams(queryParameters).toString();
            // Construct the complete URL with query parameters
            const url = `https://clean-scrap-jnck-backend.vercel.app/api/removeAddress?${queryString}`;

            const response = await remove(url, jwtToken);


            if (response?.status == true) {

                setAllMyAddress(prevProducts =>
                    prevProducts.filter(product => product.address_id !== address_id)
                );
                setModelTitle('Remove Address successfully')
                // Call the alert 
                setColorTitle('green');
                setColorDescription('black');
                setResponseMessage(response?.message)
                showAlert();
            }
            else {
                setModelTitle('Fail to remove address')
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

    return (
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <FontAwesome name="search" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                />
            </View>
            {allMyAddress.map((item, index) => (
                <View style={styles.adresscontainer}>
                    <View style={styles.addressTopContainer}>
                        <FontAwesome name="home" size={24} color="black" style={styles.homeIcon} />
                        <Text style={{ fontSize: 18 }}>Home</Text>
                        <TouchableOpacity style={styles.deleteIcon} onPress={async () => await deleteAddress(item.customer_id, item.address_id)}>
                            <FontAwesome name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>{item.address_line1} {item.address_line2} {item.city} {item.state} {item.postal_code}</Text>
                    </View>
                </View>
            ))}
            {/* <View style={styles.adresscontainer}>
                <View style={styles.addressTopContainer}>
                    <FontAwesome name="home" size={24} color="black" style={styles.homeIcon} />
                    <Text style={{ fontSize: 18 }}>Home</Text>
                    <TouchableOpacity style={styles.deleteIcon}>
                        <FontAwesome name="trash" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>53, Raja Muthiah Rd, Kannappar Thidal,Periyampet, Chennai,+91 1234567891</Text>
                </View>
            </View> */}
            <TouchableOpacity onPress={() => navigation.navigate('AddAddressPage')}>
                <Ionicons name="add-circle-sharp" size={45} color="black" />
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
        </View>
    );
}
