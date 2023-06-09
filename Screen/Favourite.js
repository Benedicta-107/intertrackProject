import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  FlatList
} from 'react-native';

const meals = [
  { id: 1, name: 'Soups' },
  { id: 2, name: 'Chips' },
  { id: 3, name: 'Pastries' },
  { id: 4, name: 'Rice' },
  { id: 5, name: 'Drinks' },
  { id: 6, name: 'Fries' },
  { id: 7, name: 'Veggies' },
];

const Favourite = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderMeals = ({ item }) => {
    const mealStyle = selectedItem === item ? styles.selectedItem : styles.item;

    return (
      <TouchableOpacity
        onPress={() => handleMeals(item)}
        style={mealStyle}
        key={item.id}
      >
        <Text style={{fontSize: 18, color: '#B1B1B1', fontWeight: '600',
                        ...mealStyle}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const handleMeals = (item) => {
    setSelectedItem(item);
    console.log('Pressed meals', item);
  };

  const renderSearch = () => {
    return (
      <View>
            <View
                style={{
                flexDirection: 'row',
                height: 60,
                alignItems: 'center',
                borderWidth: 1.5,
                width: 250,
                borderRadius: 15,
                marginHorizontal: 10,
                // marginRight: 10,
                paddingHorizontal: 10,
                top: 5,
                borderColor: '##1d8129',
                }}
            >
                {/* ICON SECTION */}
                <Image
                    source={{
                    uri: 'https://img.icons8.com/?size=512&id=3096&format=png',
                    }}
                    resizeMode="cover"
                    style={{
                    height: 20,
                    width: 20,
                    tintColor: '#1d8129',
                    }}
                />
                {/* TEXTINPUT SECTION */}
                <TextInput
                    style={{
                    flex: 1,
                    marginLeft: 12,
                    fontSize: 20,
                    }}
                    placeholder="Search"
                />
                <Image
                    source={{
                    uri:
                    'https://github.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/blob/master/assets/icons/search.png?raw=true',
                    }}
                    resizeMode="cover"
                    style={{
                    width: 20,
                    height: 20,
                    tintColor: 'black',
                    }}
                />
            </View>
      </View>
    );
  };

  return (
    <View  style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
        marginHorizontal: 5, marginVertical: 5,}}>
        <Text style={{ color: '#1d8129', fontSize: 24, fontWeight: '600' }}>Nearby</Text>
        {/* SEARCH SECTION */}
        {renderSearch()}
      </View>
      <View>
        <FlatList
          data={meals}
          renderItem={renderMeals}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    color: '#B1B1B1',
    padding: 10,
    marginBottom: 5,
  },
  selectedItem: {
    color: '#1d8129',
    padding: 10,
    marginBottom: 5,
  },
});

export default Favourite;
