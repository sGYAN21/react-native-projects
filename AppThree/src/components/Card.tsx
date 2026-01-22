import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Product } from '../constants/constants';
import star from '../assets/icons/star.png';
import starGrey from '../assets/icons/starGrey.png';


const Card = ({ 
  image, 
  title, 
  description, 
  price, 
  rating, 
  reviews 
}: Product) => {
  return (
    <View style={styles.card}>
     
      <Image source={image} style={styles.prodImg} />
      
      <Text style={styles.prodTitle}>{title}</Text>
      
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      
      <Text style={styles.prodPrice}>₹{price}</Text>

      <View style={styles.ratingRow}>
        {[1, 2, 3, 4, 5].map((num) => (
          <Image
            key={num}
            source={num <= rating ? star : starGrey}
            style={styles.starIcon}
          />
        ))}

        <Text style={styles.ratingText}>{reviews}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    borderTopEndRadius:2,
    elevation: 2,
    // padding:5,
    paddingBottom: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  prodImg: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'cover',
  },
  prodTitle: {
    paddingHorizontal: 8,
    paddingTop: 10,
    fontWeight: 'semibold',
    fontSize: 14,
    color: '#212121',
  },
  description: {
    paddingHorizontal: 8,
    fontSize: 11,
    color: '#666',
    marginVertical: 4,
  },
  prodPrice: {
    paddingHorizontal: 8,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop: 5,
  },
  starIcon: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
  ratingText: {
    fontSize: 10,
    color: '#BBB',
    marginLeft: 5,
  },
});

export default Card;