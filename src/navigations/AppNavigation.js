
import React from 'react';
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import SignIn from '../screens/SignIn/SignIn';
import SignUP from '../screens/SignUp/SignUp';
import RestPassword from '../screens/ResetPassword/ResetPassword';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import MyCart from '../components/MyCart/MyCart';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import OrderSteps from '../components/OrderSummary/OrderSummary';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import OTPPage from '../screens/OTPPage/Otppage';
import ProfileEdit from '../components/Profile/Profilepage';
import ProfilePage from '../components/Profile/Profile';
import MyOrders from '../components/MyOrders/MyOrders';
import { AdressPage } from '../components/Address/AdressPage';
import AddAddress from '../components/Address/AddAddress';
import { NotificationPage } from '../components/Notification/NotificationPage';
import EnquiryForm from '../components/EnquiryForm/EnquiryForm';
import PriceList from '../components/Prices/PricePage';
import PricesPage from '../components/Prices/PricesPage';
import AddSpOffers from '../components/SpecialOffersAdd/AddSPOffers';
import AddProducts from '../components/AddProducts/AddProducts';
import new_stock from '../components/new_stock/new_stock';
import Info from '../components/info/info';
import About from '../components/about/about'
import ServiceLit from '../components/Services/Services';
import ServicesDis from '../components/Services/ServiceDisPage';
import AboutUs from '../components/about US/aboutUS';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Stack.Screen name='ProductDescription' component={ProductDescription} />
      <Stack.Screen name='AddSPOffers' component={AddSpOffers} />
      <Stack.Screen name='AddProducts' component={AddProducts} />
      <Stack.Screen name='MyCart' component={MyCart} />
      <Stack.Screen name='OrderSummary' component={OrderSteps} />
      <Stack.Screen name='ProfileEdit' component={ProfileEdit} />
      <Stack.Screen name='ProfilePage' component={ProfilePage} />
      <Stack.Screen name='MyOrders' component={MyOrders} />
      <Stack.Screen name='AddressPage' component={AdressPage} />
      <Stack.Screen name='AddAddressPage' component={AddAddress} />
      <Stack.Screen name='NotificationsPage' component={NotificationPage} />
      <Stack.Screen name='EnquiryForm' component={EnquiryForm} />
      <Stack.Screen name='PricesPage' component={PricesPage} />
      <Stack.Screen name='NewStock' component={new_stock} />
      <Stack.Screen name='Info' component={Info} />
      <Stack.Screen name='About' component={About} />
      {/* <Stack.Screen name='Services' component={Services} /> */}
      <Stack.Screen name='ServiceDisPage' component={ServicesDis} />
      <Stack.Screen name='AboutUs' component={AboutUs} />
    </Stack.Navigator>
  )
}

function MainNavigator_new_stock() {
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
      <Stack.Screen name='NewStock' component={new_stock} />
    </Stack.Navigator>
  )
}

function MainNavigator_OrderSummary() {
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
      <Stack.Screen name='OrderSummary' component={OrderSummary} />
    </Stack.Navigator>
  )
}


function MainNavigator_Profile() {
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
      <Stack.Screen name='ProfilePage' component={ProfilePage} />
    </Stack.Navigator>
  )
}
function SignInNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUP} />
      <Stack.Screen name="ResetPassword" component={RestPassword} />
      <Stack.Screen name='OTP' component={OTPPage} />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: '#347855',
        labelStyle: {
          fontSize: 14,
          paddingTop: 0,
        },
        tabBarStyle: {
          display: 'flex',
          paddingTop: 15, // Adjust this value to set the padding for the top of the tab bar
        },
        style: {
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View style={{ paddingTop: 7 }}>
              <Ionicons name="home" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NewStock"
        component={MainNavigator_new_stock}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View style={{ paddingTop: 7 }}>
              <FontAwesome name="envelope" color={color} size={size} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Price"
        component={PriceList}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View style={{ paddingTop: 7 }}>
              <FontAwesome name="inr" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServiceLit}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View style={{ paddingTop: 7 }}>
              <FontAwesome name="briefcase" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={MainNavigator_Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View style={{ paddingTop: 7 }}>
              <FontAwesome name="user" color={color} size={size} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


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

