import React, { useState } from 'react';
import { Text, View, Button, Image, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';

const ProductDescription = ({ route, navigation }) => {
    const [quantity, setQuantity] = useState(0); // Initial quantity of the product

    const { productName, productPrice, likedStatus, productDescription } = route.params;


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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product Description</Text>
            <View style={styles.contentContainer}>
                <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
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
                <Text style={styles.productDesc}>{productName}  -  {productPrice}</Text>
                <Text style={styles.productDesc2}>{productDescription}</Text>

                {/* <Button title="Place Order" onPress={handlePlaceOrder} /> */}

                <View style={styles.buttonRow} >
                    <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('MyCart', { productName: productName, productPrice: productPrice, quantity: quantity })}>
                        <Text style={styles.cardBtnText}>Add to Cart</Text>
                    </TouchableOpacity>
                    <Pressable style={styles.buyBtn} onPress={() => navigation.navigate('OrderSummary', { productName: productName, productPrice: productPrice, quantity: quantity })}>
                        <Text style={styles.buyBtnText}>Buy Now</Text>
                    </Pressable>
                </View>
            </View>
        </View >
    );

};

export default ProductDescription;