import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Favourite, Cart, Account } from "";
import React from 'react';
import Favourite from './Screen/Favourite';
import Cart from './Screen/Cart';
import Account from './Screen/Account'
import Home from './Screen/Home';
import Categories from './Screen/Categories';


const CategoriesStack = createNativeStackNavigator();

function CategoriesStackScreen() {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name="Categories" component={Categories} />
      <CategoriesStack.Screen name="Favourite" component={Favourite} />
      <CategoriesStack.Screen name="Cart" component={Cart} />
      <CategoriesStack.Screen name="Account" component={Account} />
    </CategoriesStack.Navigator>
  );
}

export default CategoriesStackScreen;
