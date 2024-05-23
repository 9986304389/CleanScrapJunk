import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Pressable } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const ServiceLit = (props) => {

    const { navigation, route } = props;

    const userType = 'admin'
    

    return (
        <>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <FontAwesome name='inr' size={24} color='white' style={{ marginRight: '5%' }} />
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '600' }}>Service's</Text>
                </View>

                {/* <View style={styles.spOffers}>
                    {userType === 'admin' && (
                        <TouchableOpacity onPress={() => navigation.navigate('AddProducts')} style={styles.iconContainer}>
                            <FontAwesome name="edit" size={24} style={styles.icon2} />
                        </TouchableOpacity>
                    )}
                </View> */}
            </View>
            <ScrollView>
                {/* <View style={styles.titleView}>
                <AntDesign name="shoppingcart" size={25} color="black" style={styles.titleIcon} />
                <Text style={styles.title}>My Cart</Text>
            </View> */}
                <View style={styles.container}>

                    <Pressable onPress={() => navigation.navigate('ServiceDisPage', { serviceName: 'OFFICE SCRAP' })} style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>OFFICE SCRAP</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('ServiceDisPage', { serviceName: 'INDUSTRY SCRAP' })} style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>INDUSTRY SCRAP</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('ServiceDisPage', { serviceName: 'AC SCRAP' })} style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>AC SCRAP</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('ServiceDisPage', { serviceName: 'ALUMINIUM' })} style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>ALUMINIUM</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('ServiceDisPage', { serviceName: 'COMPUTER' })} style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>COMPUTER</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('ServiceDisPage', { serviceName: 'COPPER' })} style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>COPPER</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('ServiceDisPage', { serviceName: 'IRON & CASTING' })} style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>IRON & CASTING</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('ServiceDisPage', { serviceName: 'METAL AND ROLLING' })} style={styles.cartItem}>
                        <Image source={require('../../../assets/desk.jpg')} style={styles.image} />
                        <Text style={styles.name}>METAL AND ROLLING</Text>
                        <FontAwesome name='chevron-right' size={16} color='black' style={styles.rightArrow} />
                    </Pressable>


                </View>
            </ScrollView>
        </>
    );
}

export default ServiceLit;