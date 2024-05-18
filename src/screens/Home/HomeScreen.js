// import React, { useLayoutEffect, useState } from "react";
// import { FlatList, Text, View, TouchableHighlight, Image, TouchableWithoutFeedback, Keyboard, ScrollView, RefreshControl,TouchableOpacity } from "react-native";

// import { Avatar, Icon } from 'react-native-elements';
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { useSelector, useDispatch } from 'react-redux'
// import SearchBar from "../../components/SearchBar/SearchBar";
// import CarouselComponent from "../../components/Carousel/Carousel";
// import ProductTab from "../../components/ProductTab/ProductTab";

// export default function HomeScreen(props) {
//   const userType = useSelector((state) => state.profile.user.userType);
//   const userDetails = useSelector((state) => state.profile.user);
//   const userName = useSelector((state) => state.profile.user.name);
//   const userLocation = useSelector((state) => state.profile.user.location);
//   const { navigation } = props;
//   const [refreshing, setRefreshing] = React.useState(false);
//   const [refreshCount, setRefreshCount] = useState(0);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//     setRefreshCount(prevCount => prevCount + 1);

//   }, []);


//   const handleScroll = (event) => {
//     const currentScrollPosition = event.nativeEvent.contentOffset.y;
//     // If the user scrolls up and is at the top of the scroll view, enable refresh
//     if (currentScrollPosition < scrollPosition && currentScrollPosition === 0) {
//       setScrollPosition(currentScrollPosition);
//       setRefreshing(true);
//       onRefresh();
//     }
//     // Update the scroll position
//     setScrollPosition(currentScrollPosition);
//   };

//   const handleNavigation = () => {
//     // Navigate to the desired screen or perform any navigation action here
//     navigation.navigate('MyCart'); // Replace 'ScreenName' with the name of your screen
//   };

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: '',
//       headerLeft: () => (
//         <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
//           <Avatar
//             rounded
//             source={require('../../../assets/man.png')}
//             size="small"
//           />
//           <View style={{ marginLeft: 10 }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{userName}</Text>
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <Icon name="location-on" size={16} />
//               <Text style={{ marginLeft: 5, color: "#1D741B" }}>{userLocation}</Text>
//             </View>
//           </View>
//         </View>
//       ),
//       // Omit headerLeft to have no left component
//       headerRight: () => (
//         <View style={{ flexDirection: 'row', marginRight: 20, borderColor: '#1D741B', }}>
//           <Icon name="notifications" type="material" size={28} iconStyle={{ backgroundColor: '#F2F1F0', borderRadius: 50, padding: 5, marginRight: 10 }} style={{ marginRight: 10 }} />
//           <TouchableOpacity onPress={handleNavigation}>
//       <Icon
//         name="shopping-cart"
//         type="material"
//         size={28}
//         iconStyle={{ backgroundColor: '#F2F1F0', borderRadius: 50, padding: 5, marginRight: 0 }}
//       />
//     </TouchableOpacity>
//           {/* <Icon name="favorite" type="material" size={28} iconStyle={{ backgroundColor: '#F2F1F0', borderRadius: 50, padding: 5, marginRight: 0 }} /> */}
//         </View>
//       ),
//     });
//   }, [navigation]);


//   const dismissKeyboard = () => {
//     Keyboard.dismiss();
//   }
//   const [searchText, setSearchText] = useState(""); // State to hold search text

//   const handleSearch = (text) => {
//     setSearchText(text); // Update search text state
//   };

 

//   return (

//     <TouchableWithoutFeedback onPress={dismissKeyboard}>

//       <View style={{ flex: 1 }}>
//         <View style={{ flex: 0 }}>
//           <ScrollView
//             refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
//           >
//             {/* ScrollView content */}
//             <SearchBar onSearch={handleSearch} />
//           </ScrollView>
//         </View>



//         <CarouselComponent navigation={navigation} user={userType} />


//         <ProductTab searchText={searchText} count={refreshCount} />


//       </View>
//     </TouchableWithoutFeedback>

//   );
// }

import React, { useLayoutEffect, useState, useEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, TouchableWithoutFeedback, Keyboard, ScrollView, RefreshControl, TouchableOpacity, BackHandler, Alert } from "react-native";
import { Avatar, Icon } from 'react-native-elements';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from 'react-redux';
import SearchBar from "../../components/SearchBar/SearchBar";
import CarouselComponent from "../../components/Carousel/Carousel";
import ProductTab from "../../components/ProductTab/ProductTab";

export default function HomeScreen(props) {
  const userType = useSelector((state) => state.profile.user.userType);
  const userDetails = useSelector((state) => state.profile.user);
  const userName = useSelector((state) => state.profile.user.name);
  const userLocation = useSelector((state) => state.profile.user.location);
  const { navigation } = props;
  const [refreshing, setRefreshing] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    setRefreshCount(prevCount => prevCount + 1);
  }, []);

  const handleScroll = (event) => {
    const currentScrollPosition = event.nativeEvent.contentOffset.y;
    // If the user scrolls up and is at the top of the scroll view, enable refresh
    if (currentScrollPosition < scrollPosition && currentScrollPosition === 0) {
      setScrollPosition(currentScrollPosition);
      setRefreshing(true);
      onRefresh();
    }
    // Update the scroll position
    setScrollPosition(currentScrollPosition);
  };

  const handleNavigation = () => {
    // Navigate to the desired screen or perform any navigation action here
    navigation.navigate('MyCart'); // Replace 'ScreenName' with the name of your screen
  };

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
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 20, borderColor: '#1D741B', }}>
          {/* <Icon name="notifications" type="material" size={28} iconStyle={{ backgroundColor: '#F2F1F0', borderRadius: 50, padding: 5, marginRight: 10 }} style={{ marginRight: 10 }} /> */}
          <TouchableOpacity onPress={handleNavigation}>
            <Icon
              name="shopping-cart"
              type="material"
              size={28}
              iconStyle={{ backgroundColor: '#F2F1F0', borderRadius: 50, padding: 5, marginRight: 3 }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit App', 'Do you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }
  const [searchText, setSearchText] = useState(""); // State to hold search text

  const handleSearch = (text) => {
    setSearchText(text); // Update search text state
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0 }}>
          <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            <SearchBar onSearch={handleSearch} />
          </ScrollView>
        </View>
        <CarouselComponent navigation={navigation} user={userType} />
        <ProductTab searchText={searchText} count={refreshCount} />
      </View>
    </TouchableWithoutFeedback>
  );
}

