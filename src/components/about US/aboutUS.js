import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, RefreshControl, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigation } from "@react-navigation{'\n'}ative";
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'
import { State } from "react-native-gesture-handler";


const AboutUS = (props) => {
    const { navigation, route } = props;
    const { loading, error, get, fetchData, post, remove } = useApi();
    const jwtToken = useSelector((state) => state.auth.token);
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    // const [allMyCartProducts, setAllMyCartProducts] = useState([]);
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [refreshCount, setRefreshCount] = useState(0);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const initialLoad = useRef(true);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        setRefreshCount(prevCount => prevCount + 1);

    }, []);

    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'About Us',
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold',

            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')} style={{ marginLeft: 20 }}>
                    <FontAwesome name="arrow-left" size={20} color="black" style={{ fontWeight: '100' }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);


    const about = [
        {
            disc: "Clean scrap junk was established in Year 2022 with the sole aim of serving the market with high-quality steel. Today we are glad to have achieved a fair degree of success in just a few decades with a number of satisfying customers both new and old.\n\n1. We provide prompt delivery.\n2. Our stock has high quality at reasonable prices.\n3. We have long-standing experience.\n4. We assure a good quality of product with global standards.\n5. Our commitment to quality is uncompromising.\n6. No quantity is too big or too small to deliver.\n7. We practice customer intimacy.\n8. We do what we say.\n9. We are empowered professionals.\n10. We are accelerating improving and upgrading in steel trading and stock holding.\n11. We are committed to continuously improve and upgrade our infrastructure to world-class standards.\n12. Our basic aim is to keep our customers on the leading edge now and in the future.\n13. We provide material cut to sizes as required.\n14. We provide all material with 100% chemical composition and ultrasonic OK.\n\nApplied Areas\n\n1. AUTOMOBILE\n2. HOSPITALITY\n3. PETROCHEMICAL\n4. ENERGY INDUSTRY\n5. STEEL INDUSTRY\n6. CEMENT INDUSTRY\n7. COLD STORAGE\n8. AERONAUTICS\n9. FOOD PROCESSING\n10. WATER SUPPLY\n11. CONSTRUCTION\n12. LORRY BODY WORKS\n\nOUR SERVICES\nWe Buy, purchase, collect your Scrap at one call from your office, home, and factory. We assure to pay the best price in the market so that you receive the best price for your Scrap."
        }
    ];


    return (
        <>
            {loadingSpinner && ( // Conditionally render ActivityIndicator when loading is true
                <View style={styles.spinnerContainer}>
                    <ActivityIndicator size="100" color="#347855" />
                </View>
            )}
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                <View style={styles.container}>

                    {about.map((item, index) => (
                        <View style={styles.cartItem} key={index}>

                            <View style={styles.card}>

                                <View style={styles.textCard}>
                                    <Text style={styles.name}>{item.disc}</Text>
                                </View>
                            </View>
                        </View>
                    ))}


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
        </>
    );
}

export default AboutUS;
