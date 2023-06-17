import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cart from './Cart';

const jellofRice = [
{
    id: 1,
    image: 'https://i.pinimg.com/originals/b2/d5/0c/b2d50c4b7213a42ef4ca43f49dc78480.jpg',
    name: "Jellof Rice",
    place: "From Genesis",
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRtaing: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    price: '$15.00',
    review: "See All Reviews",
    describe: "Description",
    description: "Jellof rice, is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a 		  	  single pot, although its ingredients and preparation methods vary across different regions",
    main: "Main ingredients:",
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef",
    like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
},
{
    id: 1,
    image: 'https://nkechiajaeroh.com/wp-content/uploads/2020/12/Nigerian-fried-rice-recipe-photo-3.jpg',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
    place: 'Genesis',
    type: 'Fried Rice',
    price: '$12.00',
    review: "See All Reviews",
    describe: "Description",
    description: "Fried rice, is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a 		  	  single pot, although its ingredients and preparation methods vary across different regions",
    main: "Main ingredients:",
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef",
    like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/b2/d5/0c/b2d50c4b7213a42ef4ca43f49dc78480.jpg',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    place: 'Jumia',
    type: 'Jellof Rice',
    price: '$15.00',
    review: "See All Reviews",
    describe: "Description",
    description: "Jellof rice, is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a 		  	  single pot, although its ingredients and preparation methods vary across different regions",
    main: "Main ingredients:",
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef",
    like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
  },
  {
    id: 3,
    image: 'https://farmhouzng.com/wp-content/uploads/2021/12/boiled-yam-with-egg-sauce.png',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    place: 'Genesis',
    type: 'Boiled Yam',
    price: '$12.00',
    review: "See All Reviews",
    describe: "Description",
    description: "Boiled yam, is a yam dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a 		  	  single pot, although its ingredients and preparation methods vary across different regions",
    main: "Main ingredients:",
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef",
    like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
  },
  {
    id: 4,
    image: 'https://i.ytimg.com/vi/y-xNqPnMaYg/maxresdefault.jpg',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    place: 'Crunches',
    type: 'Vegetable Soup',
    price: '$16.00',
    review: "See All Reviews",
    describe: "Description",
    description: "Vegetable soup is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a 		  	  single pot, although its ingredients and preparation methods vary across different regions",
    main: "Main ingredients:",
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef",
    like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
  },
]

// const handleOrder = () => {
//     // Handle the order placement logic here
//     // Navigate to the Menu screen with the selected item's ID
//     navigation.navigate(Cart, { itemId: item.id});
//   };

const Menu = ({ route }) => {
    //const [FoodItem, setFoodItem] = useState(jellofRice);
    const {ItemId} = route.params;
    const selectedItem = jellofRice.find(item => item.id === ItemId);
    //const image = fetchImageDetails(ItemId);

    return (
        <View style={{flex:1, backgroundColor: '#fff',}}>
            {/* HEADER */}
            <View style={{width:50, height: 50, borderRadius:100, backgroundColor: '#055517', 
                    left: 320, top:5, position:'relative'}}>
                <Text style={{fontWeight:'500', fontSize: 30,  color: '#fff', 
                     alignSelf:'center', top:5,}}>
                    A
                </Text>
            </View>
            {/* BODY */}
            <View style={{position: 'absolute'}}>
                <Image source={{ uri: selectedItem.image }} 
                    style={{ width: 130, height: 130 }}
                    resizeMode='cover' />
                <Image source={{ uri: selectedItem.like }} 
                    style={{ width: 20, height: 20, tintColor: '#000000' }}
                    resizeMode='cover' />
            </View>
            <View style={{flexDirection:'column'}}>
                <Text>
                    {selectedItem.name}
                </Text>
                <Text>
                    {selectedItem.place}
                </Text>
                <Text>
                    {selectedItem.price}
                </Text>
                <Button title="Place Order" onPress={() => console.log('Place Order clicked')} />
                <Text>
                    {selectedItem.describe}
                </Text>
                <Text>
                    {selectedItem.description}
                </Text>
                <Text>
                    {selectedItem.main}
                </Text>
                <Text>
                    {selectedItem.ingredients}
                </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
                    <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
                    <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
                    <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
                    <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
                </View>
                <Text>
                    {selectedItem.review}
                </Text> 
            </View>           

            

            {/* DETAILS */}
            <Text>Menu</Text>
        </View>
    )
}

export default Menu;