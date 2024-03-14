import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginTop: '5%'
    },
    addressContainer: {
        marginBottom: 20,
        paddingVertical: '4%',
        paddingHorizontal: '2%',
        borderRadius: 10,
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
    addressDiv: {
        flexDirection: 'row',
    },
    productDetailsContainer: {
        marginBottom: 20,
        paddingVertical: '2%',
        borderRadius: 10,
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
    quantityContainer: {
        marginBottom: 20,
    },
    totalAmountContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '5%',
        borderRadius: 10,
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
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    address: {
        marginTop: 2,
        marginLeft: 15,
        fontSize: 16,
        maxWidth: '60%',
        flexWrap: 'wrap',
    },
    // description: {
    //     marginTop: 5,
    //     fontSize: 14,
    // },
    // price: {
    //     marginTop: 5,
    //     fontSize: 14,
    // },
    // quantityInput: {
    //     marginTop: 5,
    //     borderWidth: 1,
    //     borderColor: '#ccc',
    //     padding: 8,
    //     fontSize: 14,
    // },

    card: {
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    textCard: {
        flexDirection: 'column',
        marginHorizontal: 10,
        marginLeft: '7%'
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 7
    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 7
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    changeAddressBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: '5%',
        marginTop: '5%', // Adjust the margin as needed
    },
    changeAddressBtn: {
        width: '50%',
        height: 50,
        backgroundColor: '#347855',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: 'white',
        borderRadius: 7
    },
    changeAddressTxt: {
        fontSize: 16,
        color: 'white',
    },
    continueBtnContainer: {
        alignItems: 'center',
        paddingRight: '5%',
        marginTop: '15%', // Adjust the margin as needed
    },
    continueBtn: {
        width: '50%',
        height: 50,
        backgroundColor: '#347855',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: 'white',
        borderRadius: 7
    },
    continueTxt: {
        fontSize: 16,
        color: 'white',
    }
})

export default styles;