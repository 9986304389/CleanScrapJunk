import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Pressable } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigation } from "@react-navigation/native";
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'
import { State } from "react-native-gesture-handler";
import  MidnightAPIComponent  from'./emailAPIComponent'

const MyCart = (props) => {
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
    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'My Cart',
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold'
            },
            headerLeft: () => (
                <AntDesign name="shoppingcart" size={25} color="black" style={styles.titleIcon} />
            ),

        });
    }, [navigation]);

    useEffect(() => {

        const fetchData = async () => {
            
            try {
                const queryParameters = {
                    customer_id: phoneNumber, // Add your product code parameter value here

                };

                // Convert query parameters to string
                const queryString = new URLSearchParams(queryParameters).toString();
                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getProductsByUser?${queryString}`;

                const response = await get(url, jwtToken);


                if (response?.status == true) {
                    setAllMyCartProducts(response.result)
                }
                else {
                    setModelTitle('Get cart prodct fail')
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

    }, [])

    // Function to make API call
const callAPI = () => {
    // Make your API call here
    console.log("API call triggered at midnight");
  };
  
 


    // // Function to remove item from cart
    const removeItem = async (product_code) => {

        try {
            const queryParameters = {
                customer_id: phoneNumber, // Add your product code parameter value here
                product_code: product_code

            };
            
            // Convert query parameters to string
            const queryString = new URLSearchParams(queryParameters).toString();
            // Construct the complete URL with query parameters
            const url = `https://clean-scrap-jnck-backend.vercel.app/api/removeCartProductByUser?${queryString}`;

            const response = await remove(url, jwtToken);


            if (response?.status == true) {

                setAllMyCartProducts(prevProducts =>
                    prevProducts.filter(product => product.product_code !== product_code)
                );
                setModelTitle('Remove cart item successfully')
                // Call the alert 
                setColorTitle('green');
                setColorDescription('black');
                setResponseMessage(response?.message)
                showAlert();
            }
            else {
                setModelTitle('Fail remove cart item')
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
    };

    // Function to place order
    const placeOrder = () => {
        // Implement logic to place the order
        navigation.navigate('OrderSummary', {
            getallgoingtoorderproducts: allMyCartProducts,

        })
        console.log("Placing order...");
    };


    return (
        <ScrollView>

            <View style={styles.container}>

                {allMyCartProducts.map((item, index) => (
                    <View style={styles.cartItem} key={index}>
                        <View style={styles.card}>
                            <Image source={{ uri: item.image_url }} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>{item.price}</Text>
                                <Text>Quantity: {item.quantity}</Text>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity onPress={async () => await removeItem(item.product_code)}>
                                        <FontAwesome name="trash" size={24} color="black" style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}

                {allMyCartProducts.length !== 0 && (
                    <Pressable style={styles.orderButton} onPress={() => placeOrder()}>
                        <Text style={styles.orderButtonText}>Buy Now</Text>
                    </Pressable>)}
                    <MidnightAPIComponent />

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
    );
}

export default MyCart;
