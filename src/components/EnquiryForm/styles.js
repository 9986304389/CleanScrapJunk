import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({

    maincontainer: {
        paddingHorizontal: '5%'
    },
    adresscontainer: {
        borderWidth: 1,
        display: 'flex',
        borderRadius: 10,
        borderColor: '#347855',
        marginVertical: '5%',
        paddingHorizontal: '5%',
        paddingVertical: '5%'
    },
    addressTopContainer: {
        flexDirection: 'row',
        paddingBottom: '5%'
    },
    homeIcon: {
        marginRight: '5%'
    },
    deleteIcon: {
        marginLeft: '60%'
    },
    addicon: {
        // top: 590,
        // left: 330
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: '8%',
        shadowColor: '#ffff',
        minHeight: 50
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
        fontFamily: 'Montserrat_400Regular'
    },
    containerView: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: '5%'
    },
    loginScreenContainer: {
        flex: 1,
    },
    logoText: {
        fontSize: 36,
        fontWeight: "500",
        marginTop: 30,
        marginBottom: 30,
        textAlign: "center",
        color: "black",
        fontWeight: "800"
    },
    loginFormView: {
        flex: 1,
        width: '100%',
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eaeaea",
        backgroundColor: "#fafafa",
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 10,

    },
    submitAddressBtn: {
        backgroundColor: "#347855",
        borderRadius: 5,
        height: 45,
        marginVertical: '10%',
        width: '50%',
        alignItems: "center",
        justifyContent: 'center'
    },
    submitAddressText: {
        color: 'white',
        fontSize: 16
    },
    label_text: {
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 4
    },
    eyeIconContainer1: {
        position: 'absolute',
        top: 465,
        right: 20,
    },
    eyeIconContainer2: {
        position: 'absolute',
        top: 550,
        right: 20,
    },
})

export default styles;