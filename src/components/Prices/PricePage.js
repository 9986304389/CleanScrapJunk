import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Pressable } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const PriceList = (props) => {

    const { navigation, route } = props;

    return (
        <>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name='inr' size={24} color='white' style={{ marginRight: '5%' }} />
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '600' }}>PRICES</Text>
                </View>
            </View>
            <ScrollView>
                {/* <View style={styles.titleView}>
                <AntDesign name="shoppingcart" size={25} color="black" style={styles.titleIcon} />
                <Text style={styles.title}>My Cart</Text>
            </View> */}
                <View style={styles.container}>

                    <Pressable onPress={() => navigation.navigate('PricesPage')} style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                    <Pressable style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                    <Pressable style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                    <Pressable style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                    <Pressable style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                    <Pressable style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                    <Pressable style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                    <Pressable style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                    <Pressable style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                    <Pressable style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>Iron Scrap</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>

                </View>
            </ScrollView>
        </>
    );
}

export default PriceList;