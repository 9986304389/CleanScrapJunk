
import React, { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import the bottom tab navigator
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import SignIn from '../screens/SignIn/SignIn';
import SignUP from '../screens/SignUp/SignUp';
import RestPassword from '../screens/ResetPassword/ResetPassword';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import MyCart from '../components/MyCart/MyCart';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import OrderSteps from '../components/OrderSummary/OrderSummary';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator(); // Create a bottom tab navigator

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
          marginTop: 12,
        }
      }}
    >

      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen} />
      <Stack.Screen name='Recipe' component={RecipeScreen} />
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
      <Stack.Screen name='ProductDescription' component={ProductDescription} />
      <Stack.Screen name='MyCart' component={MyCart} />
      <Stack.Screen name='OrderSummary' component={OrderSteps} />
    </Stack.Navigator>
  )
}

function SignInNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUP} />
      <Stack.Screen name="ResetPassword" component={RestPassword} />
    </Stack.Navigator>
  );
}

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => <DrawerContainer navigation={navigation} />}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
}


function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: 'green', // Set the active color to green
        labelStyle: {
          fontSize: 14, // Adjust font size as needed
          paddingBottom: 3, // Adjust padding bottom as needed
        },
        style: {
          height: 100, // Adjust height of the tab bar
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DrawerStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCart"
         component={MyCart}
        options={{
          tabBarLabel: 'My Cart',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-cart" color={color} size={size} />
          ),
          onPress: () => navigation.navigate('MyCart'), // Navigate to MyCart screen when tab is pressed
        }}
      />
      <Tab.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" color={color} size={size} />
          ),
          onPress: () => navigation.navigate('OrderSummary'), // Navigate to OrderSummary screen when tab is pressed
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    paddingBottom: 0, // Adjust padding bottom as needed
  },
});


export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignInNavigator} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

console.disableYellowBox = true;
