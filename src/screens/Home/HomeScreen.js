import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import BottomBar from "../../components/BottomBar/BottomBar";
import MainBar from "../../components/MainBar/MainBar";
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { Avatar, Icon } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
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
            source={{
              uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1709143548~exp=1709144148~hmac=bc6472183558b0e0a41124e04f73d6ae0bd57b88c9518d7b690938374cb86029',
            }}
            size={40}
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

  return (
    <View>

      {/* <MainBar/> */}
      {/* <Text style={styles.title}>Hello</Text> */}
      {/* <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} /> */}
      <BottomBar />
      {/* Bottom app bar */}
    
      {/* <Appbar
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
            backgroundColor: theme.colors.elevation.level2,
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        <Appbar.Action icon="archive" onPress={() => { }} />
        <Appbar.Action icon="email" onPress={() => { }} />
        <Appbar.Action icon="label" onPress={() => { }} />
        <Appbar.Action icon="delete" onPress={() => { }} />
        <FAB
          mode="flat"
          size="medium"
          icon="plus"
          onPress={() => { }}
          style={[
            styles.fab,
            { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
          ]}
        />
      </Appbar> */}
    </View>
  );
}
