import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

const ProfilePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileHead}>
                <FontAwesome name="user" style={styles.profileicon} />
                <Text style={styles.profile}>Profile</Text>
                <FontAwesome name="ellipsis-h" style={styles.threedots} />
            </View>
            <ProfileHeader navigation={navigation} />
            <MenuItems />
        </View>
    );
};

const ProfileHeader = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.dp}>
                <Image source={require('../../../assets/man.png')} style={styles.image} />
                {/* <Ionicons name="edit" size={20} color="#000" /> */}
            </TouchableOpacity>
            <View>
                <Text style={styles.name}>Shiny Roja</Text>
                <Text style={styles.number}>9876543210</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')} style={styles.iconContainer}>
                <FontAwesome name="edit" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const MenuItems = () => {
    return (
        <View style={styles.menuContainer}>
            <Text style={styles.menuHeads}>General</Text>
            <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="list-alt" style={styles.icons} />
                <Text style={styles.menuItemTxt}>My Order</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '63%' }]} />
            </TouchableOpacity>
            <Text style={styles.menuHeads}>Account Settings</Text>
            <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="map-marker" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Address</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '67%' }]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="credit-card" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Payment Methods</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '43%' }]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="sign-out" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Logout</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '67%' }]} />
            </TouchableOpacity>
            <Text style={styles.menuHeads}>App Settings</Text>
            <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="bell" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Notifications</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '54%' }]} />
            </TouchableOpacity>
            <Text style={styles.menuHeads}>Support</Text>
            <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="question-circle" style={styles.icons} />
                <Text style={styles.menuItemTxt}>Help Center</Text>
                <FontAwesome name="chevron-right" style={[styles.rightArrow, { marginLeft: '57%' }]} />
            </TouchableOpacity>
        </View>
    );
};


export default ProfilePage;