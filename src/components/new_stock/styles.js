import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '4%',
        paddingHorizontal: '4%',
        justifyContent: 'center',
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
        paddingHorizontal: 0,
        marginHorizontal: 0,
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
    imagecard: {

        width: 100,
        height: 100,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android
        opacity: 0.8
    },
    card: {
        padding: 10,
        width: '100%',
        // borderWidth: 1,

        // borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        opacity: 0.8,

    },
    textCard: {
        width: '100%',
        flexDirection: 'column',
        marginHorizontal: 8,
        // marginLeft: '7%',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        
        
    },
    name: {
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 7,
   

    },
    price: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 7,

    },
    iconContainer: {
        // marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10%'
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: '70%',
        // marginTop: '1%'
    },
    orderButton: {
        backgroundColor: '#347855',
        width: '50%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: '15%',
    },
    orderButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    spinnerContainer: {
        ...StyleSheet.absoluteFillObject, // Position the spinner absolute to cover the entire parent container
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      },
})

export default styles;