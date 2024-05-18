import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useSelector, useDispatch } from 'react-redux'

import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'

const MyOrders = (props) => {

    const { navigation, route } = props;
    const { loading, error, get, fetchData, post, remove } = useApi();
    const jwtToken = useSelector((state) => state.auth.token);
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    const [allSucess, setAllSucess] = useState([]);
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [refreshCount, setRefreshCount] = useState(0);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const initialLoad = useRef(true);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        setRefreshCount(prevCount => prevCount + 1);

    }, []);


    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'My Orders',
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold',

            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')} style={{ marginLeft: 10 }}>
                    <FontAwesome name="arrow-left" size={20} color="black" style={{ fontWeight: '100' }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);



    useEffect(() => {

        if (initialLoad.current) {
            setLoadingSpinner(true);

            initialLoad.current = false;
        }

        const fetchData = async () => {

            try {
                const queryParameters = {
                    customer_id: phoneNumber, // Add your product code parameter value here
                    status: "Completed"
                };

                // Convert query parameters to string
                const queryString = new URLSearchParams(queryParameters).toString();
                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getOrdersByStatus?${queryString}`;

                const response = await post(url, null, jwtToken);


                if (response?.status == true) {
                    setAllSucess(response.result);
                    setRefreshing(false);
                    setLoadingSpinner(false);

                }
                else {
                    setLoadingSpinner(false);
                    setModelTitle('Get all sucess prodct fail')
                    // Call the alert 
                    setColorTitle('red');
                    setColorDescription('black');
                    setResponseMessage(response?.message)
                    showAlert();
                }

            } catch (error) {
                setLoadingSpinner(false);
                console.error('Error fetching initial data:', error);
                // Handle error if needed
            }
        }
        fetchData()
    }, [refreshCount])

    //console.log(allSucess)
    // Example usage

    return (
        <>
            {loadingSpinner && ( // Conditionally render ActivityIndicator when loading is true
                <View style={styles.spinnerContainer}>
                    <ActivityIndicator size="100" color="#347855" />
                </View>
            )}
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                {allSucess.map((item, index) => (
                    <View key={item?.order_id} style={styles.container}>

                        <View style={styles.orderDate}>
                            <FontAwesome name="calendar" size={20} color='black' />
                            <Text style={styles.orderDateTxt}>{formatDate(item?.order_date)}</Text>
                        </View>

                        <View style={styles.cartItem}>
                            <View style={styles.card}>
                                <Image source={{ uri: item?.img_url }} style={styles.image} />
                                <View style={styles.textCard}>
                                    <Text style={styles.name}>{item?.name}</Text>
                                    <Text style={styles.price}>{item?.total_amount}</Text>
                                    <Text style={styles.statusCompleted}>{item?.status}</Text>
                                    <Text style={styles.amt}>₹ {item?.total_amount}</Text>
                                </View>
                            </View>

                            {/* <View style={styles.iconContainer}>
                            <TouchableOpacity style={styles.orderButton}>
                                <Text style={styles.orderButtonText}>Track Order</Text>
                            </TouchableOpacity>
                        </View> */}
                        </View>
                    </View>
                ))
                }


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

            </ScrollView >
        </>
    );

}

const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero indexed
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};




export default MyOrders;