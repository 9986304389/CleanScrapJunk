import React, { useState } from "react";
import { TextInput, View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


export default function SearchBar() {
    const [searchText, setSearchText] = useState(""); // State to hold the search text
    const [searchResult, setSearchResult] = useState(""); // State to hold the search result

    const handleSearch = () => {
        // Perform search based on the searchText state
        console.log("Performing search for:", searchText);
        // You can implement your search logic here, such as filtering data based on the search text
        // For now, let's just log the search text to the console
        setSearchResult(searchText); // Set the search result to the searched text
    };

    const handleChangeText = (text) => {
        // Update the searchText state whenever input changes
        setSearchText(text);
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Icon name="search" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                    value={searchText}
                    onChangeText={handleChangeText} // Call handleChangeText when input changes
                    onSubmitEditing={handleSearch}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}