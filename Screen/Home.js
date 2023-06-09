//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TextInput, TouchableOpacity, onPress, FlatList } from 'react-native';

const categories = [
  {id: 1, name: 'Rice'},
  {id: 2, name: 'Sea Food'},
  {id: 3, name: 'Fish'},
  {id: 4, name: 'Pepper Soup'},
  {id: 5, name: 'Vegetable Soup'},
  {id: 6, name: 'Smoothie'},
];

const renderCategory = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(item)} 
        style={{borderWidth:0.5, borderColor: '#1d8129', borderRadius: 10,
         margin: 5, padding: 8, }}>
      <Text style={{color: '#1d8129',}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
const handlePress = (item) => {
  console.log('Pressed category', item);
};
const offers = [
  {
    id: 1,
    image: 'https://nkechiajaeroh.com/wp-content/uploads/2020/12/Nigerian-fried-rice-recipe-photo-3.jpg',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
    place: 'Genesis',
    type: 'Fried Rice',
    price: '$12.00',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/b2/d5/0c/b2d50c4b7213a42ef4ca43f49dc78480.jpg',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    place: 'Jumia',
    type: 'Jollof Rice',
    price: '$15.00',
  },
  {
    id: 3,
    image: 'https://farmhouzng.com/wp-content/uploads/2021/12/boiled-yam-with-egg-sauce.png',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    place: 'Genesis',
    type: 'Boiled Yam',
    price: '$12.00',
  },
  {
    id: 4,
    image: 'https://i.ytimg.com/vi/y-xNqPnMaYg/maxresdefault.jpg',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    place: 'Crunches',
    type: 'Vegetable Soup',
    price: '$16.00',
  },
];

const renderOffers =({ item }) => {
  return (
    <View style={{marginHorizontal: 10}}>
      <Image source={{ uri: item.image}} style={{width: 100, height: 100, borderRadius: 15,}}/>
      <View style={{flexDirection: 'row'}}>
      <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
      <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
      <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
      <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
      <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
      </View>
      <Text>
        {item.place}
      </Text>
      <Text>
        {item.type}
      </Text>
      <TouchableOpacity onPress={() => handleOffers(item)} style={{backgroundColor: '#1d8129', borderRadius: 5, width: 100, height: 50, borderRadius: 5}}>
        <Text style={{color: '#fff', fontWeight: '600', marginTop: 12, alignSelf: 'center'}}>
          {item.price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const handleOffers = (item) => {
  console.log('Pressed offers', item);
};
const Home = () => {
  function renderSearch() {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          height: 60,
          alignItems: 'center',
          marginHorizontal: 10,
          marginRight: 80,
          paddingHorizontal: 20,
          borderRadius: 15,
          backgroundColor: '#dcdcdc ',
          borderWidth: 2,
          }}
        >
        {/* ICON SECTION */}
        <Image
          source={{
            uri: 'https://img.icons8.com/?size=512&id=3096&format=png'
          }}
          resizeMode='cover'
          style={{
            height:20, width:20, tintColor: '#050505'
          }}
        />

        {/* TEXTINPUT SECTION */}
        <TextInput
            style={{
              flex:1,
              marginLeft: 12,
              fontSize: 20,
            }}
            placeholder='Search'
          />
          <Image
              source={{
                uri: 'https://github.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/blob/master/assets/icons/search.png?raw=true'
              }}
              resizeMode='cover'
              style={{
                width:20,
                height: 20,
                tintColor: 'black',
                //marginRight: 200,
              }}
            /> 
      </View>
      <View style={{position:'absolute', left: 355, top: 15}}>
            {/*FILTER SECTION  */}
              <TouchableOpacity onPress={onPress}>
                
                <Image 
                  source={{
                  uri: 'https://img.icons8.com/?size=512&id=e1nlfP5MwQ60&format=png'
                  }}
                  resizeMode='cover'
                  style={{
                  height: 30,
                  width: 30,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                  borderWidth:1,
                  borderColor: '#050505',
                  borderRadius: 5,
                  tintColor: '#050505',
                  padding: 10,
                  margin: 1,
                  // marginLeft: 100,
                  }}
                />
              </TouchableOpacity>
           </View>
      </View>
      
    )
  }
  return (
    <ScrollView style={styles.container}>
      {/* PROFILE AND GREETING SECTION */}
      <View style={{flexDirection: 'row', marginTop: 35, justifyContent: 'center', height: 50, marginRight:290,  alignSelf: 'space-between'}}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg'
          }}
          resizeMode='cover'
          style={{width:40, height:40, borderRadius: 100, }}
        />
        <Text
          style={{fontWeight: 'bold', padding:5}}
        >
          Hi Amara
          </Text>
      </View>
      {/* SEARCH SECTION */}
       {renderSearch()}

      {/*RECOMMENDED SECTION */}
       <View style={{flexDirection: 'row', borderWidth: 2, borderColor: '#1d8129', 
                      marginHorizontal: 10, marginTop: 10, borderRadius: 12, justifyContent: 'space-between' }}>
          <View style={{margin: 10, left: 15, top: 20,}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>UPTO</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#1d8129'}}>20% OFF</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Eguisi Soup</Text>
          </View>
          <Image
            source={{
              uri: 'https://scontent.fedi1-1.fna.fbcdn.net/v/t1.6435-9/117598963_2696814213971686_1652156999101572939_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=973b4a&_nc_ohc=Nval0BWgGSoAX9LSxBH&_nc_ht=scontent.fedi1-1.fna&oh=00_AfBlmlE7H40-bh0uUtk5CT92VAwBVKVu7ZPCO_qJt_LcMw&oe=64A5E8A9'
            }}
            resizeMode='cover'
            style={{
              margin:10,
              width:150,
              height: 150,
              borderWidth:5,
              borderColor: '#1d8129',
              borderRadius: 12,
              left: 105,

              
            }}
           />
           {/* Order now */}
          <View style={{position: 'relative', right: 250, top: 140, marginHorizontal: 10,}}>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#1d8129', width: 100, height: 50, borderRadius: 5}}>
              <Text style={{color:'#fff', fontWeight: '600', marginTop: 12, alignSelf: 'center'}}>Order Now</Text>
            </TouchableOpacity>
          </View> 
       </View>
       {/* CATEGORY SECTION */}
       <Text style={{color: '#1d8129', margin: 10, padding: 10, fontWeight: '500'}}>Categories</Text>
       <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
          {/* OFFERS */}
          <Text style={{color: '#1d8129', margin: 5, padding: 10, fontWeight: '500'}}>Today's Special Offers</Text>

          <FlatList
          data={offers}
          renderItem={renderOffers}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          />

      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  );
}

 const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
});

export default Home;