import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const FancyCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080.jpg'
                    }}
                    style={
                        styles.cardImage
                    }
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Taj Mahal</Text>
                    <Text style={styles.cardLabel}>Agra</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptatem nobis? Ab eligendi obcaecati alias, sequi id error omnis distinctio!</Text>
                    <Text style={styles.cardFooter}>12 min away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 380,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        overflow: 'hidden',
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: 'black'
    },
    cardImage: {
        height: 340,
        marginBottom: 8,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        
    },
    cardBody: {
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle: {
        color: '#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom:6,

    },
    cardDescription: {
        color: '#000000',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1,
    },
    cardFooter: {
        color: '#000000',
        marginBottom:5,
    },
})

export default FancyCards