import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import { AdressPage } from "../Address/AdressPage";

// const OrderSummary = ({ route }) => {

//     const { productName, productPrice, quantity } = route.params;

//     // State variables
//     const [deliveryAddress, setDeliveryAddress] = useState('123 Main St, City, CountryCity, CountryCity, CountryCity, CountryCity, Country');
//     // const [quantity, setQuantity] = useState(1);
//     const [price] = useState(10); // Assuming price is $10 per product

//     // Function to handle changing delivery address
//     const handleChangeAddress = () => {
//         // Implement functionality to change the delivery address
//     };

//     const priceParts = productPrice.split(' ');
//     const priceValue = parseFloat(priceParts[0]);
//     // Function to calculate total amount
//     const getTotalAmount = () => {
//         return quantity * priceValue;
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.addressContainer}>
//                 <View style={styles.addressDiv}>
//                     <Text style={styles.label}>Delivery Address:</Text>
//                     <Text style={styles.address}>{deliveryAddress}</Text>
//                 </View>
//                 <View style={styles.changeAddressBtnContainer}>
//                     <TouchableOpacity title="Change Address" onPress={handleChangeAddress} style={styles.changeAddressBtn} >
//                         <Text style={styles.changeAddressTxt}>Change Address</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             <View style={styles.productDetailsContainer}>
//                 <View style={styles.card}>
//                     <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
//                     <View style={styles.textCard}>
//                         <Text style={styles.name}>{productName}</Text>
//                         <Text style={styles.price}>${productPrice}</Text>
//                         <Text>Quantity: {quantity}</Text>
//                     </View>
//                 </View>
//                 {/* <Text style={styles.label}>Product Details:</Text>
//                 <Text style={styles.description}>Description: Your product description here</Text>
//                 <Text style={styles.price}>Price: ${price}</Text> */}
//             </View>

//             {/* <View style={styles.quantityContainer}>
//                 <Text style={styles.label}>Quantity:</Text>
//                 <TextInput
//                     style={styles.quantityInput}
//                     keyboardType="numeric"
//                     value={quantity.toString()}
//                     onChangeText={(text) => setQuantity(parseInt(text))}
//                 />
//             </View> */}

//             <View style={styles.totalAmountContainer}>
//                 <Text style={styles.label}>Total Amount:</Text>
//                 <Text style={styles.totalAmount}>₹{getTotalAmount()}</Text>
//             </View>
//             <View>
//                 <View style={styles.continueBtnContainer}>
//                     <TouchableOpacity onPress={handleChangeAddress} style={styles.continueBtn} >
//                         <Text style={styles.continueTxt}>Continue</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// }

// export default OrderSummary;

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
                <View style={[styles.stepLine, currentPage >= 3 ? styles.activeLine : null]} />
            </View>
            <StepIndicator step={3} currentPage={currentPage} />
            <Text style={styles.pageName3}>{pageNames[2]}</Text>
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

const AddressPage = ({ onNext, route, productName, productPrice, quantity }) => {

    // const { productName, productPrice, quantity } = route.params;

    return (
        <View style={styles.pageContainer}>
            <AdressPage />
            <View style={styles.continueBtnContainer1}>
                <TouchableOpacity onPress={onNext} style={styles.continueBtn1} >
                    <Text style={styles.continueTxt1}>Continue</Text>
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity onPress={onNext}>
                <Text>Next</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const OrderSummaryPage = ({ onNext, onPrev }) => {

    // const { productName, productPrice, quantity } = route.params;

    const productName = "Copper metal scrap";
    const productPrice = "550 rs/ks";
    const quantity = 2

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
        <View style={styles.container2}>
            <View style={styles.addressContainer}>
                <View style={styles.addressDiv}>
                    <Text style={styles.label}>Delivery Address:</Text>
                    <Text style={styles.address}>{deliveryAddress}</Text>
                </View>
                <View style={styles.changeAddressBtnContainer}>
                    <TouchableOpacity title="Change Address" onPress={onPrev} style={styles.changeAddressBtn} >
                        <Text style={styles.changeAddressTxt}>Change Address</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.productDetailsContainer}>
                <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                <View style={styles.textCard}>
                    <Text style={styles.name}>{productName}</Text>
                    <Text style={styles.price}>${productPrice}</Text>
                    <Text>Quantity: {quantity}</Text>
                </View>
            </View>

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
                    <TouchableOpacity onPress={onNext} style={styles.continueBtn} >
                        <Text style={styles.continueTxt}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const PaymentPage = ({ onPrev }) => {
    return (
        <View style={styles.pageContainer}>
            <Text>Payment Page</Text>
            <TouchableOpacity onPress={onPrev}>
                <Text>Previous</Text>
            </TouchableOpacity>
        </View>
    );
};

const OrderSteps = (props) => {
    const { navigation, route } = props;
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

    const onNext = () => {
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
                <ProgressBar currentPage={currentPage} pageNames={['Address', 'Order Summary', 'Payment']} />
            </View>
            <View style={styles.container}>
                {currentPage === 1 && <AddressPage onNext={onNext} />}
                {currentPage === 2 && <OrderSummaryPage onNext={onNext} onPrev={onPrev} />}
                {currentPage === 3 && <PaymentPage onPrev={onPrev} />}
            </View>
        </>
    );
};

export default OrderSteps;