import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, RefreshControl, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigation } from "@react-navigation{'\n'}ative";
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'
import { State } from "react-native-gesture-handler";


const About = (props) => {
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
            headerTitle: 'About',
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

            disc: "Clean scrap junk is one of the leading companies in scrap metal recycling and trading. we have been actively involved in collection, trading, and recycling of metal scrap.we are committed to environmental sustainability and reducing metal scrap waste through our recycling efforts.\n\n " +
                "Scrap consists of recyclable materials left over from product manufacturing and consumption, such as parts of vehicles, building supplies, and surplus materials. Unlike waste, scrap has monetary value, especially recovered metals,and non-metallic materials are also recovered for recycling. Scrap metal originates both in business and residential environments.\n\n" +
                "Customers are typically required to supply all of their own tools and labor to extract parts, and some scrapyards may first require waiving liability for personal injury before entering. Many scrapyards also sell bulk metals (stainless steel, etc.) by weight, often at prices substantially below the retail purchasing costs of similar pieces.\n\n" +
                "scrap collection is not restricted to a specific quality of scrap. We are more than pleased to collect scrap in bulk and there is no minimum amount. We buy, trade, and sell all things with scrap metal in Chennai which includes non-ferrous, ferrous metal, electronic scrap, and industrial scrap.\n\n" +
                "Our team of well-trained professionals is our most valuable asset. Customer satisfaction tops the priority list and we are happy to be your go-to metal scrap team. We leverage industry best practices that are eco-friendly as well as cost effective.You can depend on our constantly improving reliable services and product line that makes life easier for you. Let us help improve the life and efficiency of your scrap with our customized metal scrap services.\n\n" +
                "These items are labor-intensive to manually sort things like plastic, copper, aluminum and brass. By shredding into relatively small pieces, the steel can easily be separated out magnetically. The non-ferrous waste stream requires other techniques to sort.\n\n" +
                "We then sort and categorize metal scrap into different grades after collecting the metal scrap.  Following this, the scrap makes its way to scrap metal processors, where it is processed and then sent for further processing. We pride ourselves on our recycling metal scrap services as an unlimited number of items can be manufactured from scrap, reducing the environmental burden."
        },

    ]

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

export default About;
