import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigation } from "@react-navigation/native";
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'
import { State } from "react-native-gesture-handler";


const MyCart = (props) => {
    const { navigation, route } = props;
    const { loading, error, get, fetchData, post } = useApi();
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
                    setModelTitle('Get OTP Fail')
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



    // const { productName, productPrice, quantity } = route.params;

    // const [cartItems, setCartItems] = useState([]);

    // // Function to remove item from cart
    // const removeItem = (index) => {
    //     const updatedCartItems = [...cartItems];
    //     updatedCartItems.splice(index, 1);
    //     setCartItems(updatedCartItems);
    // };

    // // Function to place order
    // const placeOrder = () => {
    //     // Implement logic to place the order
    //     navigation.navigate('OrderSummary', {
    //         productName: productName,
    //         productPrice: productPrice,
    //         quantity: quantity
    //     })
    //     console.log("Placing order...");
    // };
    const placeOrder = () => {
        console.log("Placing order...");
    }

    // useEffect(() => {
    //     // Check if the product is already in the cart
    //     const existingItemIndex = cartItems.findIndex(item => item.productName === productName);
    //     if (existingItemIndex !== -1) {
    //         // If the product is already in the cart, update its quantity
    //         const updatedCartItems = [...cartItems];
    //         updatedCartItems[existingItemIndex].quantity += quantity;
    //         setCartItems(updatedCartItems);
    //     } else {
    //         setCartItems([...cartItems, { productName, productPrice, quantity }]);
    //     }
    // }, [productName, productPrice, quantity]);


    return (
        <ScrollView>
            {/* <View style={styles.titleView}>
                <AntDesign name="shoppingcart" size={25} color="black" style={styles.titleIcon} />
                <Text style={styles.title}>My Cart</Text>
            </View> */}
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
                                    <TouchableOpacity onPress={() => removeItem(index)}>
                                        <FontAwesome name="trash" size={24} color="black" style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}

                <TouchableOpacity style={styles.orderButton} onPress={placeOrder}>
                    <Text style={styles.orderButtonText}>Buy Now</Text>
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
        </ScrollView>
    );
}

export default MyCart;