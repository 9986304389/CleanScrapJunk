import React from "react";
import { View, Text, Button, ScrollView, TouchableWithoutFeedback, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from "react-native";
import { Icon } from "react-native-paper";
import styles from "./styles";

export default function AddProducts() {
    const onLoginPress = async () => {

    };

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <Text style={styles.logoText}>Add Products</Text>
                        <Text style={styles.label_text}>Product Name</Text>
                        <TextInput
                            // onChangeText={setName}
                            placeholder="Product Name"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Rate</Text>
                        <TextInput
                            // onChangeText={setEmail}
                            placeholder="Rate"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Size</Text>
                        <TextInput
                            // onChangeText={setName}
                            placeholder="Size"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Descrption</Text>
                        <TextInput
                            // onChangeText={setEmail}
                            placeholder="Description"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                style={styles.loginButton}
                                onPress={() => onLoginPress()}
                            >
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                                    Add Product
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}