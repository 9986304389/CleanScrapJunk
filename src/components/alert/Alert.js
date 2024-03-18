import React from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements'; // Import the close icon from react-native-elements

const CustomAlert = ({ isVisible, title, description, buttonText, onPress, onClose, btnisVisible, color_title, color_description }) => {
  
    return (
        <Modal isVisible={isVisible}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '100%', height: '40%', alignItems: 'center' }}>
                    <Icon
                        name="close"
                        type="material-icons"
                        size={20}
                        color="gray"
                        onPress={onClose} // Call onClose function when close icon is pressed
                        containerStyle={{ position: 'absolute', top: 10, right: 10 }} // Position the close icon
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: `${color_title}` }}>{title}</Text>
                    <Text style={{ fontSize: 18, minWidth: 100, marginBottom: 20, color: `${color_description}` }}>{description}</Text>
                    {btnisVisible && (
                        <View>
                            <Button title={buttonText} onPress={onPress} />
                        </View>
                    )}

                </View>
            </View>
        </Modal>
    );
};

export default CustomAlert;
