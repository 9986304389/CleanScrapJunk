import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigation } from "@react-navigation/native";
import useApi from '../../apiCalls/ApiCalls';

const MyCart = (props) => {
    const { navigation, route } = props;
    const { loading, error, get, fetchData, post } = useApi();
    const jwtToken = useSelector((state) => state.auth.token);
    const [allMyCartProducts, setAllMyCartProducts] = useState([]);
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
        console.log("hello")
        const fetchData = async () => {
            try {
                const queryParameters = {
                    customer_id: '9986304389', // Add your product code parameter value here

                };

                // Convert query parameters to string
                const queryString = new URLSearchParams(queryParameters).toString();
                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getProductsByUser?${queryString}`;
                console.log('URL:', url);
                const response = await get(url, jwtToken);
                //console.log('Response:', response); // Log the response

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

    console.log(allMyCartProducts)

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
        <>
            {/* <View style={styles.titleView}>
                <AntDesign name="shoppingcart" size={25} color="black" style={styles.titleIcon} />
                <Text style={styles.title}>My Cart</Text>
            </View> */}
            <View style={styles.container}>
                {/* {cartItems.map((item, index) => ( */}
                {/* <View style={styles.cartItem}>
                    <View style={styles.card}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <View style={styles.textCard}>
                            <Text style={styles.name}>productName</Text>
                            <Text style={styles.price}>productPrice</Text>
                            <Text>Quantity: quantity</Text>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity style={styles.orderButton} onPress={placeOrder}>
                                    <Text style={styles.orderButtonText}>Buy Now</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeItem(index)}>
                                    <AntDesign name="delete" size={24} color="black" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View> */}

                {allMyCartProducts.map((item, index) => (
                    <View style={styles.cartItem} key={index}>
                        <View style={styles.card}>
                            <Image source={{ uri: item.image_url }} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>{item.price}</Text>
                                <Text>Quantity: {item.quantity}</Text>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity style={styles.orderButton} onPress={placeOrder}>
                                        <Text style={styles.orderButtonText}>Buy Now</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => removeItem(index)}>
                                        <AntDesign name="delete" size={24} color="black" style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
                {/* <View style={styles.cartItem}>
                    <View style={styles.card}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <View style={styles.textCard}>
                            <Text style={styles.name}>{productName}</Text>
                            <Text style={styles.price}>${productPrice}</Text>
                            <Text>Quantity: {quantity}</Text>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity style={styles.orderButton} onPress={placeOrder}>
                                    <Text style={styles.orderButtonText}>Buy Now</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeItem(index)}>
                                    <AntDesign name="delete" size={24} color="black" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.cartItem}>
                    <View style={styles.card}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <View style={styles.textCard}>
                            <Text style={styles.name}>{productName}</Text>
                            <Text style={styles.price}>${productPrice}</Text>
                            <Text>Quantity: {quantity}</Text>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity style={styles.orderButton} onPress={placeOrder}>
                                    <Text style={styles.orderButtonText}>Buy Now</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeItem(index)}>
                                    <AntDesign name="delete" size={24} color="black" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View> */}
                {/* ))} */}
            </View>
        </>
    );
}

export default MyCart;