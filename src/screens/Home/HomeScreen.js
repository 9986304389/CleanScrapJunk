import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import BottomBar from "../../components/BottomBar/BottomBar";
import MainBar from "../../components/MainBar/MainBar";
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { Avatar, Icon } from 'react-native-elements';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from "../../components/SearchBar/SearchBar";
import CarouselComponent from "../../components/Carousel/Carousel";
import ProductTab from "../../components/ProductTab/ProductTab";

export default function HomeScreen(props) {
  const userType = useSelector((state) => state.profile.user.userType);
  const userDetails = useSelector((state) => state.profile.user);
  const userName = useSelector((state) => state.profile.user.name);
  const userLocation = useSelector((state) => state.profile.user.location);
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
          <Avatar
            rounded
            source={require('../../../assets/man.png')}
            size="small"
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{userName}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="location-on" size={16} />
              <Text style={{ marginLeft: 5, color: "#1D741B" }}>{userLocation}</Text>
            </View>
          </View>
        </View>
      ),
      // Omit headerLeft to have no left component
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 20, borderColor: '#1D741B', }}>
          <Icon name="notifications" type="material" size={28} iconStyle={{ backgroundColor: '#F2F1F0', borderRadius: 50, padding: 5, marginRight: 10 }} style={{ marginRight: 10 }} />
          <Icon name="favorite" type="material" size={28} iconStyle={{ backgroundColor: '#F2F1F0', borderRadius: 50, padding: 5, marginRight: 0 }} />
        </View>
      ),
    });
  }, [navigation]);


  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1 }}>
        <SearchBar />
        <CarouselComponent navigation={navigation} user={userType} />
        <ProductTab user={userType} />
      </View>
    </TouchableWithoutFeedback>
  );
}
