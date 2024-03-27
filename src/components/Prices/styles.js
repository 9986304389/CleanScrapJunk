import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({

    header: {
        marginTop: '8%',
        height: 75,
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
    }
})

export default styles;