import React, { useRef, useEffect, useState } from "react";
import { View, Text, ScrollView, ImageBackground, Animated, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert';
import { useSelector, useDispatch } from 'react-redux'


export default function CarouselComponent({ navigation, user }) {

    // const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef();
    const { loading, error, get, fetchgetOfferProducts, post, remove } = useApi();
    const [getOfferProducts, setOfferProducts] = useState([]);
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const jwtToken = useSelector((state) => state.auth.token);
    const userType = useSelector((state) => state.profile.user.userType);
    
    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };


    // useEffect(() => {
    //     const scrollInterval = Animated.timing(scrollX, {
    //         toValue: 1,
    //         duration: 40000, // Adjust the duration for scrolling speed
    //         useNativeDriver: true,
    //         isInteraction: false,
    //         repeat: true,
    //     });

    //     scrollInterval.start();

    //     return () => {
    //         scrollInterval.stop();
    //     };
    // }, []);

    // useEffect(() => {
    //     scrollX.addListener(({ value }) => {
    //         if (scrollViewRef.current) {
    //             const contentWidth = (getOfferProducts.length * 300) * 2; // Assuming each item has a width of 200 (adjust according to your item width)
    //             const scrollViewWidth = Dimensions.get('window').width; // Width of the scrollView
    //             const maxOffsetX = contentWidth - scrollViewWidth;
    //             let offsetX = value * maxOffsetX;

    //             if (offsetX > maxOffsetX) {
    //                 // Calculate the excess distance past the end
    //                 const excess = offsetX - maxOffsetX;

    //                 // Smoothly transition back to the start position
    //                 Animated.timing(scrollX, {
    //                     toValue: 0,
    //                     duration: 500, // Adjust the duration for smoothness
    //                     useNativeDriver: true,
    //                     isInteraction: false,
    //                 }).start(() => {
    //                     // Reset the scrollX value after transitioning back to the start
    //                     scrollX.setValue(0);
    //                 });

    //                 // Adjust offsetX to the start position
    //                 offsetX = excess % maxOffsetX;
    //             }

    //             scrollViewRef.current.scrollTo({ x: offsetX, animated: false });
    //         }
    //     });

    //     return () => {
    //         scrollX.removeAllListeners();
    //     };
    // }, []);

    useEffect(() => {
        const fetchgetOfferProducts = async () => {
            try {
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getAllofferProducts`;
                const response = await get(url, jwtToken);
                if (response?.status == true) {
                    setOfferProducts(response.result);
                } else {
                    setModelTitle('Get offer product fail');
                    setColorTitle('red');
                    setColorDescription('black');
                    setResponseMessage(response?.message);
                    showAlert();
                }
            } catch (error) {
                console.error('Error fetching initial getOfferProducts:', error);
                // Handle error if needed
            }
        };

        fetchgetOfferProducts();

    }, []);




    return (

        <View style={styles.container}>
            <View style={styles.spOffers}>
                <Text style={styles.specialOffers}>New Stock</Text>
                {user === '1' && (
                    <TouchableOpacity onPress={() => navigation.navigate('AddProducts')} style={styles.iconContainer}>
                        <FontAwesome name="edit" style={styles.icon} />
                    </TouchableOpacity>
                )}
            </View>
            <ScrollView ref={scrollViewRef} horizontal showsHorizontalScrollIndicator={true} style={{ width: '100%', maxHeight: 200 }}>
                <View style={styles.cardContainer}>
                    {getOfferProducts.map((item, index) => (
                        <ImageBackground
                            key={item.id}
                            source={require('../../../assets/desk.jpg')} // Change the path to your image
                            style={styles.card}
                            imageStyle={{ borderRadius: 10, opacity: 0.4, backgroundColor: "black" }}
                        >
                            <View key={item.id} style={{ width: '100%', paddingHorizontal: 10}} >
                                {/* <Text style={styles.specialOffers}>Special Offers</Text> */}
                                <Text style={styles.title}>Name:{item?.product_name}</Text>
                                <Text style={styles.title}>Rate:{item?.rate}</Text>
                                <Text style={styles.title}>Description:{item?.description}</Text>
                                <Text style={styles.title}>Quantity:{item.quantity}</Text>
                                <Text style={styles.title}>Size:{item.size}</Text>
                            </View>
                        </ImageBackground>
                    ))}
                </View>
            </ScrollView>
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
    )
}
