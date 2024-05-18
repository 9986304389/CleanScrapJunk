import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { black } from "react-native-paper/src/styles/themes/v2/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        marginBottom: 20

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
        marginTop: '20%'
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
    editbutton: {
        borderColor: '#347855',
        backgroundColor: '#347855',
        borderWidth: 2,
        marginHorizontal: 10,
        textAlign: 'center',
        alignItems: 'center', // Align content horizontally
        justifyContent: 'center', // Align content vertically
        width: '45%',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20
    },
    cardBtnText: {
        fontSize: 16,
        fontWeight: '600',
    },
    buyBtnText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    modelcontainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff'
    },
    modelmodalContainer: {

        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
    },
    modelmodelmodalView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    modelalert: {
        width: '100%',
        maxWidth: 300,
        margin: 35,
        elevation: 24,
        borderRadius: 2,
        backgroundColor: '#fff'
    },
    modelalertTitle: {
        margin: 24,
        fontWeight: "bold",
        fontSize: 24,
        color: "#000"
    },
    modeltextInput: {
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24,
        fontSize: 16
    },
    modelalertButtonGroup: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 8,
        marginLeft: 24,
        padding: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-end"
    },
    modelalertButton: {
        borderColor: '#347855',
        backgroundColor: '#347855',
        borderWidth: 2,
        marginHorizontal: 10,
        textAlign: 'center',
        alignItems: 'center', // Align content horizontally
        justifyContent: 'center', // Align content vertically
        width: '25%',
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,


    },
    textInput: {
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24,
        fontSize: 16
    },
    modelokaybtn: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    alertButtonGroup: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 8,
        marginLeft: 24,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-end"

    },
    alertButton: {
        marginTop: 12,
        marginRight: 8,
        backgroundColor: "black",
    },
    ButtonCollor: {
        backgroundColor: "green",
    },
    spinnerContainer: {
        ...StyleSheet.absoluteFillObject, // Position the spinner absolute to cover the entire parent container
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },

    tableContainer: {
        marginVertical: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        width: "100%"
    },
    tableTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    tableRow: {
        flexDirection: 'row',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableCellHeader: {
        fontWeight: 'bold',
        flex: 1,
    },
    tableCell: {
        flex: 1,
    },
    centeredTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overflowCell: {
        flex: 1,
        // overflow: 'scroll', // or 'auto' for automatic scrolling
        width: '100%', // Adjust as needed
        overflow: 'scroll',
        margin: 5

    },
})

export default styles;