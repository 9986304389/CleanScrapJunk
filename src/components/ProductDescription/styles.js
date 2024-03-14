import { StyleSheet } from "react-native";
// import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 125,
        // resizeMode: 'contain',
    },
    contentContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    quantityContainer: {
        position: 'absolute',
        top: 215,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        // paddingVertical: 3,
        borderRadius: 25,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
            },
            android: {
                elevation: 10, // Elevation for shadow on Android
            },
        }),
    },
    quantity: {
        fontSize: 22,
        marginHorizontal: 18,
    },
    buttonSize: {
        fontSize: 24,
        paddingHorizontal: 10,
    },
    productDesc: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
    },
    productDesc2: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 25,
        textAlign: 'center'
    },
    buttonRow: {
        flexDirection: "row",
        width: '100%',
        marginTop: '25%'
    },
    cartBtn: {
        borderColor: '#347855',
        borderWidth: 2,
        marginHorizontal: 10,
        textAlign: 'center',
        alignItems: 'center', // Align content horizontally
        justifyContent: 'center', // Align content vertically
        width: '45%',
        paddingVertical: 15,
        borderRadius: 10
    },
    buyBtn: {
        borderColor: '#347855',
        backgroundColor: '#347855',
        borderWidth: 2,
        marginHorizontal: 10,
        textAlign: 'center',
        alignItems: 'center', // Align content horizontally
        justifyContent: 'center', // Align content vertically
        width: '45%',
        paddingVertical: 15,
        borderRadius: 10
    },
    cardBtnText: {
        fontSize: 16,
        fontWeight: '600',
    },
    buyBtnText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    }
})

export default styles;