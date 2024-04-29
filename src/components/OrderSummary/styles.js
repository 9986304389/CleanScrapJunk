import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    container2: {
        // flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '5%',
        // marginHorizontal: '5%',
    },
    addressContainer: {
        width: '95%',
        marginBottom: 20,
        paddingBottom: '5%',
        paddingTop: '2%',
        // paddingVertical: '7%',
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
        width: '50%',
        flexDirection: 'row',
    },
    productDetailsContainer: {
        padding: 10,
        width: '97%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        // marginLeft: '5%',
        // marginRight: '5%',
        // marginHorizontal: '50%',
        borderRadius: 10,
        flexWrap: 'wrap',
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
    lastcontainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    totalAmountContainer: {
        width: '50%',
        height: 50,
        marginTop: 20,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 18,
        maxWidth: '60%',
        flexWrap: 'wrap',
        textAlign: "left"
    },
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
        width: '50%',
        flexDirection: 'column',
        // marginHorizontal: 10,
        marginLeft: '3%'
    },
    name: {
        width: '100%',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 7,
        flexWrap: 'wrap',
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
        justifyContent: 'center',
        paddingTop: '5%'
        // paddingHorizontal: '5%',
        // paddingVertical: '5%',
        // marginTop: '5%', // Adjust the margin as needed
    },
    continueBtn: {
        width: '100%',
        height: 50,
        // paddingHorizontal: '10%',
        // paddingVertical: '5%',
        backgroundColor: '#347855',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: 'white',
        borderRadius: 7,
        marginTop: '5%'
    },
    continueTxt: {
        fontSize: 16,
        color: 'white',
        marginHorizontal: '10%'
    },
    continueBtnContainer1: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: '5%',
        // paddingVertical: '5%',
        // marginTop: '5%', // Adjust the margin as needed
    },
    continueBtn1: {
        width: '100%',
        height: 50,
        backgroundColor: '#347855',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: 'white',
        borderRadius: 7,
        // marginTop: '5%'
    },
    continueTxt1: {
        fontSize: 16,
        color: 'white',
        marginHorizontal: '10%'
    },


    container: {
        display: 'flex',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: '20%',
        marginRight: 10,

    },
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stepLine: {
        flex: 1,
        height: 2,
        backgroundColor: '#ccc',
    },
    activeLine: {
        backgroundColor: '#347855',
    },
    progressBarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '4%',
    },
    stepIndicator: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        color: 'black'
    },
    activeStep: {
        backgroundColor: '#347855',
        color: 'white',
    },
    stepText: {
        color: 'black',
    },
    progressTxt: {
        flexDirection: 'row'
    },
    pageName: {
        width: '100%',
        position: 'absolute',
        top: '100%', // Center align text
    },
    pageName2: {
        width: '100%',
        position: 'absolute',
        top: '100%',
        left: '-15%'
    },
    pageName3: {
        width: '100%',
        position: 'absolute',
        top: '100%',
        left: '85%'
    },
    pageContainer: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;