import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: '5%',
    },
    profileHead: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '7%',
        paddingLeft: '3%'
    },
    profileicon: {
        fontSize: 22,
        marginLeft: 20
    },
    threedots: {
        fontSize: 22,
        marginLeft: '63%'
    },
    profile: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        // resizeMode: 'contain',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    dp: {
        marginRight: '5%',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        // marginTop: '8%'
    },
    number: {
        fontSize: 16,
        marginTop: '4%'
    },
    menuContainer: {
        flex: 1,
        marginTop: '5%',
        paddingLeft: '2%'
    },
    menuHeads: {
        fontSize: 18,
        fontWeight: '600',
        color: '#94928d',
        marginBottom: '10%'
    },
    menuItem: {
        // paddingVertical: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '10%'
    },
    icons: {
        fontSize: 18,
        marginRight: '5%'
    },
    rightArrow: {
        fontSize: 16,
    },
    menuItemTxt: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    },
    icon: {
        fontSize: 26,
        color: 'black',
        alignContent: "center"
    },
    iconContainer: {
        marginLeft: '25%'
    },
    spinnerContainer: {
        ...StyleSheet.absoluteFillObject, // Position the spinner absolute to cover the entire parent container
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
})

export default styles;