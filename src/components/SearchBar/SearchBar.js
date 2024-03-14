import React from "react";
import { TextInput, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


export default function SearchBar() {

    return (
        <View style={styles.container}>
            <Icon name="search" size={20} color="#888" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor="#888"
            />
        </View>
    )
}