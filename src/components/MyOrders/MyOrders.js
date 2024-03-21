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

    const FirstRoute = () => {
        return (
            <ScrollView>
                {/* <View style={styles.titleView}>
                    <AntDesign name="shoppingcart" size={25} color="black" style={styles.titleIcon} />
                    <Text style={styles.title}>My Cart</Text>
                </View> */}
                <View style={styles.container}>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>productPrice</Text>
                                <Text>Quantity: quantity</Text>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity style={styles.orderButton}>
                                        <Text style={styles.orderButtonText}>Buy Now</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign name="delete" size={24} color="black" style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>$productPrice</Text>
                                <Text>Quantity: 2</Text>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity style={styles.orderButton}>
                                        <Text style={styles.orderButtonText}>Buy Now</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign name="delete" size={24} color="black" style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cartItem}>
                        <View style={styles.card}>
                            <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                            <View style={styles.textCard}>
                                <Text style={styles.name}>productName</Text>
                                <Text style={styles.price}>$productPrice</Text>
                                <Text>Quantity: 2</Text>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity style={styles.orderButton}>
                                        <Text style={styles.orderButtonText}>Buy Now</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign name="delete" size={24} color="black" style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }


    const SecondRoute = () => {
        return (
            <Text>Second</Text>
        )
    }

    return (

        <TopTab.Navigator
            tabBarOptions={{
                activeTintColor: '#347855', // Color of the text when active
                indicatorStyle: { backgroundColor: '#347855', borderRadius: 10 },
            }}>
            <TopTab.Screen name='On Progress' component={FirstRoute} />
            <TopTab.Screen name='Success' component={SecondRoute} />
            <TopTab.Screen name='Cancelled' component={SecondRoute} />
        </TopTab.Navigator>
    );

}


export default MyOrders;