import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, Image, TouchableOpacity, FlatList, ImageBackground, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'
import useApi from '../../apiCalls/ApiCalls';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopTab = createMaterialTopTabNavigator();


const initialLayout = { width: Dimensions.get('window').width };

const data = [
    { id: '1', title: 'Copper Scrap', price: '550 rs/kg', liked: false, desc: 'We work with many forms of copper scrap. We may buy a lot of different kinds of copper scrap. We pick up your copper scraps from your workplace, house, or factory with only one phone call.' },
    { id: '2', title: 'Melting Scrap', price: '22 rs/kg', liked: false, desc: 'We work with many forms of melting scrap. We may buy a lot of different kinds of melting scrap. We pick up your melting scraps from your workplace, house, or factory with only one phone call.' },
    { id: '3', title: 'Steel Scrap', price: '45 rs/kg', liked: false, desc: 'We work with many forms of steel scrap. We may buy a lot of different kinds of steel scrap. We pick up your steel scraps from your workplace, house, or factory with only one phone call.' },
    { id: '4', title: 'Shed Demolish', price: 'LOT BASIS - MARKET BASIS', liked: false, desc: 'We work with many forms of shed scrap. We may buy a lot of different kinds of shed scrap. We pick up your shed scraps from your workplace, house, or factory with only one phone call.' },
    { id: '5', title: 'Aluminium Scrap', price: '70 rs/kg', liked: false, desc: 'We work with many forms of aluminium scrap. We may buy a lot of different kinds of aluminium scrap. We pick up your aluminium scraps from your workplace, house, or factory with only one phone call.' },
    { id: '6', title: 'Casting Scrap', price: '27 rs/kg', liked: false, desc: 'We work with many forms of casting scrap. We may buy a lot of different kinds of casting scrap. We pick up your casting scraps from your workplace, house, or factory with only one phone call.' },
    { id: '7', title: 'Rolling Scrap', price: '32 rs/kg', liked: false, desc: 'We work with many forms of rolling scrap. We may buy a lot of different kinds of rolling scrap. We pick up your rolling scraps from your workplace, house, or factory with only one phone call.' },
    // Add more items as needed
];

