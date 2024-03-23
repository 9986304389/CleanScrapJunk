import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AntDesign } from "@expo/vector-icons";

const TopTab = createMaterialTopTabNavigator();


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

    const OnProgress = () => {
        return (
            <ScrollView>
                <View style={styles.container}>

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
                    </View>

                </View>
            </ScrollView>
        )
    }


    const Success = () => {
        return (
            <ScrollView>
                <View style={styles.container}>

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

                </View>
            </ScrollView>
        )
    }

    const Cancelled = () => {
        return (
            <ScrollView>
                <View style={styles.container}>

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
                    </View>

                </View>
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
            <TopTab.Screen name='OnProgress' component={OnProgress} />
            <TopTab.Screen name='Success' component={Success} />
            <TopTab.Screen name='Cancelled' component={Cancelled} />
        </TopTab.Navigator>
    );

}


export default MyOrders;