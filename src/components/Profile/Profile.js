import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert';
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../components/store/profile/profileSlice';
const ProfilePage = (props) => {

    const { navigation, route } = props;
    const [refreshing, setRefreshing] = React.useState(false);
    const [refreshCount, setRefreshCount] = useState(0);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
        setRefreshCount(prevCount => prevCount + 1);

    }, []);


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Profile',
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold'
            },
            headerLeft: () => (
                <FontAwesome name="user" style={styles.profileicon} />
            ),

        });
    }, [navigation]);

    return (
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
            <View style={styles.container}>
                <ProfileHeader navigation={navigation} count={refreshCount} />
                <MenuItems navigation={navigation} />
            </View>
        </ScrollView>
    )
};

const ProfileHeader = (props) => {


    const jwtToken = useSelector((state) => state.auth.token);
    const { loading, error, get, fetchData, post, remove } = useApi();
    const { navigation, route, count } = props;
    const user = useSelector((state) => state.profile.user);
    const [profile, setProfile] = useState([]);
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();

    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };

    console.log(count)
    useEffect(() => {

        const fetchData = async () => {

            try {
                const queryParameters = {
                    email: user.email, // Add your product code parameter value here
                    phonenumber: user.phoneNumber
                };


                // Convert query parameters to string
                const queryString = new URLSearchParams(queryParameters).toString();
                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getprofile?${queryString}`;

                const response = await get(url, jwtToken);


                if (response?.status == true) {
                    setProfile(response.result);
                    // //Simulating fetching user data from an API
                    const userData = {
                        name: response?.result[0].name,
                        phoneNumber: response?.result[0].phonenumber,
                        email: response?.result[0].email,
                        userType: response?.result[0].usertype,
                        location: response?.result[0].location,
                        loginTime: new Date().toISOString(),
                    };

                    dispatch(setUser(userData));

                }
                else {
                    setModelTitle('Get profile fail')
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
    }, [count])


    return (
        <ScrollView
            style={styles.container}

        >
            <View style={styles.header} >
                <TouchableOpacity style={styles.dp}>
                    <Image source={require('../../../assets/man.png')} style={styles.image} />
                    {/* <Ionicons name="edit" size={20} color="#000" /> */}
                </TouchableOpacity>
                {profile.map((item, index) => (
                    <View key={index}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.number}>{item.phonenumber}</Text>
                    </View>
                ))}

                <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit', { profile: profile })} style={styles.iconContainer}>
                    <FontAwesome name="edit" style={styles.icon} />
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
        </ScrollView>
    );
};

const MenuItems = ({ navigation }) => {
    return (
        <View style={styles.menuContainer}>
            <Text style={styles.menuHeads}>General</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MyOrders')} style={styles.menuItem}>
                <FontAwesome name="list-alt" style={styles.icons} />
                <Text style={styles.menuItemTxt}>My Order</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '63%' }]} />
            </TouchableOpacity>
            <Text style={styles.menuHeads}>Account Settings</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AddressPage')} style={styles.menuItem}>
                <FontAwesome name="map-marker" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Address</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '67%' }]} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('EnquiryForm')} style={styles.menuItem}>
                <FontAwesome name="credit-card" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Payment Methods</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '43%' }]} />
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SignIn')}>
                <FontAwesome name="sign-out" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Logout</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '67%' }]} />
            </TouchableOpacity>
            <Text style={styles.menuHeads}>App Settings</Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('NotificationsPage')} style={styles.menuItem}>
                <FontAwesome name="bell" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Notifications</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '54%' }]} />
            </TouchableOpacity> */}
            <Text style={styles.menuHeads}>Support</Text>
            <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="question-circle" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Help Center</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '57%' }]} />
            </TouchableOpacity>
        </View>
    );
};

export default ProfilePage;