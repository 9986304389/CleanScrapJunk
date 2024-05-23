import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({

    header: {
        marginTop: '10%',
        height: 60,
        backgroundColor: '#347855',
        justifyContent: 'center',
        paddingHorizontal: '10%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '8%',
        marginBottom: '8%',
        paddingHorizontal: '4%'
        // justifyContent: 'center',
    },
    cartItem: {
        marginBottom: 12,
        width: '100%',
        // paddingHorizontal: 4,
        marginHorizontal: 5,
        borderRadius: 5,
        padding: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: '5%'
    },
    name: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 7
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: '70%',
        // marginTop: '1%'
    },
    rightArrow: {
        position: 'absolute',
        right: '7%'
    },
    col75: {
        width: '75%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    col25: {
        width: '25%',
        paddingLeft: '3%'
    },
    priceTxt: {
        fontSize: 16,
        fontWeight: '600'
    },
    shareStatus: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    shareStatusTxt: {
        color: 'green',
        fontSize: 14,
        marginRight: '5%'
    },
    Prdtname: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 7
    },
    header2: {
        height: 50,
        backgroundColor: '#347855',
        justifyContent: 'center',
        paddingHorizontal: '7%',
    },
    spOffers: {
        position: 'absolute',
        right: '15%'
        // display: 'flex',
        // flexDirection: 'row',
    },
    iconContainer: {
        width: '20%',
        // marginHorizontal: 10,
        marginVertical: 15,
    },
    icon2: {
        width: 24,
        height: 24,
        color: 'white'
    },
    text:{
        color:'black',
        fontSize:20
    }
})

export default styles;