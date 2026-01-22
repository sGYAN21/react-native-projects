import React from 'react';
import {
  StyleSheet, View, Text, Image, TextInput,
  ScrollView, TouchableOpacity, SafeAreaView,
  ImageBackground
} from 'react-native';
import menu from '../assets/icons/menu.png';
import search from '../assets/icons/search.png';
import mic from '../assets/icons/mic.png';
import arrowRight from '../assets/icons/arrowRight.png';
import arrowLeft from '../assets/icons/arrowLeft.png';
import banner from '../assets/images/cover.png'
import star from '../assets/icons/star.png'
import starGrey from '../assets/icons/starGrey.png'
import stylish from '../assets/logos/stylish.png'
import avatar from '../assets/logos/profile.png'
import women from '../assets/images/women.png'
import Card from '../components/Card';
import { categories, productList } from '../constants/constants';
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('checkout')}
          >
            <Image source={menu} style={styles.icon24} />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image source={stylish} style={styles.logo} />

          </View>
          <TouchableOpacity
        
          >
            <Image source={avatar} style={styles.avatar} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Image source={search} style={styles.icon20} />
          <TextInput placeholder="Search any Product..." style={styles.searchInput} />
          <Image source={mic} style={styles.icon20} />
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {categories.map((item, index) => (
            <View key={index} style={styles.catItem}>
              <View style={styles.catCircle}>
                <Image source={item.image} style={styles.catImg} />
              </View>
              <Text style={styles.catText}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Hero Banner */}
        <ImageBackground
          source={banner}
          style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>50-40% OFF</Text>
            <Text style={styles.bannerSub}>Now in (product){'\n'}All colours</Text>
            <TouchableOpacity style={styles.shopBtn}>
              <Text style={styles.shopText}>Shop Now</Text>
              <Image source={arrowRight} style={styles.arrowSmall} />
            </TouchableOpacity>
          </View>
        </ImageBackground>


        {/* Product Grid */}
        <View style={styles.productRow}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap:14 }}>
            {productList.map((item) => (
              <Card
                key={item.id}
                {...item} 
              />
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 15,
    paddingVertical: 35 ,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  icon24: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  icon20: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#BBB',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },

  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginLeft: 8,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginHorizontal: 8,
    marginTop: 25,
    height: 50,
    outlineColor: 'none',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 16,
    letterSpacing:1,
    fontFamily: 'Montserrat', 
    color: '#BBBBBB',
  },
  categories:{
    marginVertical: 25,
  },

  catItem: {
    alignItems: 'center',
    marginRight: 18,
  },

  catCircle: {
    width: 62,
    height: 62,
    borderRadius: 32.5,
    overflow: 'hidden',
    backgroundColor: '#F2F2F2',
  },

  catImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  catText: {
    marginTop: 8,
    fontSize: 13,
    color: '#212121',
  },

  banner: {
    backgroundColor: '#FF8C94',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    height: 180,
    overflow: 'hidden',
  },

  bannerContent: {
    flex: 1,
    justifyContent: 'space-between',
  },

  bannerTitle: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '900',
  },

  bannerSub: {
    color: '#FFF',
    fontSize: 14,
    marginVertical: 10,
  },

  shopBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },

  shopText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginRight: 8,
  },

  arrowSmall: {
    width: 14,
    height: 14,
    tintColor: '#FFF',
  },

  bannerImg: {
    width: 160,
    height: 180,
    position: 'absolute',
    right: -10,
    bottom: 0,
    resizeMode: 'contain',
  },

  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
});
