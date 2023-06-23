import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

const MenuScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon}>
          {/* Your back icon component */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Menu</Text>
        <View style={styles.alphabetContainer}>
          <Text style={styles.alphabet}>A</Text>
        </View>
      </View>

      {/* Food Image */}
      <View style={styles.foodContainer}>
        <Image source={{uri: 'https://i.pinimg.com/originals/b2/d5/0c/b2d50c4b7213a42ef4ca43f49dc78480.jpg'}} style={styles.foodImage} />
        <TouchableOpacity style={styles.likeIcon}>
          {/* Your like icon component */}
        </TouchableOpacity>
      </View>

      {/* Ratings */}
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>3 stars</Text>
        <Text style={styles.seeAllReviews}>See All Reviews</Text>
      </View>

      {/* Text Info */}
      <View style={styles.textInfoContainer}>
        <Text style={styles.textInfo}>Jollof Rice</Text>
        <Text style={styles.textInfo}>From Genesis</Text>
        <Text style={styles.textInfo}>$15.00</Text>
      </View>

      {/* Counter */}
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.counterButton}>
          <Text style={styles.counterText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterText1}>1</Text>
        <TouchableOpacity style={styles.counterButton}>
          <Text style={styles.counterText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Description */}
      <Text style={styles.description}>Description</Text>
      <Text style={styles.descriptionText}>
        Jollof rice is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions,
        spices, vegetables, and meat in a single pot, although its ingredients and preparation methods vary across
        different regions.
      </Text>

      {/* Main Ingredients */}
      <Text style={styles.ingredients}>Main ingredients:</Text>
      <Text style={styles.ingredientsText}>
        Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef.
      </Text>

      {/* Customize Options */}
      <Text style={styles.customize}>Customize your order</Text>
      <View style={styles.customizeOptions}>
        <Text style={styles.option}>Extra meat</Text>
        <Text style={styles.optionPrice}>$4.00</Text>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.optionText}>1</Text>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Repeat the above customize options for Extra salad and Extra vegetables */}
      
      {/* Customize More Button */}
      <TouchableOpacity style={styles.customizeMoreButton}>
        <Text style={styles.customizeMoreButtonText}>Customize More</Text>
      </TouchableOpacity>

      {/* Total Price */}
      <Text style={styles.totalPrice}>Total price</Text>
      <Text style={styles.priceAmount}>$15.00</Text>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backIcon: {
    // Style your back icon component
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alphabetContainer: {
    backgroundColor: 'green',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alphabet: {
    color: 'white',
    fontSize: 18,
  },
  foodContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  foodImage: {
    width: '95%',
    height: undefined, // Adjust the height based on the image aspect ratio
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  likeIcon: {
    // Style your like icon component
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllReviews: {
    color: 'green',
    fontSize: 16,
  },
  textInfoContainer: {
    marginBottom: 16,
  },
  textInfo: {
    marginBottom: 4,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  counterButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  counterText: {
    color: 'white',
    fontSize: 30,
    backgroundColor: 'green',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // marginRight: 5,
  },
  counterText1: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'green',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding:5,
    // marginRight: 5,
  },
  description: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  descriptionText: {
    marginBottom: 16,
    fontSize: 16,
    color: 'black',
  },
  ingredients: {
    marginBottom: 8,
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  ingredientsText: {
    marginBottom: 16,
    fontSize: 16,
    color: 'black',
  },
  customize: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  customizeOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  option: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  optionPrice: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 8,
  },
  optionButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  optionButtonText: {
    color: 'white',
    fontSize: 16,
  },
  customizeMoreButton: {
    marginTop: 16,
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
  },
  customizeMoreButtonText: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  totalPrice: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  priceAmount: {
    marginBottom: 16,
    fontSize: 16,
    color: 'black',
  },
  addToCartButton: {
    backgroundColor: 'green',
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 12,
  },
  addToCartButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
};

export default MenuScreen;


// import React from 'react';
// import {
//     View,
//     Text
// } from 'react-native';

// const Cart = () => {
//     return (
//         <View>
//             <Text>Cart</Text>
//         </View>
//     )
// }

// export default Cart;