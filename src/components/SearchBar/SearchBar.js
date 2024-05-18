import React, { useState } from "react";
import { TextInput, View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


export default function SearchBar({ onSearch }) {
    const [text, setText] = React.useState('');

    const handleTextChange = (newText) => {
        setText(newText);
        onSearch(newText);
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Icon name="search" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                    value={text}
                    onChangeText={handleTextChange}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}