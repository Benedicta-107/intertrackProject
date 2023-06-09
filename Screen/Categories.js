import React from 'react';
import {
    View,
    Text, SectionList, TouchableOpacity, Image,
} from 'react-native';

const favouriteKitchen = [
    {
        id: 1,
        image: 'https://toppng.com/uploads/preview/mcdonalds-logo-transparent-background-11658872813e1gdvuq4jx.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'MC Donalds',
        distance: '10 mins away',
        more: 'See More',
      },
    {
        id: 2,
        image: 'https://betajob.com.ng/storage/files/ng/2648/thumb-240x180-05739cb017805eca8ecfc4baadff4c63.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'Kilimanjaro',
        distance: '45 mins away',
        more: 'See More',
      },
    {
        id: 3,
        image: 'https://pbs.twimg.com/profile_images/2583157912/MrBiggs_logo_400x400.jpg',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Mr Biggs',
        distance: '30 mins away',
        more: 'See More',
      },
    {
        id: 4,
        image: 'https://branches.com.ng/cms/lib/company/1598857958crunchies_logo_main.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Crunchies',
        distance: '45 mins away',
        more: 'See More',
      },
    {
        id: 5,
        image: 'https://group-live.jumia.is/images/press/articles/jumia-launches-its-food-festival-to-promote-adoption-of-meal-ordering-support-local-restaurants-during-covid-19.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Jumia Food',
        distance: '15 mins away',
        more: 'See More',
      },
]

const addedKitchen = [
    {
        id: 6,
        image: 'https://www.futurefoodfinance.com//images/companies/glovo.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Glovo',
        distance: '45 mins away',
        more: 'See More',
      },
    {
        id: 7,
        image: 'https://1.bp.blogspot.com/-8NT6brue_G0/YNpH9VIrWlI/AAAAAAAAIUg/fK-qG_7AgAAW7kgvHvxNPGjM2exvV_enACLcBGAsYHQ/s512/48E56A15-AB58-4EAA-AF59-00BA96FD89F3.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Ntachi Osa',
        distance: '45 mins away',
        more: 'See More',
      },
      {
        id: 8,
        image: 'https://branches.com.ng/cms/lib/company/1598857958crunchies_logo_main.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Crunchies',
        distance: '45 mins away',
        more: 'See More',
      },
      {
        id: 9,
        image: 'https://toppng.com/uploads/preview/mcdonalds-logo-transparent-background-11658872813e1gdvuq4jx.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'MC Donalds',
        distance: '10 mins away',
        more: 'See More',
      },
      {
        id: 10,
        image: 'https://betajob.com.ng/storage/files/ng/2648/thumb-240x180-05739cb017805eca8ecfc4baadff4c63.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'Kilimanjaro',
        distance: '45 mins away',
        more: 'See More',
      },
]

const localKitchen = [
    {
        id: 11,
        image: 'https://toppng.com/uploads/preview/mcdonalds-logo-transparent-background-11658872813e1gdvuq4jx.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'MC Donalds',
        distance: '10 mins away',
        more: 'See More',
      },
    {
        id: 12,
        image: 'https://betajob.com.ng/storage/files/ng/2648/thumb-240x180-05739cb017805eca8ecfc4baadff4c63.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'Kilimanjaro',
        distance: '45 mins away',
        more: 'See More',
      },
      {
        id: 13,
        image: 'https://1.bp.blogspot.com/-8NT6brue_G0/YNpH9VIrWlI/AAAAAAAAIUg/fK-qG_7AgAAW7kgvHvxNPGjM2exvV_enACLcBGAsYHQ/s512/48E56A15-AB58-4EAA-AF59-00BA96FD89F3.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Ntachi Osa',
        distance: '45 mins away',
        more: 'See More',
      },
    {
        id: 14,
        image: 'https://branches.com.ng/cms/lib/company/1598857958crunchies_logo_main.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Crunchies',
        distance: '45 mins away',
        more: 'See More',
      },
]

