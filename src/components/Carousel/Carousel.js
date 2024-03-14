import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./style";

const data = [
    { id: '1', title: '30% Discount', desc: 'Get discound for every order only valid for today', shop: 'Shop Now' },
    { id: '2', title: '30% Discount', desc: 'Get discound for every order only valid for today', shop: 'Shop Now' },
    { id: '3', title: '30% Discount', desc: 'Get discound for every order only valid for today', shop: 'Shop Now' },
    { id: '4', title: '30% Discount', desc: 'Get discound for every order only valid for today', shop: 'Shop Now' },
]

export default function CarouselComponent() {
    const renderItem = ({ item }) => {
        <View style={styles.card}>
            <Text style={styles.specialOffers}>Special Offers</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.desc}</Text>
            <Text style={styles.shopNow}>{item.shop}</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.specialOffers}>Special Offers</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                    {data.map((item, index) => (
                        <ImageBackground
                            key={item.id}
                            source={require('../../../assets/desk.jpg')} // Change the path to your image
                            style={styles.card}
                            imageStyle={{ borderRadius: 10, opacity: 0.3 }}
                        >
                            <View key={item.id} style={styles.cardContent}>
                                {/* <Text style={styles.specialOffers}>Special Offers</Text> */}
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.text}>{item.desc}</Text>
                                <Text style={styles.shopNow}>{item.shop}</Text>
                            </View>
                        </ImageBackground>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}