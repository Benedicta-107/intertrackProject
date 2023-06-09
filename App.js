import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {HomeStack, CategoriesStack} from "./navigation";
import Home from './Screen/Home';
import Categories from './Screen/Categories'
import Favourite from './Screen/Favourite';
import Cart from './Screen/Cart';
import Account from './Screen/Account'
//import HomeStackScreen from './Screen/navigation/HomeStack';
//import CategoriesStackScreen from './Screen/navigation/CategoriesStack';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Categories" component={Categories} />
      <HomeStack.Screen name="Favourite" component={Favourite} />
      <HomeStack.Screen name="Cart" component={Cart} />
      <HomeStack.Screen name="Account" component={Account} />
    </HomeStack.Navigator>
  );
}

// const CategoriesStack = createNativeStackNavigator();

// function CategoriesStackScreen() {
//   return (
//     <CategoriesStack.Navigator screenOptions={{ headerShown: false }}>
//       <CategoriesStack.Screen name="Categories" component={Categories} />
//       <CategoriesStack.Screen name="Favourite" component={Favourite} />
//       <CategoriesStack.Screen name="Cart" component={Cart} />
//       <CategoriesStack.Screen name="Account" component={Account} />
//     </CategoriesStack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

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
            //borderWidth: 1,
            borderRadius: 15, // Set the border radius for the tabBar
            // padding: 5,
            //margin: 5,
            marginHorizontal: 5, // Set the horizontal margin for the tabBar
            // marginVertical: 1
            // tabBarButton: (props) => (
            //   <TouchableOpacity
            //     {...props}
            //     style={[
            //       props.focused && {
            //         width:50,
            //         borderRadius: 50, // Set the border radius for the active tabBar
            //         marginHorizontal: 10, // Set the horizontal margin for the active tabBar
            //       },
            //     ]}
            //   />
            // ),
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

