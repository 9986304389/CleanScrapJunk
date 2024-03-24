import { StyleSheet } from "react-native";
// import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginTop: 20,
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
    searchResult: {
        // Style for the search result text
        marginTop: 10, // Adjust as needed
        fontSize: 16, // Adjust as needed
        color: 'black', // Adjust as needed
    },
})

export default styles;