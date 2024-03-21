import react from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { AntDesign, FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export function AdressPage() {
    return (
        <View>
            <View style={styles.container}>
                <FontAwesome name="search" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                />
            </View>
            <View style={styles.adresscontainer}>
                <View style={styles.addressTopContainer}>
                    <FontAwesome name="home" size={24} color="black" style={styles.homeIcon} />
                    <Text style={{ fontSize: 18 }}>Home</Text>
                    <TouchableOpacity style={styles.deleteIcon}>
                        <FontAwesome name="trash" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>53, Raja Muthiah Rd, Kannappar Thidal,Periyampet, Chennai,+91 1234567891</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Ionicons name="add-circle-sharp" size={45} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    adresscontainer: {
        borderWidth: 1,
        display: 'flex',
        borderRadius: 10,
        borderColor: '#347855',
        height: '40%',
        marginVertical: '5%',
        paddingHorizontal: '5%'
    },
    addressTopContainer: {
        flexDirection: 'row',
        paddingVertical: '5%'
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
})