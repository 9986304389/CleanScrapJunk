import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";

import styles from "./styles";
import { AdressPage } from "../Address/AdressPage";
import useApi from '../../apiCalls/ApiCalls';
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import CustomAlert from '../alert/Alert'
import stylesAdrees from "./addressstyle"
import { setAddress } from "../store/address/addressSlice";
const ProgressBar = ({ currentPage, pageNames }) => {

    return (
        <View style={styles.progressBar}>
            <View style={[styles.stepContainer, { flex: 1 }]}>
                <StepIndicator step={1} currentPage={currentPage} />
                <Text style={styles.pageName}>{pageNames[0]}</Text>
                <View style={[styles.stepLine, currentPage >= 2 ? styles.activeLine : null]} />
            </View>
            <View style={[styles.stepContainer, { flex: 1 }]}>
                <StepIndicator step={2} currentPage={currentPage} />
                <Text style={styles.pageName2}>{pageNames[1]}</Text>
                {/* <View style={[styles.stepLine, currentPage >= 3 ? styles.activeLine : null]} /> */}
            </View>
            {/* <StepIndicator step={3} currentPage={currentPage} />
            <Text style={styles.pageName3}>{pageNames[2]}</Text> */}
        </View>
    );
};

const StepIndicator = ({ step, currentPage }) => {
    return (
        <>
            <View style={[styles.stepIndicator, step === currentPage ? styles.activeStep : null]}>
                <Text style={[styles.stepText, step === currentPage ? styles.activeStep : null]}>{step}</Text>
            </View>
        </>
    );
};

