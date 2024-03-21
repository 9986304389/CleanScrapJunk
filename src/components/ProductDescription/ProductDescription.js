import React, { useState } from 'react';
import { Text, View, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import { Alert } from 'react-native';
import useApi from '../../apiCalls/ApiCalls';
import { useSelector, useDispatch } from 'react-redux'
import CustomAlert from '../alert/Alert';

const ProductDescription = ({ route, navigation }) => {
    const { loading, error, get, fetchData, post } = useApi();
    const [quantity, setQuantity] = useState(0); // Initial quantity of the product
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    const jwtToken = useSelector((state) => state.auth.token);
    const { item } = route.params;
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



    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handlePlaceOrder = () => {
        // Implement logic to place the order
        console.log(`Placing order for ${quantity} items.`);
    };

    const handleAddToCart = ({ navigation }) => {
        // const { navigation } = props;
        navigation.navigate('MyCart', {
            productName,
            productPrice,
            quantity,
        });
    };

    const addToCart = async () => {
        let data = {

            "name": item.name,
            "customer_id": phoneNumber,
            "product_id": item?.product_id,
            "product_code": item.product_code,
            "quantity": quantity.toString(),
            "price": item.price,
            "image_url": item.image_url

        }
        console.log(data)
        console.log(jwtToken)
        const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/addProductstoCartByUser', data, jwtToken)

        if (response?.status === true) {
            console.log("call api if it success give alert ")


            setModelTitle('Add Cart successfully')
            // Call the alert 
            setColorTitle('green');
            setColorDescription('black');
            setResponseMessage(response?.message)
            showAlert();
        }
        else {
            setModelTitle('Add Cart Product fail')
            // Call the alert 
            setColorTitle('red');
            setColorDescription('black');
            setResponseMessage(response?.message)
            showAlert();
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product Description</Text>
            <View style={styles.contentContainer}>
                <Image source={{ uri: item.image_url }} style={styles.image} />
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={handleDecrement}>
                        <Text style={[styles.buttonSize, { opacity: quantity === 0 ? 0.3 : 1 }]}>
                            -
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity onPress={handleIncrement} >
                        <Text style={styles.buttonSize}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.productDesc}>{item.name}  -  ₹ {item.price}</Text>
                <Text style={styles.productDesc2}>{item.description}</Text>

                {/* <Button title="Place Order" onPress={handlePlaceOrder} /> */}

                <View style={styles.buttonRow} >
                    {/* <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('MyCart', { productName: productName, productPrice: productPrice, quantity: quantity })}> */}

                    <TouchableOpacity style={styles.cartBtn} onPress={addToCart}>
                        <Text style={styles.cardBtnText}>Add to Cart</Text>
                    </TouchableOpacity>
                    <Pressable style={styles.buyBtn} onPress={() => navigation.navigate('OrderSummary', { productName: item.name, productPrice: item.price, quantity: item.quantity })}>
                        <Text style={styles.buyBtnText}>Buy Now</Text>
                    </Pressable>
                </View>
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
        </View >
    );

};

export default ProductDescription;