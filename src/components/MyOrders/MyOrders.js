import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
const TopTab = createMaterialTopTabNavigator();
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'

const MyOrders = (props) => {

    const { navigation, route } = props;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'My Orders',
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold'
            },
            headerLeft: () => (
                <FontAwesome name="shopping-bag" style={styles.profileicon} />
            ),

        });
    }, [navigation]);

    const OnProgress = (props) => {

        const { navigation, route } = props;
        const { loading, error, get, fetchData, post, remove } = useApi();
        const jwtToken = useSelector((state) => state.auth.token);
        const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
        const [allOnProgress, setAllOnProgress] = useState([]);
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


        useEffect(() => {

            const fetchData = async () => {

                try {
                    const queryParameters = {
                        status: 'OnProgress',
                        customer_id: phoneNumber// Add your product code parameter value here

                    };


                    // Convert query parameters to string
                    const queryString = new URLSearchParams(queryParameters).toString();
                    // Construct the complete URL with query parameters
                    const url = `https://clean-scrap-jnck-backend.vercel.app/api/getOrdersByStatus?${queryString}`;

                    const response = await post(url, null, jwtToken);


                    if (response?.status == true) {
                        setAllOnProgress(response.result)
                    }
                    else {
                        setModelTitle('Get onprogress prodct fail')
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
        }, [allOnProgress])



        return (
            <ScrollView>
                <View style={styles.container}>

                    {/* <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View> */}
                    {allOnProgress.map((item, index) => (
                        <View style={styles.cartItem}>
                            <View style={styles.card}>
                                <Image source={{ uri: item?.img_url }} style={styles.image} />
                                <View style={styles.textCard}>
                                    <Text style={styles.name}>{item?.name}</Text>
                                    <Text style={styles.price}>{item.total_amount}</Text>
                                    <Text style={styles.status}>{item.status}</Text>
                                    <Text style={styles.amt}>₹ {item.total_amount}</Text>
                                </View>
                            </View>

                            <View style={styles.iconContainer}>
                                <TouchableOpacity style={styles.orderButton}>
                                    <Text style={styles.orderButtonText}>Track Order</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cancelBtn}>
                                    <Text style={styles.cancelButtonText}>Cancel Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                    {/* <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.status}>On Progress</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>

                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={styles.orderButton}>
                                <Text style={styles.orderButtonText}>Track Order</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelBtn}>
                                <Text style={styles.cancelButtonText}>Cancel Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.status}>On Progress</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>

                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={styles.orderButton}>
                                <Text style={styles.orderButtonText}>Track Order</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelBtn}>
                                <Text style={styles.cancelButtonText}>Cancel Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.status}>On Progress</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>

                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={styles.orderButton}>
                                <Text style={styles.orderButtonText}>Track Order</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelBtn}>
                                <Text style={styles.cancelButtonText}>Cancel Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View> */}

                </View>
            </ScrollView>
        )
    }


    const Success = (props) => {
        const { navigation, route } = props;
        const { loading, error, get, fetchData, post, remove } = useApi();
        const jwtToken = useSelector((state) => state.auth.token);
        const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
        const [allSucess, setAllSucess] = useState([]);
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


        useEffect(() => {

            const fetchData = async () => {

                try {
                    const queryParameters = {
                        customer_id: phoneNumber, // Add your product code parameter value here
                        status: "Completed"
                    };

                    // Convert query parameters to string
                    const queryString = new URLSearchParams(queryParameters).toString();
                    // Construct the complete URL with query parameters
                    const url = `https://clean-scrap-jnck-backend.vercel.app/api/getOrdersByStatus?${queryString}`;

                    const response = await post(url, null, jwtToken);


                    if (response?.status == true) {
                        setAllSucess(response.result)
                    }
                    else {
                        setModelTitle('Get all sucess prodct fail')
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
        }, [allSucess])


        return (
            <ScrollView>
                {allSucess.map((item, index) => (
                    <View key={item.id} style={styles.container}>

                        <View style={styles.orderDate}>
                            <FontAwesome name="calendar" size={20} color='black' />
                            <Text style={styles.orderDateTxt}>{item?.order_date}</Text>
                        </View>

                        <View style={styles.cartItem}>
                            <View style={styles.card}>
                                <Image source={{ uri: item?.img_url }} style={styles.image} />
                                <View style={styles.textCard}>
                                    <Text style={styles.name}>{item?.name}</Text>
                                    <Text style={styles.price}>{item?.total_amount}</Text>
                                    <Text style={styles.statusCompleted}>{item?.status}</Text>
                                    <Text style={styles.amt}>₹ {item?.total_amount}</Text>
                                </View>
                            </View>

                            <View style={styles.iconContainer}>
                                <TouchableOpacity style={styles.orderButton}>
                                    <Text style={styles.orderButtonText}>Track Order</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                        {/* <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.statusCompleted}>Completed</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.statusCompleted}>Completed</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.statusCompleted}>Completed</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.statusCompleted}>Completed</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>
                    </View> */}
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


            </ScrollView>
        )
    }

    const Cancelled = (props) => {
        const { navigation, route } = props;
        const { loading, error, get, fetchData, post, remove } = useApi();
        const jwtToken = useSelector((state) => state.auth.token);
        const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
        const [allCancelled, setAllCancelled] = useState([]);
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


        useEffect(() => {

            const fetchData = async () => {

                try {
                    const queryParameters = {
                        customer_id: phoneNumber, // Add your product code parameter value here
                        status: "Cancelled"
                    };

                    // Convert query parameters to string
                    const queryString = new URLSearchParams(queryParameters).toString();
                    // Construct the complete URL with query parameters
                    const url = `https://clean-scrap-jnck-backend.vercel.app/api/getOrdersByStatus?${queryString}`;

                    const response = await post(url, null, jwtToken);


                    if (response?.status == true) {
                        setAllCancelled(response.result)
                    }
                    else {
                        setModelTitle('Get all setAllCancelled prodct fail')
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
        }, [allCancelled])
        return (
            <ScrollView>
                {allCancelled.map((item, index) => (

                    <View style={styles.container}>

                        <View style={styles.orderDate}>
                            <FontAwesome name="calendar" size={20} color='black' />
                            <Text style={styles.orderDateTxt}>{item?.order_date}</Text>
                        </View>
                        <View style={styles.cartItem}>
                            <View style={styles.card}>
                                <Image source={{ uri: item?.img_url }} style={styles.image} />
                                <View style={styles.textCard}>
                                    <Text style={styles.name}>{item?.name}</Text>
                                    <Text style={styles.price}>{item?.total_amount}</Text>
                                    <Text style={styles.status}>{item?.status}</Text>
                                    <Text style={styles.amt}>₹ {item?.total_amount}</Text>
                                </View>
                            </View>
                        </View>

                        {/* <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.statusCancelled}>Cancelled</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.statusCancelled}>Cancelled</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.orderDate}>
                        <FontAwesome name="calendar" size={20} color='black' />
                        <Text style={styles.orderDateTxt}>May 26, 2024</Text>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text style={styles.statusCancelled}>Cancelled</Text>
                                <Text style={styles.amt}>₹ 550.00</Text>
                            </View>
                        </View>
                    </View> */}
                    </View>
                ))}


            </ScrollView>
        )
    }

    return (

        <TopTab.Navigator
            screenOptions={{
                // activeTintColor: '#347855', // Color of the text when active
                // indicatorStyle: { backgroundColor: '#347855', borderRadius: 10 },
                "tabBarActiveTintColor": "#347855",
                "tabBarIndicatorStyle": {
                    "backgroundColor": "#347855",
                    "borderRadius": 10
                }
            }}>
            {/* <TopTab.Screen name='OnProgress' component={OnProgress} /> */}
            <TopTab.Screen name='Success' component={Success} />
            {/* <TopTab.Screen name='Cancelled' component={Cancelled} /> */}
        </TopTab.Navigator>
    );

}


export default MyOrders;