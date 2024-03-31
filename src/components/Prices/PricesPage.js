import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const PricesPage = (props) => {
    const { navigation, route } = props;

    return (
        <>
            <ScrollView>

                <View style={styles.header2}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '600' }}>Iron Scrap</Text>
                    </View>
                </View>
                <View style={styles.container}>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.cartItem}>
                        <View style={styles.col75}>
                            <Text style={styles.Prdtname}>Bhiwadi Turning Scrap</Text>
                        </View>
                        <View style={styles.col25}>
                            <Text style={styles.priceTxt}>₹ 31,500</Text>
                            <View style={styles.shareStatus}>
                                <Text style={styles.shareStatusTxt}>+100</Text>
                                <Ionicons name="trending-up" size={18} color='green' />
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default PricesPage;