import React, { useRef, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground, Animated, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./style";

const data = [
    { id: '1', title: '30% Discount', desc: 'Get discound for every order only valid for today', shop: 'Shop Now' },
    { id: '2', title: '30% Discount', desc: 'Get discound for every order only valid for today', shop: 'Shop Now' },
    { id: '3', title: '30% Discount', desc: 'Get discound for every order only valid for today', shop: 'Shop Now' },
    { id: '4', title: '30% Discount', desc: 'Get discound for every order only valid for today', shop: 'Shop Now' },
]

export default function CarouselComponent() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef();

    useEffect(() => {
        const scrollInterval = Animated.timing(scrollX, {
            toValue: 1,
            duration: 40000, // Adjust the duration for scrolling speed
            useNativeDriver: true,
            isInteraction: false,
            repeat: true,
        });

        scrollInterval.start();

        return () => {
            scrollInterval.stop();
        };
    }, []);

    useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (scrollViewRef.current) {
                const contentWidth = (data.length * 300) * 2; // Assuming each item has a width of 200 (adjust according to your item width)
                const scrollViewWidth = Dimensions.get('window').width; // Width of the scrollView
                const maxOffsetX = contentWidth - scrollViewWidth;
                let offsetX = value * maxOffsetX;

                if (offsetX > maxOffsetX) {
                    // Calculate the excess distance past the end
                    const excess = offsetX - maxOffsetX;

                    // Smoothly transition back to the start position
                    Animated.timing(scrollX, {
                        toValue: 0,
                        duration: 500, // Adjust the duration for smoothness
                        useNativeDriver: true,
                        isInteraction: false,
                    }).start(() => {
                        // Reset the scrollX value after transitioning back to the start
                        scrollX.setValue(0);
                    });

                    // Adjust offsetX to the start position
                    offsetX = excess % maxOffsetX;
                }

                scrollViewRef.current.scrollTo({ x: offsetX, animated: false });
            }
        });

        return () => {
            scrollX.removeAllListeners();
        };
    }, []);

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
            <ScrollView ref={scrollViewRef} horizontal showsHorizontalScrollIndicator={true} style={{ width: '100%', maxHeight: 200 }}>
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