const FirstRoute = (props) => {
    const { loading, error, get, fetchData, post } = useApi();
    const [allProducts, setAllProducts] = useState([]);
    const jwtToken = useSelector((state) => state.auth.token);
    //console.log(jwtToken)
    const { navigation } = props;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const queryParameters = {
                    product_code: '', // Add your product code parameter value here
                    Active_Status: '' // Add your Active_Status parameter value here
                };

                // Convert query parameters to string
                const queryString = new URLSearchParams(queryParameters).toString();
                // Construct the complete URL with query parameters
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getAllProducts?${queryString}`;
                console.log('URL:', url);
                const response = await get(url, jwtToken);
                //console.log('Response:', response); // Log the response

                if (response?.status == true) {
                    setAllProducts(response.result); // Update state with received data
                }
                else {
                    // Call the alert 
                }

            } catch (error) {
                console.error('Error fetching initial data:', error);
                // Handle error if needed
            }
        };

        fetchData(); // Call fetchData function when component mounts
    }, []); // Empty dependency array to run the effect only once

    console.log(allProducts); // Log the allProducts state


    return (
        <ScrollView>
            <View style={styles.container}>
                {/* {data.map((item, index) => (
                    <TouchableOpacity style={styles.cardContainer} key={item.id} onPress={() => navigation.navigate("ProductDescription", { itemId: item.id, productName: item.title, productPrice: item.price, likedStatus: item.liked, productDescription: item.desc })}>
                        <View key={item.id}>
                            <View style={styles.card}>
                                <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                                <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Heart icon pressed')}>
                                    <Text>{item.liked ? (
                                        <Ionicons name="heart" size={24} color="red" /> // Use heart icon if liked
                                    ) : (
                                        <Ionicons name="heart-outline" size={24} color="black" /> // Use heart outline icon if not liked
                                    )}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                ))} */}
                {allProducts.map((item, index) => (
                    <TouchableOpacity style={styles.cardContainer} key={item.product_id} onPress={() => navigation.navigate("ProductDescription", { itemId: item.product_id, productName: item.name, productPrice: item.price, productDescription: item.description })}>
                        <View key={item.id}>
                            
                                <View style={styles.card}>
                                    <Image source={{ uri: item?.image_url }} style={styles.image} />
                                    <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Heart icon pressed')}>
                                        <Text>{false ? (
                                            <Ionicons name="heart" size={30} color="red" /> // Use heart icon if liked
                                        ) : (
                                            <Ionicons name="heart-outline" size={30} color="black" /> // Use heart outline icon if not liked
                                        )}</Text>
                                    </TouchableOpacity>
                                </View>
                         
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.price}>₹{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView >
    )
}


const oldSellingdata = [
    { id: '1', title: 'Old Secondary rails', price: '57/kg', liked: false },
    { id: '2', title: 'G.I Pipe', price: '55/kg', liked: false },
    { id: '3', title: 'Secondary Angle', price: '44/kg', liked: false },
    { id: '4', title: 'Secondary Channel', price: '44/kg', liked: false },
    { id: '5', title: 'Secondary G.I angle', price: '60/kg', liked: false },
    { id: '6', title: 'Secondary Billet', price: '46/kg', liked: false },
    { id: '7', title: 'Secondary Plate', price: '50/kg', liked: false },
    { id: '8', title: 'Secondary Pipe', price: '45/kg', liked: false },
    { id: '9', title: 'Secondary Beam', price: '45/kg', liked: false },
    // Add more items as needed
];



// Component for the "Old" tab content
const OldTabContent = (props) => {

    const { navigation } = props;

    return (
        <ScrollView>
            <View style={styles.container}>
                {oldSellingdata.map((item, index) => (
                    <TouchableOpacity style={styles.cardContainer} key={item.id} onPress={() => navigation.navigate("ProductDescription", { itemId: item.id, productName: item.title, productPrice: item.price, likedStatus: item.liked })}>
                        <View key={item.id}>
                            <View style={styles.card}>
                                <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                                <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Heart icon pressed')}>
                                    <Text>{item.liked ? (
                                        <Ionicons name="heart" size={24} color="red" /> // Use heart icon if liked
                                    ) : (
                                        <Ionicons name="heart-outline" size={24} color="black" /> // Use heart outline icon if not liked
                                    )}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const newSellingdata = [
    { id: '1', title: 'Square Box', price: '52/kg', liked: false },
    { id: '2', title: 'Round Pipe', price: '52/kg', liked: false },
    { id: '3', title: 'Channel', price: '49/kg', liked: false },
    { id: '4', title: 'Angle', price: '49/kg', liked: false },
    { id: '5', title: 'Beam', price: '50/kg', liked: false },
    { id: '6', title: 'Plate', price: '57/kg', liked: false },
    { id: '7', title: 'Sheet', price: '58/kg', liked: false },
    { id: '8', title: 'Rod', price: '50/kg', liked: false },
    { id: '9', title: 'Flat', price: '50/kg', liked: false },
    { id: '10', title: 'Chequed Sheet', price: '61/kg', liked: false },
    { id: '11', title: 'Job Cutting Plate', price: '65/kg', liked: false },
    // Add more items as needed
];


// Component for the "New" tab content
const NewTabContent = (props) => {

    const { navigation } = props;

    return (
        <ScrollView>
            <View style={styles.container}>
                {newSellingdata.map((item, index) => (
                    <TouchableOpacity style={styles.cardContainer} key={item.id} onPress={() => navigation.navigate("ProductDescription", { itemId: item.id, productName: item.title, productPrice: item.price, likedStatus: item.liked })}>
                        <View key={item.id}>
                            <View style={styles.card}>
                                <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                                <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Heart icon pressed')}>
                                    <Text>{item.liked ? (
                                        <Ionicons name="heart" size={24} color="red" /> // Use heart icon if liked
                                    ) : (
                                        <Ionicons name="heart-outline" size={24} color="black" /> // Use heart outline icon if not liked
                                    )}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const SecondRoute = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name='Old' component={OldTabContent} />
            <TopTab.Screen name='New' component={NewTabContent} />
        </TopTab.Navigator>
    )
}

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        labelStyle={styles.label}
    />
);

// const ProductTab = () => {
//     const [index, setIndex] = useState(0);
//     const [routes] = useState([
//         { key: 'first', title: 'First' },
//         { key: 'second', title: 'Second' },
//     ]);

//     const renderScene = ({ route }) => {
//         switch (route.key) {
//             case 'first':
//                 return <FirstRoute />;
//             case 'second':
//                 return <SecondRoute />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <TabView
//             navigationState={{ index, routes }}
//             renderScene={renderScene}
//             onIndexChange={setIndex}
//             initialLayout={initialLayout}
//             renderTabBar={renderTabBar}
//             swipeEnabled={true}
//         />
//     );
// }

const TabNavigator = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name='We Buy' component={FirstRoute} />
            <TopTab.Screen name='We Sell' component={SecondRoute} />
        </TopTab.Navigator>
    );
};

const ProductTab = () => {
    return (
        // <NavigationContainer>
        <TabNavigator />
        // </NavigationContainer>
    );
};

export default ProductTab;