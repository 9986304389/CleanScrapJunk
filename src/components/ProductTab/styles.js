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
    },
    card: {
        // backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 175,
        opacity: 0.7,
        borderRadius: 5
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    heartIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
        // backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 5,
        borderRadius: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: '2%',
        marginLeft: '5%'
    },
    price: {
        fontSize: 16,
        fontWeight: "400",
        marginBottom: '3%',
        marginLeft: '5%'
    }
})

export default styles;