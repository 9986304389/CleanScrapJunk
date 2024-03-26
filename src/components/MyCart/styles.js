import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({

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
        padding: 10,
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'lightgray',
        // borderRadius: 5,
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
})

export default styles;