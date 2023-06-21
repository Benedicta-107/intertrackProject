import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    
} from 'react-native';


// const handleOrder = () => {
//     // Handle the order placement logic here
//     // Navigate to the Menu screen with the selected item's ID
//     navigation.navigate(Cart, { itemId: item.id});
//   };

const Header = ({
    containerStyle, title, titleStyle, leftComponent, rightComponent
    }) => {
        return (
            <View 
                style={{height:60, flexDirection:'row', ...containerStyle,}}
            >
                {
                    leftComponent
                }
                <View
                    style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
                >
                    <Text style={{fontSize: 24, ...titleStyle}}>
                        {title}
                    </Text>
                </View>
                {
                    rightComponent
                }
            </View>
        );
};

const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
    return (
        <TouchableOpacity
            style={{...containerStyle}} onPress={onPress}
        >
            <Image
                source={{uri: 'https://img.icons8.com/?size=512&id=PXS7hSwrozS5&format=png'}}
                style={{width:30, height:30, ...iconStyle}}
            />
        </TouchableOpacity>
    );
};
const Menu = ({ route }) => {
    const navigation = useNavigation();
    
    const { itemId, offers } = route.params || {}; // Add the conditional check and provide a default empty object
    console.log('itemId:', itemId); // Check the value of ItemId
    console.log('offers:', offers)
    console.log('Benedicta', route)
    const [quantity, setQuantity] = useState(1);

    function renderHeader(){
        return(
            <Header
                title="Menu"
                titleStyle={{ justifyContent: 'center', fontSize: 24, fontWeight: 'bold', color: '#1d8129'}}
                containerStyle={{
                    height: 70,
                    paddingVertical: 10,
                    paddingHorizontal: 12,
                    marginHorizontal: 5,
                    marginTop: 25,
                    backgroundColor: '#E4F0E8',
                    borderWidth: 0.5,
                    borderColor: '#1d8129',
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: 15,
                }}
                leftComponent={
                    <IconButton
                        icon= 'https://img.icons8.com/?size=512&id=PXS7hSwrozS5&format=png'
                        containerStyle={{
                            justifyContent: "center",
                            alignItems: "center",
                            //margin: 15
                        }}
                        iconStyle={{
                            width: 40,
                            height: 40,
                            tintColor: '#000000'
                        }}
                       onPress={() => navigation.navigate('Home')}
                    />
                }
                rightComponent={
                    <TouchableOpacity
                        style={{backgroundColor:'#1d8129',height:50, width:50, borderRadius:100, paddingVertical:10, paddingHorizontal:10,}}
                        onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={{color: '#fff', fontSize:24, fontWeight: 'bold', textAlign: 'center'}}>
                                A
                            </Text>
                        </TouchableOpacity>
                }
            />
        );
    };
    
    if (offers) {
        const selectedItem = offers.find((item) => item.id === itemId);
        if (selectedItem) {
            return (
                <View style={{backgroundColor: '#fff',}}>
                    {/* HEADER */}
                    {renderHeader()}
                                    {/* BODY */}
                    <View >
                        <Image source={{ uri: selectedItem.image }} 
                            style={{ width: 400, height: 150, top:5, marginHorizontal:5,  }}
                            resizeMode='cover' />
                        <Image source={{ uri: selectedItem.like }} 
                            style={{ width: 50, height: 50, tintColor: '#000000',
                                bottom:150, left:350, }}
                            resizeMode='cover' />
                    </View>
                    <View style={{flexDirection:'column', marginHorizontal: 5,}}>
                        <Text style={{color:'#1d8129', fontSize: 20, fontWeight:'600'}}>
                            {selectedItem.type}
                        </Text>
                        <Text style={{fontSize:16, fontWeight: '700',}}>
                            {selectedItem.place}
                        </Text>
                        <Text style={{fontSize:16, fontWeight: '900',}}>
                            {selectedItem.price}
                        </Text>
                        {/* <Button title="Place Order" onPress={() => console.log('Place Order clicked')} /> */}
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
                    <View style={{flexDirection: 'column', bottom:250, left: 300,}}>
                        <View style={{flexDirection: 'row', }}>
                            <Image source={{uri: selectedItem.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
                            <Image source={{uri: selectedItem.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
                            <Image source={{uri: selectedItem.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
                            <Image source={{uri: selectedItem.noRating}} style={{width: 15, height:15, }}/>
                            <Image source={{uri: selectedItem.noRating}} style={{width: 15, height:15, }}/>
                        </View>
                        <Text>
                            {selectedItem.review}
                        </Text> 
                    </View>           
        
                    
        
                    {/* DETAILS */}
                    <Text>Menu</Text>
                    <View style={{}}>
                        <TouchableOpacity style={{backgroundColor: '#1d8129', width:20, height:20, borderRadius:100, }}
                            onPress={() =>{
                                if (quantity === 1) 
                                {
                                    return;
                                } else 
                                {
                                    setQuantity(quantity-1)
                                }
                                }}
                        >
                            <Text style={{fontSize:40, textAlign: 'center', fontWeight:'bold', padding:5,}}>
                                -
                            </Text>
                        </TouchableOpacity>
                        <Text>
                            {quantity}
                        </Text>
                        <Button title='+' onPress={() =>{
                            setQuantity(quantity+1)
                            }}
                        />
                    </View>
                </View>
            );
          };
          return (
            <View>
              <Text>Item not found.</Text>
            </View>
          );
        };
        }
        
export default Menu;
 