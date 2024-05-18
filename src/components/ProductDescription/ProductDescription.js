import React, { useState } from 'react';
import { Text, View, Button, Image, TouchableOpacity, Pressable, Modal, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from './styles';
import { Alert } from 'react-native';
import useApi from '../../apiCalls/ApiCalls';
import { useSelector, useDispatch } from 'react-redux'
import CustomAlert from '../alert/Alert';
import { ScrollView } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";

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
    const [loadingSpinner, setLoadingSpinner] = useState(false);

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


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Product Description',
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold',

            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: 10 }}>
                    <FontAwesome name="arrow-left" size={20} color="black" style={{ fontWeight: '100' }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    const handleAddToCart = ({ navigation }) => {
        // const { navigation } = props;
        navigation.navigate('MyCart', {
            productName,
            productPrice,
            quantity,
        });
    };

    const addToCart = async () => {

        setLoadingSpinner(true);
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

            setLoadingSpinner(false);
            setModelTitle('Add Cart successfully')
            // Call the alert 
            setColorTitle('green');
            setColorDescription('black');
            setResponseMessage(response?.message)
            showAlert();

        }
        else {
            setLoadingSpinner(false);
            setModelTitle('Add Cart Product fail')
            // Call the alert 
            setColorTitle('red');
            setColorDescription('black');
            setResponseMessage(response?.message)
            showAlert();
        }
    }

    const editWebyProducts = async (item) => {

        setLoadingSpinner(true);
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
                    setLoadingSpinner(false);
                    Alert.alert(`${response.message}`)

                }
                else {
                    Alert.alert(`${response.message}`)
                    setLoadingSpinner(false);
                }

            } catch (err) {
                setLoadingSpinner(false);
                console.log("err", err)
            }
        }
        else {
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
                    setLoadingSpinner(false);
                    Alert.alert(`${response.message}`)

                }
                else {
                    setLoadingSpinner(false);
                    Alert.alert(`${response.message}`)
                }

            } catch (err) {
                setLoadingSpinner(false);
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

    console.log("item", item)
    return (
        <ScrollView>
            <View style={styles.container}>
                {loadingSpinner && ( // Conditionally render ActivityIndicator when loading is true
                    <View style={styles.spinnerContainer}>
                        <ActivityIndicator size="100" color="#347855" />
                    </View>
                )}

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

                    {item.sub_products && item.sub_products.some(subProduct => subProduct.id !== null) && (
                        <ScrollView horizontal style={{ width: '80%' }}>
                            <DataTable style={styles.tableContainer}>
                                <DataTable.Header>
                                    <DataTable.Title style={styles.centeredTitle}>Name</DataTable.Title>
                                    <DataTable.Title style={styles.centeredTitle}>Size</DataTable.Title>
                                </DataTable.Header>
                                {item.sub_products.filter(subProduct => subProduct.id !== null).map((subProduct, index) => (
                                    <DataTable.Row key={index}>
                                        <DataTable.Cell style={styles.overflowCell}>{subProduct.name}</DataTable.Cell>
                                        <DataTable.Cell style={styles.overflowCell}>{subProduct.size}</DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                            </DataTable>
                        </ScrollView>
                    )}


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
                            <Text style={styles.buyBtnText}>Get a best price</Text>
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