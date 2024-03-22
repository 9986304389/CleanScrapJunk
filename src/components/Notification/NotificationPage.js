import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Platform } from "react-native";

export const NotificationPage = () => {
    return (
        <ScrollView>
            <View style={styles.todaycontainer}>
                <View style={styles.dayContainer}>
                    <Text style={styles.day}>Today</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={styles.datacontainer}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.dataheader}>Payment Succesfull</Text>
                            <TouchableOpacity
                                style={styles.deleteicon}
                            >
                                <FontAwesome name="trash" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.data}>
                            Your payment for that product was successfull. Keep track and enjoy shopping.
                        </Text>
                    </View>
                </View>


                <View style={styles.dayContainer}>
                    <Text style={styles.day}>Today</Text>
                </View>
                <View style={styles.datacontainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.dataheader}>Payment Succesfull</Text>
                        <TouchableOpacity
                            style={styles.deleteicon}
                        >
                            <FontAwesome name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.data}>
                        Your payment for that product was successfull. Keep track and enjoy shopping.
                    </Text>
                </View>

                <View style={styles.datacontainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.dataheader}>Payment Succesfull</Text>
                        <TouchableOpacity
                            style={styles.deleteicon}
                        >
                            <FontAwesome name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.data}>
                        Your payment for that product was successfull. Keep track and enjoy shopping.
                    </Text>
                </View>


            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    todaycontainer: {
        flex: 1,
        alignItems: 'center',
    },
    dayContainer: {
        width: '100%',
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        alignItems: 'center',
        marginVertical: '3%',
        paddingVertical: '1%',
        backgroundColor: '#ccc',
        ...Platform.select({
            android: {
                elevation: 3,
                backgroundColor: 'white', // Add elevation for shadow on Android
            },
            ios: {
                shadowColor: '#ccc', // Shadow properties for iOS
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.05,
                shadowRadius: 3.84,
            },
        }),
    },
    day: {
        fontSize: 16,
        fontWeight: "700",
    },
    datacontainer: {
        marginTop: '3%',
        width: '75%',
        paddingBottom: '3%',
    },
    dataheader: {
        fontSize: 15,
        fontWeight: "700"
    },
    data: {
        fontSize: 16,
    },
    deleteicon: {
        marginLeft: '50%'
    }
})
