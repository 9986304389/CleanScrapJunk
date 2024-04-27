import React, { useEffect, useState } from 'react';
import {
    Dimensions, Text, View, Image,
    TouchableOpacity, FlatList, ImageBackground, ScrollView,
    TouchableWithoutFeedback, TextInput, Alert, Modal, Button
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'
import useApi from '../../apiCalls/ApiCalls';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopTab = createMaterialTopTabNavigator();


const initialLayout = { width: Dimensions.get('window').width };



const FirstRoute = (props) => {
    const { loading, error, get, fetchData, post, remove } = useApi();
    const { allProducts, navigation } = props;
    const user = useSelector((state) => state.profile.user.userType);
    const jwtToken = useSelector((state) => state.auth.token);

    return (
        <ScrollView>
            <View style={styles.container}>
                {allProducts.map((item, index) => (
                    <TouchableOpacity style={styles.cardContainer} key={item?.product_id} onPress={() => navigation.navigate("ProductDescription", { item: item })}>
                        <View key={item?.id}>

                            <View style={styles.card}>
                                <Image source={{ uri: item?.image_url }} style={styles.image} />
                                {user === '1' && (
                                    <TouchableOpacity style={styles.heartIcon} onPress={() => navigation.navigate("ProductDescription", { item: item })}>
                                        <Text>  <FontAwesome name="edit" style={styles.icon} /></Text>
                                    </TouchableOpacity>
                                )}
                            </View>

                            <Text style={styles.title}>{item?.name}</Text>
                            <Text style={styles.price}>₹{item?.price}</Text>


                        </View>
                    </TouchableOpacity>
                ))}
            </View>

        </ScrollView >
    )
}



// Component for the "Old" tab content
const OldTabContent = (props) => {

    const { navigation, allOldProducts } = props;
    const user = useSelector((state) => state.profile.user.userType);

    return (
        <ScrollView>
            <View style={styles.container}>
                {allOldProducts.map((item, index) => (
                    <TouchableOpacity style={styles.cardContainer} key={item?.product_id} onPress={() => navigation.navigate("ProductDescription", { item: item })}>
                        <View key={item?.product_id}>
                            <View style={styles.card}>
                                <Image source={{ uri: item?.image_url }} style={styles.image} />
                                <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Heart icon pressed')}>
                                    {user === '1' && (
                                        <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Heart icon pressed')}>
                                            <Text>  <FontAwesome name="edit" style={styles.icon} /></Text>
                                        </TouchableOpacity>
                                    )}
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.title}>{item?.name}</Text>
                            <Text style={styles.price}>{item?.price} Kg</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};


// Component for the "New" tab content
const NewTabContent = (props) => {

    const { navigation, allNewProducts } = props;
    const user = useSelector((state) => state.profile.user.userType);

    return (
        <ScrollView>
            <View style={styles.container}>
                {allNewProducts.map((item, index) => (
                    <TouchableOpacity style={styles.cardContainer} key={item?.product_id} onPress={() => navigation.navigate("ProductDescription", { item: item })}>
                        <View key={item?.product_id}>
                            <View style={styles.card}>
                                <Image source={{ uri: item?.image_url }} style={styles.image} />
                                <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Heart icon pressed')}>
                                    {user === '1' && (
                                        <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Heart icon pressed')}>
                                            <Text>  <FontAwesome name="edit" style={styles.icon} /></Text>
                                        </TouchableOpacity>
                                    )}
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.title}>{item?.name}</Text>
                            <Text style={styles.price}>{item?.price} Kg</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const SecondRoute = ({ allNewProducts, allOldProducts, user }) => {

    return (
        <TopTab.Navigator>
            <TopTab.Screen name='Old'>
                {(props) => <OldTabContent {...props} allOldProducts={allOldProducts} />}
            </TopTab.Screen>
            <TopTab.Screen name='New'>
                {(props) => <NewTabContent {...props} allNewProducts={allNewProducts} />}
            </TopTab.Screen>
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


const TabNavigator = ({ allProducts, allNewProducts, allOldProducts }) => {

    return (
        <TopTab.Navigator>
            <TopTab.Screen name='We Buy'>
                {(props) => <FirstRoute {...props} allProducts={allProducts} />}
            </TopTab.Screen>
            <TopTab.Screen name='We Sell'>
                {(props) => <SecondRoute {...props} allNewProducts={allNewProducts} allOldProducts={allOldProducts} />}
            </TopTab.Screen>
        </TopTab.Navigator>
    );
};

const ProductTab = (props) => {

    const { loading, error, get } = useApi();
    const [allProducts, setAllProducts] = useState([]);
    const [allNewProducts, setAllNewProducts] = useState([]);
    const [allOldProducts, setAllOldProducts] = useState([]);
    const jwtToken = useSelector((state) => state.auth.token);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getAllWeBuyProducts`;
                const response = await get(url, jwtToken);

                if (response?.status === true) {
                    setAllProducts(response.result);
                    await getProductsByType('new', jwtToken);
                    await getProductsByType('old', jwtToken);
                } else {
                    // Handle error response
                }
            } catch (error) {
                console.error('Error fetching initial data:', error);
                // Handle error if needed
            }
        };

        fetchData();
    }, []);

    const getProductsByType = async (type, jwtToken) => {
        try {
            const queryParameters = { type };
            const queryString = new URLSearchParams(queryParameters).toString();
            const url = `https://clean-scrap-jnck-backend.vercel.app/api/getAllProducts?${queryString}`;
            const response = await get(url, jwtToken);

            if (response?.status === true) {
                if (type === 'new') {
                    setAllNewProducts(response.result);
                } else if (type === 'old') {
                    setAllOldProducts(response.result);
                }
            } else {
                // Handle error response
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error if needed
        }
    };

    return (
        <TabNavigator
            allProducts={allProducts}
            allNewProducts={allNewProducts}
            allOldProducts={allOldProducts}
            {...props}
        />
    );
};

export default ProductTab;