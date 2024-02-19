import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'; // Import icons and avatar from the appropriate library

const MainBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.avatarContainer}>
        <Avatar
          rounded
          source={require('./path_to_your_avatar_image.jpg')}
          size="medium"
        />
      </TouchableOpacity>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>User Name</Text>
        <View style={styles.userLocationContainer}>
          <Icon
            name="location-pin"
            type="entypo"
            size={14}
            color="#808080"
          />
          <Text style={styles.userLocation}>Location</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Icon
            name="notifications"
            type="material"
            size={24}
            color="#808080"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon
            name="heart"
            type="font-awesome"
            size={24}
            color="#808080"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatarContainer: {
    marginRight: 8,
  },
  userInfoContainer: {
    flex: 1,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userLocation: {
    marginLeft: 4,
    fontSize: 14,
    color: '#808080',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
};

export default MainBar;