const renderFavouriteKitchen =({ item }) => {
    return (
      <View style={{flexDirection:'row', marginTop: 10, borderColor: '#fff', borderWidth: 1, backgroundColor: '#fff', borderRadius: 25,}}>
        <Image source={{ uri: item.image}} style={{width: 100, height: 100, marginHorizontal: 5, marginVertical: 5,}}/>
        <View style={{flexDirection: 'row', margin: 20, padding: 10}}>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        </View>
        <View>
            <View style={{flexDirection: 'column', top: 40, right: 100,}}>
                <Text style={{fontSize: 20, fontWeight: '600'}}>
                    {item.place}
                </Text>
                <Text style={{fontSize: 12, fontWeight: '600'}}> 
                    {item.distance}
                </Text>
            
            </View>
            <TouchableOpacity onPress={() => handleFavouriteKitchen(item)} style={{backgroundColor: '#1d8129', 
                    borderRadius: 5, width: 100, height: 50, borderRadius: 15, left: 30, alignContent: 'center',
                    bottom:25
                    }}>
                <Text style={{color: '#fff', fontWeight: '600', marginTop: 12, alignSelf: 'center',}}>
                    {item.more}
                </Text>
                </TouchableOpacity>
        </View>
            
    </View>
    );
  };
  const handleFavouriteKitchen = (item) => {
    console.log('Pressed favourite kitchen', item);
  };
  
  const renderAddedKitchen =({ item }) => {
    return (
        // IMAGE SECTION
      <View style={{flexDirection:'row', marginTop: 10, borderColor: '#fff', borderWidth: 1, backgroundColor: '#fff', borderRadius: 25,}}>
        <Image source={{ uri: item.image}} style={{width: 100, height: 100, marginHorizontal: 5, marginVertical: 5,}}/>
        {/* RATING SECTION */}
        <View style={{flexDirection: 'row', margin: 20, padding: 10}}>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        </View>
        <View>
            {/* TEXT SECTION */}
            <View style={{flexDirection: 'column', top: 40, right: 100,}}>
                <Text style={{fontSize: 20, fontWeight: '600'}}>
                    {item.place}
                </Text>
                <Text style={{fontSize: 12, fontWeight: '600'}}> 
                    {item.distance}
                </Text>
            
            </View>
            {/* SEE MORE */}
            <TouchableOpacity onPress={() => handleAddedKitchen(item)} style={{backgroundColor: '#1d8129', 
                    borderRadius: 5, width: 100, height: 50, borderRadius: 15, left: 30, alignContent: 'center',
                    bottom:25
                    }}>
                <Text style={{color: '#fff', fontWeight: '600', marginTop: 12, alignSelf: 'center',}}>
                    {item.more}
                </Text>
                </TouchableOpacity>
        </View>
      </View>
    );
  };
  const handleAddedKitchen = (item) => {
    console.log('Pressed added kitchen', item);
  };
  
  const renderLocalKitchen =({ item }) => {
    return (
      <View style={{flexDirection:'row', marginTop: 10, borderColor: '#fff', borderWidth: 1, backgroundColor: '#fff', borderRadius: 25,}}>
        <Image source={{ uri: item.image}} style={{width: 100, height: 100, marginHorizontal: 5, marginVertical: 5,}}/>
        <View style={{flexDirection: 'row', margin: 20, padding: 10}}>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        </View>
        <View>
            {/* TEXT SECTION */}
            <View style={{flexDirection: 'column', top: 40, right: 100,}}>
                <Text style={{fontSize: 20, fontWeight: '600'}}>
                    {item.place}
                </Text>
                <Text style={{fontSize: 12, fontWeight: '600'}}> 
                    {item.distance}
                </Text>
            
            </View>
            {/* SEE MORE */}
            <TouchableOpacity onPress={() => handleLocalKitchen(item)} style={{backgroundColor: '#1d8129', 
                    borderRadius: 5, width: 100, height: 50, borderRadius: 15, left: 30, alignContent: 'center',
                    bottom:25
                    }}>
                <Text style={{color: '#fff', fontWeight: '600', marginTop: 12, alignSelf: 'center',}}>
                    {item.more}
                </Text>
                </TouchableOpacity>
        </View>
      </View>

    );
  };
  const handleLocalKitchen = (item) => {
    console.log('Pressed local kitchen', item);
  };
  
const Categories = () => {
    const kitchen = [
        {title: 'Your Favourite Kitchen', data: favouriteKitchen},
        {title: 'Recently Added Kitchen', data: addedKitchen},
        {title: 'Your Local Kitchen', data: localKitchen},
    ]
    return (
        <View style={{ flex: 1, marginHorizontal: 5}}>
          <SectionList
            sections={kitchen}
            keyExtractor={(item, index) => item.id.toString() + index}
            renderItem={({ item, section }) => {
              switch (section.title) {
                case 'Your Favourite Kitchen':
                  return renderFavouriteKitchen({ item });
                case 'Recently Added Kitchen':
                  return renderAddedKitchen({ item });
                case 'Your Local Kitchen':
                  return renderLocalKitchen({ item });
                default:
                  return null;
              }
            }}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ color: '#1d8129', margin: 5, padding: 5, fontWeight: '500', fontSize: 20 }}>
                {title}
              </Text>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
    // return (
    //     <View style={{flex:1}}>
    //        <SectionList
    //             sections={kitchen}
    //             keyExtractor={(item, index) => item + index}
    //             renderItem={({item}) => (
    //                 <View style = {{ padding: 20, marginVertical: 8}}>
    //                     <Text style = {{fontSize: 20}}>
    //                         {item}
    //                     </Text>
    //                 </View>    
    //             )}
    //             renderSectionHeader={({section: {title}}) => (
    //                 <Text>
    //                     {title}
    //                 </Text>
    //             )} 
    //         />
    //     </View>
    // )
}

export default Categories;