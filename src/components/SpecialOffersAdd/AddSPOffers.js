import React from "react";
import { View, Text, Button, ScrollView, TouchableWithoutFeedback, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from "react-native";
import { Icon } from "react-native-paper";
import styles from "./styles";

export default function AddSpOffers() {
    const onLoginPress = async () => {

    };

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <Text style={styles.logoText}>Add Offers</Text>
                        <Text style={styles.label_text}>Discound Detail</Text>
                        <TextInput
                            // onChangeText={setName}
                            placeholder="Discound Detail"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Description</Text>
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
                                    Add Offer
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}