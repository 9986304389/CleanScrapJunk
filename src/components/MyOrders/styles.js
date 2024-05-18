import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    profileicon: {
        fontSize: 22,
        marginLeft: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '4%',
        paddingHorizontal: '4%'
        // justifyContent: 'center',
    },
    titleView: {
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingTop: '15%'
    },
    titleIcon: {
        marginTop: '1%',
        marginLeft: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: '3%'
    },
    cartItem: {
        marginBottom: 12,
        width: '100%',
        paddingHorizontal: 4,
        marginHorizontal: 5,
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
        // borderBottomWidth: 1
    },
    card: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'lightgray',
        // borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 140,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#ccc'
    },
    textCard: {
        width: '70%',
        flexDirection: 'column',
        marginHorizontal: 5,
        marginLeft: '5%',

    },
    name: {
        width: '85%',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 7,

    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 7
    },
    iconContainer: {
        // marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '3%',
        width: '100%'
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: '30%',
        // marginTop: '1%'
    },
    orderButton: {
        backgroundColor: '#347855',
        paddingVertical: 10,
        paddingHorizontal: '5%',
        marginHorizontal: '5%',
        borderRadius: 5,
    },
    cancelBtn: {
        // backgroundColor: '#347855',
        borderWidth: 1,
        borderColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: '5%',
        marginHorizontal: '5%',
        borderRadius: 5,
    },
    orderButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cancelButtonText: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    status: {
        minWidth: '16%',
        borderWidth: 1,
        borderColor: '#347855',
        color: '#347855',
        width: '96%',
        textAlign: 'center',
        paddingVertical: '2.5%',
        borderRadius: 5,
        marginVertical: '4%'
    },
    statusCompleted: {
        borderWidth: 1,
        borderColor: '#347855',
        color: '#347855',
        width: '65%',
        textAlign: 'center',
        paddingVertical: '2.5%',
        borderRadius: 5,
        marginVertical: '4%'
    },
    statusCancelled: {
        borderWidth: 1,
        borderColor: 'red',
        color: 'red',
        width: '65%',
        textAlign: 'center',
        paddingVertical: '2.5%',
        borderRadius: 5,
        marginVertical: '4%'
    },
    amt: {
        fontSize: 18,
        fontWeight: '500',


    },
    orderDate: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginTop: '2%',
        marginBottom: '4%'
    },
    orderDateTxt: {
        marginLeft: '5%',
        fontSize: 16
    },
    spinnerContainer: {
        ...StyleSheet.absoluteFillObject, // Position the spinner absolute to cover the entire parent container
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      },
})

export default styles;