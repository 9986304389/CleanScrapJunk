import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const OrderSummary = ({ route }) => {

    const { productName, productPrice, quantity } = route.params;

    // State variables
    const [deliveryAddress, setDeliveryAddress] = useState('123 Main St, City, CountryCity, CountryCity, CountryCity, CountryCity, Country');
    // const [quantity, setQuantity] = useState(1);
    const [price] = useState(10); // Assuming price is $10 per product

    // Function to handle changing delivery address
    const handleChangeAddress = () => {
        // Implement functionality to change the delivery address
    };

    const priceParts = productPrice.split(' ');
    const priceValue = parseFloat(priceParts[0]);
    // Function to calculate total amount
    const getTotalAmount = () => {
        return quantity * priceValue;
    };

    return (
        <View style={styles.container}>
            <View style={styles.addressContainer}>
                <View style={styles.addressDiv}>
                    <Text style={styles.label}>Delivery Address:</Text>
                    <Text style={styles.address}>{deliveryAddress}</Text>
                </View>
                <View style={styles.changeAddressBtnContainer}>
                    <TouchableOpacity title="Change Address" onPress={handleChangeAddress} style={styles.changeAddressBtn} >
                        <Text style={styles.changeAddressTxt}>Change Address</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.productDetailsContainer}>
                <View style={styles.card}>
                    <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                    <View style={styles.textCard}>
                        <Text style={styles.name}>{productName}</Text>
                        <Text style={styles.price}>${productPrice}</Text>
                        <Text>Quantity: {quantity}</Text>
                    </View>
                </View>
                {/* <Text style={styles.label}>Product Details:</Text>
                <Text style={styles.description}>Description: Your product description here</Text>
                <Text style={styles.price}>Price: ${price}</Text> */}
            </View>

            {/* <View style={styles.quantityContainer}>
                <Text style={styles.label}>Quantity:</Text>
                <TextInput
                    style={styles.quantityInput}
                    keyboardType="numeric"
                    value={quantity.toString()}
                    onChangeText={(text) => setQuantity(parseInt(text))}
                />
            </View> */}

            <View style={styles.totalAmountContainer}>
                <Text style={styles.label}>Total Amount:</Text>
                <Text style={styles.totalAmount}>₹{getTotalAmount()}</Text>
            </View>
            <View>
                <View style={styles.continueBtnContainer}>
                    <TouchableOpacity onPress={handleChangeAddress} style={styles.continueBtn} >
                        <Text style={styles.continueTxt}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default OrderSummary;