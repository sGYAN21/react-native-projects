import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's New in javascript 21- ES12</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://static.fandomspot.com/images/04/13584/13-saitama-one-punch-man-anime.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse. Odio voluptate tempora quis ex fugit omnis assumenda maxime velit? Molestias doloremque, corporis dolore ex cupiditate officiis explicabo quidem deserunt itaque, repellat aliquam, nam fuga ducimus illum omnis provident voluptas.
                    </Text>
                </View>
                 <View style={styles.footerContainer}>
               
                    <TouchableOpacity
                    onPress={() =>openWebsite('https://www.google.com/')}
                    >
                        <Text style={styles.googleLink}>Read More</Text>
                    </TouchableOpacity>
                       <TouchableOpacity
                    onPress={() =>openWebsite('https://www.facebook.com/')}
                    >
                        <Text  style={styles.facebookLink}>Follow Me</Text>
                    </TouchableOpacity>
                  
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card: {
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard: {
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.5,
    },
    headingContainer: {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText: {
        color:'#000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage: {
        height:190,

    },
    bodyContainer: {
        padding:10,
        
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    googleLink:{
        fontSize:16,
        color:'black',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:10
    },
    facebookLink:{
        fontSize:16,
        color:'black',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:10
    },

})