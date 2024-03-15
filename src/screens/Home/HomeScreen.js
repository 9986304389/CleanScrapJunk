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

import SearchBar from "../../components/SearchBar/SearchBar";
import CarouselComponent from "../../components/Carousel/Carousel";
import ProductTab from "../../components/ProductTab/ProductTab";

export default function HomeScreen(props) {
  const { navigation } = props;
  const { bottom } = useSafeAreaInsets();
  const BOTTOM_APPBAR_HEIGHT = 0;
  const MEDIUM_FAB_HEIGHT = 56;
  const theme = useTheme();
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
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Velpula Kavitha</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="location-on" size={16} />
              <Text style={{ marginLeft: 5, color: "#1D741B" }}>SRP tools</Text>
            </View>
          </View>
        </View>
      ),
      // Omit headerLeft to have no left component
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 20, borderColor: '#1D741B', }}>
          {/* Notification Icon */}
          <Icon name="notifications" type="material" size={28} iconStyle={{ backgroundColor: '#F2F1F0', borderRadius: 50, padding: 5, marginRight: 10 }} style={{ marginRight: 10 }} />
          {/* Cart Icon */}
          {/* <Icon name="shopping-cart" type="material" size={24} color="black" style={{ marginRight: 10 }} /> */}
          {/* Favorite Icon */}
          <Icon name="favorite" type="material" size={28} iconStyle={{ backgroundColor: '#F2F1F0', borderRadius: 50, padding: 5, marginRight: 0 }} />
        </View>
      ),
    });
  }, [navigation]);


  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1 }}>
        <SearchBar />
        <CarouselComponent />
        <ProductTab />
        {/* <MainBar/> */}
        {/* <Text style={styles.title}>Hello</Text> */}
        {/* <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} /> */}
        {/* <BottomBar /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}
