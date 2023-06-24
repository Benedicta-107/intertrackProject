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
const favouritePlace = [
  {
      id: 1,
      image: 'https://group-live.jumia.is/images/press/articles/jumia-launches-its-food-festival-to-promote-adoption-of-meal-ordering-support-local-restaurants-during-covid-19.png',
      restaurant: 'Jumia Restaurant',
      locationIcon: 'https://img.icons8.com/?size=512&id=85353&format=png',
      location: 'No. 2 Mbanefo str, Enugu',
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      ratingNum: ' 4.0',
      Reviews: ' (132 reviews)',
      distance: ' 30 mins away | 0.4 km',
      like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
    },
  {
      id: 2,
      image: 'https://www.futurefoodfinance.com//images/companies/glovo.png',
      restaurant: 'Glovo Restaurant',
      locationIcon: 'https://img.icons8.com/?size=512&id=85353&format=png',
      location: 'No. 2 Mbanefo str, Enugu',
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      ratingNum: ' 4.0',
      Reviews: ' (132 reviews)',
      distance: '30 mins away | 0.4 km',
      like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
    },
  {
      id: 3,
      image: 'https://rudieslondon.com/wp-content/uploads/2020/02/static_png_5310343-uber-eats-logo-clip-art-brand-uber-eat-logo-png-download-501-uber-eats-png-900_660_preview.jpg',      
      restaurant: 'Uber Restaurant',
      locationIcon: 'https://img.icons8.com/?size=512&id=85353&format=png',
      location: 'No. 2 Mbanefo str, Enugu',
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      ratingNum: ' 4.0',
      Reviews: ' (132 reviews)',
      distance: ' 30 mins away|0.4 km',
      like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
    },
  {
      id: 4,
      image: 'https://pbs.twimg.com/profile_images/838513780216762369/GZYVzAR9_400x400.jpg',      
      restaurant: 'Genesis Restaurant',
      locationIcon: 'https://img.icons8.com/?size=512&id=85353&format=png',
      location: 'No. 2 Mbanefo str, Enugu',
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      ratingNum: ' 4.0',
      Reviews: ' (132 reviews)',
      distance: ' 30 mins away | 0.4 km',
      like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
    },
  
  {
      id: 5,
      image: 'https://branches.com.ng/cms/lib/company/1598857958crunchies_logo_main.png',      
      restaurant: 'Crunchies Restaurant',
      locationIcon: 'https://img.icons8.com/?size=512&id=85353&format=png',
      location: 'No. 2 Mbanefo str, Enugu',
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      ratingNum: ' 4.0',
      Reviews: ' (132 reviews)',
      distance: ' 30 mins away|0.4 km',
      like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
    },
  
]

// const renderFavouritePlace =({ item }) => {
//   let imageStyle = styles.image; // Default style for IDs other than 1 and 3

//   if (item.id === 1) {
//     imageStyle = styles.image; // Style for ID 1
//   } else if (item.id === 3) {
//     imageStyle = styles.image; // Style for ID 3
//   }
//   return (
//     <View style={{flexDirection:'row', marginTop: 10, borderColor: '#fff', borderWidth: 1, backgroundColor: '#fff', borderRadius: 25,}}>
//       <Image source={{ uri: item.image}}/>
//       <Text style = {{ margin: 20, padding: 10}}>
//         {item.restaurant}
//       </Text>
//       <View>
//         <Image source={{uri: item.locationIcon}} style={{width: 15, height:15,}}/>
//         <Text>
//           {item.location}
//         </Text>
//       </View>
      
//       <View style={{flexDirection: 'row', margin: 20, padding: 10}}>
//         <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
//         <Text>
//           {item.ratingNum}
//         </Text>
//         <Text>
//           {item.Reviews}
//         </Text>
//       </View>
//       <View>
//           <View style={{flexDirection: 'column', top: 40, right: 100,}}>
//               <Text style={{fontSize: 20, fontWeight: '600'}}>
//                   {item.place}
//               </Text>
//               <Text style={{fontSize: 12, fontWeight: '600'}}> 
//                   {item.distance}
//               </Text>
          
//           </View>
//           <TouchableOpacity onPress={() => handleFavouritePlace(item)} style={{left: 30, alignContent: 'center',
//                   bottom:25
//                   }}>
//                 <Image source={{uri: item.rating}} style={{width: 15, height:15, marginTop: 12, alignSelf: 'center',}}/>    
//               </TouchableOpacity>
//       </View>
          
