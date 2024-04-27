import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
    tabBar: {
        backgroundColor: 'white',
    },
    indicator: {
        backgroundColor: 'white',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: '3%'
    },
    cardContainer: {
        width: '48%', // Adjust this value as needed
        marginBottom: 10,
        padding: 3
    },
    card: {
        // backgroundColor: '#ffffff',
        borderRadius: 10,
        //padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // For Android
        elevation: 1, // Adjust the elevation to change the intensity of the shadow
        shadowOffset: { width: 0, height: 2 },
        // For iOS
        shadowColor: '#000',
        shadowRadius: 50,
        backgroundColor: "#e7e7e7"
    },
    image: {
        width: '100%',
        height: 175,
        opacity: 1,
        borderRadius: 5
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignContent: 'center',
        alignItems: "center"
    },
    heartIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#ffff',
        padding: 2,
        opacity: 0.8,
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    heartIcon1: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: '#ffff',
        padding: 2,
        opacity: 0.8,
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: '2%',
        marginLeft: '5%'
    },
    price: {
        fontSize: 18,
        fontWeight: '500',
        fontWeight: "400",
        marginBottom: '3%',
        marginLeft: '5%',
        color: 'green'
    },
    iconContainer: {
        width: '20%',
        // marginHorizontal: 10,
        marginVertical: 15,
    },
    spOffers: {
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        fontSize: 26,
        color: 'black',
        alignContent: "center"
    },
   
})

export default styles;