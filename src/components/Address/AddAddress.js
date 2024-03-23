import React from "react";
import { View, Text, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const AddAddress = () => {

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.containerView}>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <View style={styles.loginFormView}>
                    <Text style={styles.logoText}>Add Your Address</Text>
                    <Text style={styles.label_text}>Door No. / Plot No.</Text>
                    <TextInput
                        placeholder="Door No. / Plot No."
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                    <Text style={styles.label_text}>Address line 1</Text>
                    <TextInput
                        placeholder="Address line 1"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                    <Text style={styles.label_text}>Address line 2</Text>
                    <TextInput
                        placeholder="Address line 2"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />

                    <Text style={styles.label_text}>City</Text>
                    <TextInput
                        placeholder="City"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                    <Text style={styles.label_text}>State</Text>
                    <TextInput
                        placeholder="State"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                    <Text style={styles.label_text}>Pincode</Text>
                    <TextInput
                        placeholder="Pincode"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                </View>

                <TouchableOpacity style={styles.submitAddressBtn}>
                    <Text style={styles.submitAddressText}>
                        Submit your address
                    </Text>
                </TouchableOpacity>

                {/* </TouchableWithoutFeedback> */}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default AddAddress;