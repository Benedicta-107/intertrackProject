import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';
// import {HomeStack, CategoriesStack} from "./navigation";
import Home from './Screen/HomeScreen';
import Categories from './Screen/Categories'
import Favourite from './Screen/Favourite';
import Cart from './Screen/Cart';
import Account from './Screen/Account'
import Menu from './Screen/Menu';
//import HomeStackScreen from './Screen/navigation/HomeStack';
//import CategoriesStackScreen from './Screen/navigation/CategoriesStack';
const Stack = createNativeStackNavigator(); 
const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{header: () => null,  }} />
      <Stack.Screen name='Menu' component={Menu} options={{header: () => null,  }} />
    </Stack.Navigator>
  );
};


function HomeStackScreen() {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNavigator.Screen name="Home" component={StackScreen} />
      <HomeStackNavigator.Screen name="Categories" component={Categories} />
      <HomeStackNavigator.Screen name="Favourite" component={Favourite} />
      <HomeStackNavigator.Screen name="Cart" component={Cart} />
      <HomeStackNavigator.Screen name="Account" component={Account} />
    </HomeStackNavigator.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
      
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Categories') {
              iconName = focused ? Platform.select({ ios: 'ios-grid', android: 'md-grid' }) : Platform.select({ ios: 'ios-grid-outline', android: 'md-grid-outline' });
            } else if (route.name === 'Favourite') {
              iconName = focused ? Platform.select({ ios: 'ios-heart', android: 'md-heart' }) : Platform.select({ ios: 'ios-heart-outline', android: 'md-heart-outline' });
            } else if (route.name === 'Cart') {
              iconName = focused ? Platform.select({ ios: 'ios-cart', android: 'md-cart' }) : Platform.select({ ios: 'ios-cart-outline', android: 'md-cart-outline' });
            } else if (route.name === 'Account') {
              iconName = focused ? Platform.select({ ios: 'ios-person', android: 'md-person' }) : Platform.select({ ios: 'ios-person-outline', android: 'md-person-outline' });
            }
      
            if (iconName === 'home') {
              return <AntDesign name="home" size={size} color={color} />;
            } else {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          // tabBarActiveTintColor: '#1d8129', borderRadius: 12, tabBarActiveBackgroundColor: '#1d8129',
          // tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#013220', // Set the active (selected) tab text color to green
          tabBarInactiveTintColor: 'black', // Set the inactive (unselected) tab text color to black
          tabBarActiveBackgroundColor: '#1d8129', // Set the active (selected) tab background color to lightgreen
          tabBarInactiveBackgroundColor: 'white', // Set the inactive (unselected) tab background color to white
          tabBarLabelStyle: { fontSize: 12 }, // Set the font size for tab labels
          tabBarStyle: {
            height: 40,
            left: 2,
            borderRadius: 15, // Set the border radius for the tabBar
            marginHorizontal: 5, // Set the horizontal margin for the tabBar
          },
        })}
        
      >              
         <Tab.Screen name="Home" component={HomeStackScreen} options={{header: () => null,  }} />
          <Tab.Screen name="Categories" component={Categories} options={{header: () => null, }} />
	        <Tab.Screen name="Favourite" component={Favourite} options={{header: () => null, }} />
          <Tab.Screen name="Cart" component={Cart} options={{header: () => null, }} />
	        <Tab.Screen name="Account" component={Account} options={{ tabBarBadge: 3, header: () => null, }} /> 
          
        </Tab.Navigator>
    </NavigationContainer>
  );
}

