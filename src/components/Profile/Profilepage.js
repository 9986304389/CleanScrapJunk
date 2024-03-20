import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Feather, AntDesign, Fontisto } from '@expo/vector-icons';

export function Profilepage(props) {
    const { navigation, route } = props;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Profile Edit',
            headerTitleStyle: {
                marginLeft: 20,
                fontWeight: 'bold'
            },
            headerLeft: () => (
                null
            ),

        });
    }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ top: 100 }}>
                <Image
                    source={require('../../../assets/man.png')}
                    style={styles.profile}
                />
                <TouchableOpacity>
                    <Feather name="edit" size={29} color="white" style={{ top: -45, height: 30, width: 28, left: 240, backgroundColor: '#555e57', borderRadius: 5 }} />
                </TouchableOpacity>
            </View>
            <View style={{ top: 280, height: 300, width: 300 }}>
                <Text style={styles.name}>Full Name</Text>
                <TextInput
                    keyboardType="default"
                    style={styles.nameinput}
                />
                <Text style={styles.email}>Email</Text>
                <AntDesign name="user" size={24} color="black" style={styles.icon1} />
                <TextInput
                    style={styles.emailinput}
                    keyboardType="email-address"
                />
                <Fontisto name="email" size={24} color="black" style={styles.icon2} />
                <Text style={styles.mobile}>Mobile No</Text>
                <TextInput
                    style={styles.mobileinput}
                    keyboardType="number-pad"
                />
                <Feather name="phone-call" size={24} color="black" style={styles.icon3} />

            </View>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.buttontxt}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        borderRadius: 75,
        height: 150,
        width: 150,
        left: 120
    },
    name: {
        fontSize: 17,
        left: 15,
        top: 13,
        fontWeight: "500",
        fontStyle: "italic"
    },
    icon1: {
        position: 'absolute',
        left: 32,
        top: 53

    },
    nameinput: {
        width: 330,
        height: 38,
        paddingLeft: 40,
        borderRadius: 10,
        top: 25,
        backgroundColor: '#f0f3f7',
        left: 28
    },
    email: {
        fontSize: 17,
        fontWeight: "500",
        fontStyle: "italic",
        top: 38,
        left: 15
    },
    emailinput: {
        backgroundColor: '#f0f3f7',
        left: 28,
        width: 330,
        height: 38,
        top: 53,
        borderRadius: 10,
        paddingLeft: 40,
    },
    icon2: {
        top: 22,
        left: 33,
    },
    mobile: {
        fontSize: 17,
        fontWeight: "500",
        fontStyle: "italic",
        top: 38,
        left: 15
    },
    mobileinput: {
        backgroundColor: '#f0f3f7',
        left: 28,
        width: 330,
        height: 38,
        top: 53,
        borderRadius: 10,
        paddingLeft: 40,
    },
    icon3: {
        top: 23,
        left: 33,
    },
    button: {
        borderWidth: 1,
        top: 380,
        width: 250,
        height: 45,
        borderRadius: 10,
        left: 75,
        backgroundColor: '#16631f'
    },
    buttontxt: {
        left: 98,
        top: 10,
        fontSize: 17,
        color: 'white'
    },

});
