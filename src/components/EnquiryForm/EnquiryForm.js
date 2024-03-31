import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from "./styles";
import { CheckBox } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const EnquiryForm = () => {

    const [checkboxItems, setCheckboxItems] = useState([
        { label: 'Sqaure Box', checked: false },
        { label: 'Round Pipe', checked: false },
        { label: 'Channel', checked: false },
        { label: 'Angle', checked: false },
        { label: 'Beam', checked: false },
        { label: 'Plate', checked: false },
        { label: 'Sheet', checked: false },
        { label: 'Rod', checked: false },
        { label: 'Flat', checked: false },
        { label: 'Cutting Plate', checked: false },
        { label: 'Old Secondary Rails', checked: false },
        { label: 'Conveyor G.I. Pipe', checked: false },
        { label: 'Secondary Angle', checked: false },
        { label: 'Secondary Channel', checked: false },
        { label: 'Secondary G.I Angle', checked: false },
        { label: 'Secondary Billet', checked: false },
        { label: 'Secondary Plate', checked: false },
        { label: 'Secondary Square Pipe', checked: false },
        { label: 'Secondary Beam', checked: false },
        { label: 'Copper Scrap', checked: false },
        { label: 'Melting Scrap', checked: false },
        { label: 'Steel Scrap', checked: false },
        { label: 'Shed Demolish', checked: false },
        { label: 'Aluminium Scrap', checked: false },
        { label: 'Casting Scrap', checked: false },
        { label: 'Rolling Scrap', checked: false },
    ]);

    const handleCheckBoxChange = (index) => {
        const updatedItems = [...checkboxItems];
        updatedItems[index].checked = !updatedItems[index].checked;
        setCheckboxItems(updatedItems);
    };

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.containerView}>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <View style={styles.loginFormView}>
                    <Text style={styles.logoText}>Enquiry Form</Text>
                    <Text style={styles.label_text}>Select Interested Products</Text>
                    {checkboxItems.map((item, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                checked={item.checked}
                                onPress={() => handleCheckBoxChange(index)}
                                checkedColor='green' // Change the color when checked
                                uncheckedColor='black'
                            />
                            <Text>{item.label}</Text>
                        </View>
                    ))}

                    <Text style={styles.label_text}>Your Name</Text>
                    <TextInput
                        placeholder="Your Name"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                    <Text style={styles.label_text}>Your Mobile</Text>
                    <TextInput
                        placeholder="Your Mobile"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                    <Text style={styles.label_text}>Your Email</Text>
                    <TextInput
                        placeholder="Your Email"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />

                    <Text style={styles.label_text}>Message</Text>
                    <TextInput
                        placeholder="Message"
                        placeholderColor="#c4c3cb"
                        style={styles.loginFormTextInput}
                    />
                </View>

                <TouchableOpacity style={styles.submitAddressBtn}>
                    <Text style={styles.submitAddressText}>
                        Send Message
                    </Text>
                </TouchableOpacity>

                {/* </TouchableWithoutFeedback> */}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default EnquiryForm;