const AddressPage = ({ onNext, route, productName, productPrice, quantity, navigation }) => {
    const { loading, error, get, fetchData, post, remove } = useApi();
    const jwtToken = useSelector((state) => state.auth.token);
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    const [allMyAddress, setAllMyAddress] = useState([]);
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };


    useEffect(() => {

        const fetchData = async () => {

            try {
                const queryParameters = {
                    customer_id: phoneNumber, // Add your product code parameter value here

                };

                // Convert query parameters to string
                const queryString = new URLSearchParams(queryParameters).toString();
                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getAddressByUser?${queryString}`;

                const response = await get(url, jwtToken);


                if (response?.status == true) {
                    setAllMyAddress(response.result)
                }
                else {
                    setModelTitle('Get address fail')
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
    }, [allMyAddress])


    return (
        <View style={stylesAdrees.maincontainer}>
            {/* <View style={styles.container}>
                <FontAwesome name="search" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                />
            </View> */}
            {allMyAddress.map((item, index) => (
                <View style={stylesAdrees.adresscontainer} >
                    <View style={stylesAdrees.addressTopContainer}>
                        <FontAwesome name="home" size={24} color="black" style={stylesAdrees.homeIcon} />
                        <Text style={{ fontSize: 18 }}>Home</Text>
                        <TouchableOpacity style={stylesAdrees.deleteIcon} onPress={() => onNext(item)}>
                            <Ionicons name="checkmark-circle" size={35} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>{item.address_line1} {item.address_line2} {item.city} {item.state} {item.postal_code}</Text>
                    </View>

                </View>
            ))}

            {/* <TouchableOpacity onPress={() => navigation.navigate('AddAddressPage')}>
                <Ionicons name="add-circle-sharp" size={45} color="black" />
            </TouchableOpacity> */}
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

    );
};

const OrderSummaryPage = ({ onNext, onPrev, route, selectAddress }) => {
    const { loading, error, get, fetchData, post, remove } = useApi();
    const [arrayOfOrderItems, setArrayOfOrderItems] = useState([]);
    const jwtToken = useSelector((state) => state.auth.token);
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    const user = useSelector((state) => state.profile.user);
    const [allMyAddress, setAllMyAddress] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const Address = useSelector((state) => state.address.address);
    const dispatch = useDispatch();
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

    const handleNext = async (selectAddress, orderItems, totalAmount) => {
        // onNext(selectedAddress, orderItems, totalAmount); // Invoke the parent function passed as prop

        try {
            let data = {
                "userdetails": user,
                "orderdetails": orderItems,
                "totalAmount": totalAmount,
                "address": selectAddress,
            }
            
           // console.log(data)

            const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/sendPlaceorderemail', data, jwtToken)

            if (response?.status === true) {
                setModelTitle('Order Placed successfully');
                setColorTitle('green');
                setColorDescription('black');
                setResponseMessage(response?.message)
                showAlert();
            }
            else {

                setModelTitle('Unable Order Placed')
                // Call the alert 
                setColorTitle('red');
                setColorDescription('black');
                setResponseMessage(response?.message)
                showAlert();
            }

        } catch (err) {
            console.error('add data:', error);
        }
    }

    useEffect(() => {

        // Check if route.params.getallgoingtoorderproducts is an array
        if (Array.isArray(route.params.getallgoingtoorderproducts)) {
            // If it's an array, directly set the state
            setArrayOfOrderItems(route.params.getallgoingtoorderproducts);
        } else {
            // If it's not an array, convert it to an array and then set the state
            setArrayOfOrderItems([route.params.getallgoingtoorderproducts]);
        }
        const fetchData = async () => {

            try {
                const queryParameters = {
                    customer_id: phoneNumber, // Add your product code parameter value here

                };
                // Convert query parameters to string
                const queryString = new URLSearchParams(queryParameters).toString();
                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getAddressByUser?${queryString}`;

                const response = await get(url, jwtToken);


                if (response?.status == true) {
                    setAllMyAddress(response.result);

                    // //Simulating fetching user data from an API
                    const userData = {
                        address_line1: response?.result[0].address_line1,
                        address_line2: response?.result[0].address_line2,
                        city: response?.result[0].city,
                        state: response?.result[0].state,
                        postal_code: response?.result[0].postal_code

                    };

                    dispatch(setAddress(userData));

                    if (!selectAddress && response.result.length > 0) {
                        setSelectedAddress(response.result[0]); // Set the first address as selected if none is provided
                    }

                    if (Address) {
                        setSelectedAddress(Address)
                    }

                }
                else {
                    setModelTitle('Get address fail')
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
    }, []);


    let totalAmount = 0;

    const getTotalAmount = () => {
        arrayOfOrderItems.forEach(item => {
            // Assuming each item in arrayOfOrderItems has properties quantity and price
            totalAmount += item.quantity * item.price;
        });
        return totalAmount;
    };


    return (
        <ScrollView>
            <View style={styles.container2}>
                <View style={styles.addressContainer}>
                    <View style={styles.addressDiv}>
                        <Text style={styles.label}>Delivery Address:</Text>
                        {/* {selectedAddress ? (
                            <Text style={styles.address}>
                                {selectedAddress.address_line1} {selectedAddress.address_line2} {selectedAddress.city} {selectedAddress.state} {selectedAddress.postal_code}
                            </Text>
                        ) : ( */}
                        <Text style={styles.address}>{selectAddress.address_line1} {selectAddress.address_line2} {selectAddress.city} {selectAddress.state} {selectAddress.postal_code}</Text>
                        {/* )} */}

                    </View>
                    <View style={styles.changeAddressBtnContainer}>
                        <TouchableOpacity title="Change Address" onPress={onPrev} style={styles.changeAddressBtn} >
                            <Text style={styles.changeAddressTxt}>Select Addres</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {arrayOfOrderItems?.map((item, index) => (
                    <View style={styles.productDetailsContainer}>
                        <Image source={{ uri: item?.image_url }} style={styles.image} />
                        <View style={styles.textCard}>
                            <Text style={styles.name}>{item?.name}</Text>
                            <Text style={styles.price}>${item?.price}</Text>
                            <Text>Quantity: {item?.quantity}</Text>
                        </View>
                    </View>
                ))}
                {/* <View style={styles.totalAmountContainer}>
                    <Text style={styles.label}>Total Amount:</Text>
                    <Text style={styles.totalAmount}>₹{getTotalAmount()}</Text>
                </View> */}
                <View style={styles.lastcontainer}>
                    <View style={styles.totalAmountContainer}>
                        <Text style={styles.label}>Total Amount:</Text>
                        <Text style={styles.totalAmount}>₹{getTotalAmount()}</Text>
                    </View>

                    <View style={styles.continueBtnContainer}>
                        <TouchableOpacity onPress={() => handleNext(selectAddress, arrayOfOrderItems, totalAmount)} style={styles.continueBtn} >
                            <Text style={styles.continueTxt}>Continue</Text>
                        </TouchableOpacity>
                    </View>
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
        </ScrollView>
    );
};

const PaymentPage = ({ onPrev, navigation, selectAddress, orderItems, totalAmount }) => {
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    const jwtToken = useSelector((state) => state.auth.token);
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

    const PlaceOrder = async () => {

        const productsData = orderItems.map((item) => ({
            product_code: item?.product_code,
            customer_id: phoneNumber,
            status: "Completed",
            total_amount: totalAmount,
            payment_method: "cash on delivery",
            address: `${selectAddress.address_line1} ${selectAddress.address_line2}, ${selectAddress.city}, ${selectAddress.postal_code}, ${selectAddress.state}`,
            name: item?.name
        }));

        console.log(productsData)
        try {
            const response = await fetch('https://clean-scrap-jnck-backend.vercel.app/api/placeorder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Assuming jwtToken is a variable containing your JWT token
                    'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify({ products: productsData })
            });

            const responseData = await response.json();


            if (response.ok) {
                setModelTitle('Order Place');
                setColorTitle('green');
                setColorDescription('black');
                setResponseMessage(responseData.message);
                showAlert();
            } else {
                setModelTitle('Order Place fail');
                setColorTitle('red');
                setColorDescription('black');
                setResponseMessage(responseData.message);
                showAlert();
            }
        } catch (error) {
            console.error('Error occurred while placing order:', error);
            // Handle error appropriately
        }
    }

    return (
        <View style={styles.pageContainer}>

            <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Payment Page onprogress</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPrev} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'blue', marginTop: 20, padding: 10, borderRadius: 5 }} onPress={() => { PlaceOrder() }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
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
    );
};

