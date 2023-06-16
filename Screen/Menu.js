import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const iconBack = {
    id: 1,
    back:  'https://img.icons8.com/?size=512&id=85459&format=png'
};

const jellofRice = {
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
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef"
};

const Header = ({containerStyle, leftComponent, rightComponent, title}) => {
    return (
        <View style={{height:60, flexDirection: 'row', ...containerStyle}}>
            {
                leftComponent
            }
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '500', lineHeight: 24, letterSpacing: 0.2, textAlign: 'left', color: '#055517'}}>
                    {title}
                </Text>
            </View>
                {
                    rightComponent
                }
        </View>
    );
};

const iconButton = ({containerStyle, onPress, iconStyle}) => {
    return (
        <TouchableOpacity style={{...containerStyle}} onPress={onPress}>
            <Image
                source={{
                uri: 'https://img.icons8.com/?size=512&id=85459&format=png'
                }}
                resizeMode='cover'
                style={{
                height:14, width:7, tintColor: '#050505', ...iconStyle
                }}
            />
        </TouchableOpacity>
    );
};

const letterButton = ({containerStyle, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{width:40, height:40, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#055517',
            ...containerStyle}}>
                <Text style={{width:20, height:20, color: '#fff'}}>A</Text>
            </TouchableOpacity>
    )
}
const Menu = () => {
    const [FoodItem, setFoodItem] = useState(jellofRice);
    function renderHeader(){
        return (
            <View>
                <Header
                title="Menu"
                containerStyle={{height: 50, marginHorizontal:20, marginTop:40,}}
                />
                leftComponent = {
                    
                    <iconButton
            
                        icon = {back}
                        containerStyle={{width:40, height:40, justifyContent:'center', alignItems: 'center',}}
                        iconStyle={{width:20, height:20, tintColor: '#000000'}}
                        onPress={() => console.log("Back")}
                    />
                }
                rightComponent = {
                    <letterButton/>
                }
            </View>
            
        
        )
    }
    return (
        <View style={{flex:1, backgroundColor: '#fff'}}>
            {/* HEADER */}

            {renderHeader}

            {/* DETAILS */}
            <Text>Menu</Text>
        </View>
    )
}

export default Menu;