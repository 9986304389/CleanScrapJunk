import React, { useState } from 'react';
import { Text, View, Button, Image, TouchableOpacity, Pressable, Modal, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import { Alert } from 'react-native';
import useApi from '../../apiCalls/ApiCalls';
import { useSelector, useDispatch } from 'react-redux'
import CustomAlert from '../alert/Alert';
import { ScrollView } from 'react-native-gesture-handler';

const ProductDescription = ({ route, navigation }) => {
    const { loading, error, get, fetchData, post } = useApi();
    const [quantity, setQuantity] = useState(1); // Initial quantity of the product
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    const user = useSelector((state) => state.profile.user.userType);
    const jwtToken = useSelector((state) => state.auth.token);
    const { item } = route.params;
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleModel, setIsVisibleModel] = useState(false);
    const [editablePrices, SeteditablePrices] = useState("");
    const [totalPrice, SetPrice] = useState("");

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
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }

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

        const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/addProductstoCartByUser', data, jwtToken)

        if (response?.status === true) {

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

    const editWebyProducts = async (item) => {

        if (item.typeofproduct == "webuy") {
            try {
                let data = {
                    "product_id": item?.product_id,
                    "product_code": item?.product_code,
                    "name": item?.name,
                    "description": item?.description,
                    "price": editablePrices,

                }

                console.log(data)
                const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/weBuyProductAddAndEdit', data, jwtToken)

                if (response?.status === true) {
                    Alert.alert(`${response.message}`)
                }
                else {
                    Alert.alert(`${response.message}`)
                }

            } catch (err) {

                console.log("err", err)
            }
        }
        else{
            try {
                let data = {
                    "product_id": item?.product_id,
                    "product_code": item?.product_code,
                    "name": item?.name,
                    "description": item?.description,
                    "price": editablePrices,

                }

                console.log(data)
                const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/Editproducts', data, jwtToken)

                if (response?.status === true) {
                    Alert.alert(`${response.message}`)
                }
                else {
                    Alert.alert(`${response.message}`)
                }

            } catch (err) {

                console.log("err", err)
            } 
        }
    }

    const OpenMode = () => {
        setIsVisibleModel(true)
    }

    const OpenClsoe = () => {
        setIsVisibleModel(false)
    }

    const handleConfirmEdit = async (item) => {
        setIsVisibleModel(false);
        await editWebyProducts(item);
    }
    item.quantity = quantity;
    console.log(user)


    return (
        <ScrollView>
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
                    <Text style={styles.productDesc}>{item.name}  -  ₹ {quantity * (item?.price)}</Text>
                    <Text style={styles.productDesc2}>{item.description}</Text>

                    {/* <Button title="Place Order" onPress={handlePlaceOrder} /> */}
                    {user === '1' && (<Pressable style={styles.editbutton} onPress={() => OpenMode()}>
                        <Text style={styles.buyBtnText}>Edit Product</Text>
                    </Pressable>
                    )}

                    <View style={styles.buttonRow} >
                        {/* <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('MyCart', { productName: productName, productPrice: productPrice, quantity: quantity })}> */}

                        <TouchableOpacity style={styles.cartBtn} onPress={addToCart}>
                            <Text style={styles.cardBtnText}>Add to Cart</Text>
                        </TouchableOpacity>
                        <Pressable style={styles.buyBtn} onPress={() => navigation.navigate('OrderSummary', { getallgoingtoorderproducts: item })}>
                            <Text style={styles.buyBtnText}>Buy Now</Text>
                        </Pressable>


                    </View>
                </View>
                <SafeAreaView style={styles.modelcontainer}>

                    <Modal visible={isVisibleModel} animationType="fade" transparent={true}>
                        <TouchableOpacity style={styles.modelmodalContainer}>
                            <View style={styles.modelmodelmodalView}>
                                <View style={styles.modelalert}>
                                    <Text style={styles.modelalertTitle}>Enter Price</Text>
                                    <TextInput placeholder='Enter Price' keyboardType='numeric' placeholderTextColor="#000" style={styles.textInput} onChangeText={(value) => SeteditablePrices(value)} />

                                    <View style={styles.alertButtonGroup}>
                                        <Pressable style={styles.alertButton}>
                                            <Button style={styles.ButtonCollor} title="OK" onPress={() => handleConfirmEdit(item)} />
                                        </Pressable>
                                        <Pressable style={styles.alertButton}>
                                            <Button style={styles.ButtonCollor} title="Cancel" onPress={() => OpenClsoe()} />
                                        </Pressable>

                                    </View>


                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </SafeAreaView>
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
        </ScrollView>
    );

};

export default ProductDescription;