const OrderSteps = (props) => {
    const { navigation, route } = props;
    const [selectAddress, setSelectedAddress] = useState("");
    const [orderItems, setOrderItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState("");



    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'OrderSummary',
            headerTitleStyle: {
                marginLeft: 20,
                fontWeight: 'bold'
            },
            headerLeft: () => (
                null
            ),

        });
    }, [navigation]);
    const [currentPage, setCurrentPage] = useState(2);

    const onNext = (selectedAddress, orderitem, totalAmount) => {

        if (selectedAddress) {
            setSelectedAddress(selectedAddress)
        }
        if (orderitem) {
            setOrderItems(orderitem)
        }
        if (totalAmount) {
            setTotalAmount(totalAmount)
        }
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1);
        }
    };

    const onPrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };



    return (
        <>
            <View style={styles.progressBarContainer}>
                <ProgressBar currentPage={currentPage} pageNames={['Address', 'Order Summary']} />
            </View>
            <View style={styles.container}>
                {currentPage === 1 && <AddressPage onNext={onNext} navigation={navigation} route={route} />}
                {currentPage === 2 && <OrderSummaryPage onNext={onNext} onPrev={onPrev} navigation={navigation} route={route} selectAddress={selectAddress} currentPage={currentPage} />}
                {/* {currentPage === 3 && <PaymentPage onPrev={onPrev} navigation={navigation} selectAddress={selectAddress} orderItems={orderItems} totalAmount={totalAmount} />} */}
            </View>
        </>
    );
};

export default OrderSteps;

