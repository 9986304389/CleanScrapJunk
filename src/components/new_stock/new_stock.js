import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, RefreshControl, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigation } from "@react-navigation/native";
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'
import { State } from "react-native-gesture-handler";


const new_stock = (props) => {
    const { navigation, route } = props;
    const { loading, error, get, fetchData, post, remove } = useApi();
    const jwtToken = useSelector((state) => state.auth.token);
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    const [allMyCartProducts, setAllMyCartProducts] = useState([]);
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
            headerTitle: 'New Stock',
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold'
            },
            headerLeft: () => (
                <AntDesign name="mail" size={25} color="black" style={styles.titleIcon} />
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

                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getAllofferProducts`;

                const response = await get(url, jwtToken);


                if (response?.status == true) {
                    setAllMyCartProducts(response.result);
                    setRefreshing(false);
                    setLoadingSpinner(false);
                }
                else {
                    setLoadingSpinner(false);
                    setModelTitle('Get cart prodct fail')
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


    // Function to place order
    const placeOrder = () => {
        // Implement logic to place the order
        navigation.navigate('OrderSummary', {
            getallgoingtoorderproducts: allMyCartProducts,

        })
        console.log("Placing order...");
    };


    return (
        <>
            {loadingSpinner && ( // Conditionally render ActivityIndicator when loading is true
                <View style={styles.spinnerContainer}>
                    <ActivityIndicator size="100" color="#347855" />
                </View>
            )}
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                <View style={styles.container}>

                    {allMyCartProducts.map((item, index) => (
                        <View style={styles.cartItem} key={index}>

                            <View style={styles.card}>
                                <View style={styles.imagecard}>
                                    <Image source={require('../../../assets/offericon.jpg')} style={styles.image} />
                                </View>
                                <View style={styles.textCard}>
                                    <Text style={styles.name}>Name:{item.product_name}</Text>
                                    <Text style={styles.price}>Rate:{item.rate}</Text>
                                    <Text style={styles.price}>Size:{item.size}</Text>
                                    <Text style={styles.price}>Quantity: {item.quantity}</Text>
                                    {/* <Text style={styles.price}>Description: {item.description}</Text> */}
                                </View>
                            </View>
                        </View>
                    ))}


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
            </ScrollView>
        </>
    );
}

export default new_stock;
