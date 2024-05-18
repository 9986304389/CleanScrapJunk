import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, ActivityIndicator } from "react-native";
import { Feather, AntDesign, Fontisto, FontAwesome, Ionicons } from '@expo/vector-icons';
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'
import { useSelector } from 'react-redux'

function ProfileEdit({ route,navigation }) {
  
    const { profile } = route.params;
    const [name, setName] = useState("");
    const jwtToken = useSelector((state) => state.auth.token);
    const { loading, error, get, fetchData, post, remove } = useApi();
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    
    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Profile Edit',
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold',

            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')} style={{ marginLeft: 10 }}>
                    <FontAwesome name="arrow-left" size={20} color="black" style={{ fontWeight: '100' }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const editProfile = async () => {


        setLoadingSpinner(true);


        let data = {
            "phonenumber": profile[0]?.phonenumber,
            "name": name,
            "email": profile[0]?.email,
            "shipping_address": profile[0].shipping_address
        }


        const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/editUserProfile', data, jwtToken)


        if (response?.status === true) {
            setLoadingSpinner(false);
            setModelTitle('Edit profile successfully')
            // Call the alert 
            setColorTitle('green');
            setColorDescription('black');
            setResponseMessage(response?.message)
            showAlert();
        }
        else {

            setLoadingSpinner(false);
            setModelTitle('Edit Profile fail')
            // Call the alert 
            setColorTitle('red');
            setColorDescription('black');
            setResponseMessage(response?.message)
            showAlert();
        }
    }

    return (


        <ScrollView>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    {loadingSpinner && ( // Conditionally render ActivityIndicator when loading is true
                        <View style={styles.spinnerContainer}>
                            <ActivityIndicator size="100" color="#347855" />
                        </View>
                    )}
                    <View>
                        <Image
                            source={require('../../../assets/man.png')}
                            style={styles.profile}
                        />
                        <TouchableOpacity style={styles.profileEdit}>
                            <Ionicons name="camera" size={25} color="white" style={styles.peIcon} />
                        </TouchableOpacity>
                    </View>

                    {/* <View style={{ top: 280, height: 300, width: 300 }}>
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
                    </TouchableOpacity> */}
                    <View style={styles.loginFormView}>
                        <Text style={styles.label_text}>Name</Text>
                        <TextInput
                            onChangeText={setName}
                            placeholder="Full Name"
                            placeholderColor="#c4c3cb"
                            style={styles.loginFormTextInput}
                        // value={profile[0]?.name}
                        />
                        <Text style={styles.label_text}>Email</Text>
                        <TextInput
                            readOnly
                            placeholder="Email"
                            // placeholderColor="#c4c3cb"
                            value={profile[0]?.email}
                            style={styles.loginFormTextInput}
                        />
                        <Text style={styles.label_text}>Mobile No</Text>
                        <TextInput
                            readOnly
                            placeholder="Mobile No"
                            placeholderColor="#c4c3cb"
                            value={profile[0]?.phonenumber}
                            style={styles.loginFormTextInput}
                        />

                    </View>

                    <TouchableOpacity style={styles.submitAddressBtn} onPress={async () => await editProfile()}>
                        <Text style={styles.submitAddressText}>
                            Save
                        </Text>
                    </TouchableOpacity>

                </View>
                <CustomAlert
                    isVisible={isVisible}
                    title={modelTitle}
                    description={responseMessage}
                    buttonText={showButton ? "OK" : ""}
                    onPress={hideAlert}
                    onClose={hideAlert}
                    btnisVisible={false}
                    color_title={color_title}
                    color_description={color_description}
                />
            </KeyboardAvoidingView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: '10%',
        paddingHorizontal: '5%'
    },
    profile: {
        borderRadius: 75,
        height: 150,
        width: 150,
    },
    profileEdit: {
        width: '10%',
        backgroundColor: '#347855',
        borderRadius: 50,
        position: 'absolute',
        top: '75%',
        left: '30%'
    },
    peIcon: {
        padding: '15%'
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
    loginFormView: {
        flex: 1,
        width: '100%',
        marginTop: '5%'
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eaeaea",
        backgroundColor: "#fafafa",
        color: '#000000',
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 10,

    },
    submitAddressBtn: {
        backgroundColor: "#347855",
        borderRadius: 5,
        height: 45,
        marginTop: '10%',
        width: '50%',
        alignItems: "center",
        justifyContent: 'center'
    },
    submitAddressText: {
        color: 'white',
        fontSize: 16
    },
    label_text: {
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 4
    },
    spinnerContainer: {
        ...StyleSheet.absoluteFillObject, // Position the spinner absolute to cover the entire parent container
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },

});

export default ProfileEdit;
