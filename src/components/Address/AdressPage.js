import react from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from "./styles";

export function AdressPage({ navigation }) {
    return (
        <View style={styles.maincontainer}>
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
            <TouchableOpacity onPress={() => navigation.navigate('AddAddressPage')}>
                <Ionicons name="add-circle-sharp" size={45} color="black" />
            </TouchableOpacity>
        </View>
    );
}