//   </View>
//   );
// };
const renderFavouritePlace = ({ item }) => {
  if (item.id === 1) {
    return (
      
      <View style={{ flexDirection: 'row', marginTop: 10, borderWidth: 2, borderColor: '#B1B1B1', borderRadius: 15, height:95, }}>
        <Image source={{ uri: item.image }} style={{ width: 130 }} />
        <Text style={{ margin: 10, padding: 5 , bottom:10, fontSize:15, fontWeight: 'bold', color: '#1d8129'}}>
          {item.restaurant}
        </Text>
        <View style={{flexDirection: 'row', top:30, right:145,}}>
          <Image source={{ uri: item.locationIcon }} style={{ width: 15, height: 15 }} />
          <Text>
            {item.location}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', bottom:5, right:170, }}>
          <Image source={{ uri: item.rating }} style={{ width: 15, height: 15, tintColor: '#1d8129' }} />
          
          <Text style={{fontWeight:'bold'}}>
            {item.ratingNum}
          </Text>
          <Text style={{fontSize:12, color:'#B1B1B1'}}>
            {item.Reviews}

          </Text>
          {/* <Text>
              {item.place}
            </Text> */}
            <Text style={{fontSize: 12, fontWeight: '500'}} >
              {item.distance}
            </Text>
        </View>
        <View style={{ position: 'relative', right: 180, bottom: 18, }}>
          <TouchableOpacity onPress={() => handleFavouritePlace(item)} >
            <Image source={{ uri: item.like }} style={{ width: 30, height: 30,  }} />
          </TouchableOpacity>
        </View>
        </View>

        
  
      </View>
    );
  } else if (item.id === 3) {
    return (
      <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5, 
                    borderWidth: 2, borderColor: '#B1B1B1', borderRadius: 15, height:100, }}>
        <Image source={{ uri: item.image }} style={{ width: 75, height: 75, }} />
        <Text style={{ margin: 10, padding: 5 , bottom:10, fontSize:15, fontWeight: 'bold', color: '#1d8129', left:15,}}>
          {item.restaurant}
        </Text>
        <View style={{flexDirection: 'row', top:30, right:115,}}>
          <Image source={{ uri: item.locationIcon }} style={{ width: 15, height: 15 }} />
          <Text>
            {item.location}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', bottom:5, right:170, }}>
          <Image source={{ uri: item.rating }} style={{ width: 15, height: 15, tintColor: '#1d8129' }} />
          
          <Text style={{fontWeight:'bold'}}>
            {item.ratingNum}
          </Text>
          <Text style={{fontSize:15, color:'#B1B1B1'}}>
            {item.Reviews}

          </Text>
          {/* <Text>
              {item.place}
            </Text> */}
            <Text style={{fontSize: 12, fontWeight: '500'}} >
              {item.distance}
            </Text>
        </View>
        <View style={{ position: 'relative', right: 170, bottom: 18, }}>
          <TouchableOpacity onPress={() => handleFavouritePlace(item)} >
            <Image source={{ uri: item.like }} style={{ width: 30, height: 30,  }} />
          </TouchableOpacity>
        </View>
        </View>

      </View>
    );
  } else {
    return (
      <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 5, borderWidth: 2,
                    borderRadius: 15, height:100, borderColor: '#B1B1B1',}}>
        <Image source={{ uri: item.image }} style={{ width: 80, height: 80, }} />
        <Text style={{ margin: 10, padding: 5 , bottom:10, fontSize:15, fontWeight: 'bold', color: '#1d8129', left: 10,}}>
          {item.restaurant}
        </Text>
        <View style={{flexDirection: 'row', top:30, right:130,}}>
          <Image source={{ uri: item.locationIcon }} style={{ width: 15, height: 15 }} />
          <Text>
            {item.location}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', bottom:5, right:170, }}>
          <Image source={{ uri: item.rating }} style={{ width: 15, height: 15, tintColor: '#1d8129' }} />
          
          <Text style={{fontWeight:'bold'}}>
            {item.ratingNum}
          </Text>
          <Text style={{fontSize:12, color:'#B1B1B1'}}>
            {item.Reviews}

          </Text>
          {/* <Text>
              {item.place}
            </Text> */}
            <Text style={{fontSize: 12, fontWeight: '500'}} >
              {item.distance}
            </Text>
        </View>
        <View style={{ position: 'relative', right: 160, bottom: 18, }}>
          <TouchableOpacity onPress={() => handleFavouritePlace(item)} >
            <Image source={{ uri: item.like }} style={{ width: 30, height: 30,  }} />
          </TouchableOpacity>
        </View>
        </View>

      </View>
    );
  }
};

const handleFavouritePlace = (item) => {
  console.log('Pressed favourite place', item);
};


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
// incase of disorder remove the first view style.
  const renderSearch = () => {
    return (
      <View style={{flex: 1}}>    //
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
      {/* MEALS */}
      <View>
        <FlatList
          data={meals}
          renderItem={renderMeals}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* FAVOURITE RESTAURANT */}
      <FlatList
          data={favouritePlace}
          renderItem={renderFavouritePlace}
          keyExtractor={(item) => item.id.toString()}
          //horizontal
          showsVerticalScrollIndicator={false}
        />
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
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    marginVertical: 5,
  },

  // image1: {
  //   width: 50,
  //   height:50,
  // },

  // image3: {
  //   width: 50,
  //   height:50,
  // },
});

export default Favourite;
